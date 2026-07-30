// calculations.ts
import { Part } from "../api";
import { PART_IPNS } from "./parts";

export type Material = {
  part: Part;
  selected: boolean;
  quantity?: number;
  measure?: number;
  unit?: string;
};

type TrazOuDentro = "Traz" | "Dentro";
export type PartsMap = Record<string, Part>;

export interface ProductDetails {
  folga: 45;
  width: number;
  height: number;
  type1: TrazOuDentro;
  type2: TrazOuDentro;
  fechadaOuTransvision: "Fechada" | "Transvision";
  flag: boolean;
  door: boolean;
  trapdoor: boolean;
}

interface ProductCalculationDetails extends ProductDetails {
  big: boolean;
  additionHeight: number;
  additionWidth: number;
  heightPlusAddition: number;
  widthPlusAddition: number;
  qtdLamina: number;
}

type forWhatType = undefined | "trapdoor" | "aroundTheTrapdoor" | "door" | "aroundTheDoor";

/**
 * Maps a record of Parts (keyed by camelCase key or IPN) into a record of Materials.
 */
export function buildMaterialsMap(partsMap: Record<string, Part>): Material[] {
  return Object.values(partsMap).map((part) => ({
    part,
    selected: true,
    quantity: undefined,
    measure: undefined,
    unit: undefined,
  }));
}

function calcLamina(
  details: ProductCalculationDetails,
  part: Part,
  fechadaOuTransvision: "Fechada" | "Transvision",
  forWhat?: forWhatType
): Material {
  const widthLamina = details.widthPlusAddition - details.folga;
  switch (forWhat) {
    case undefined: {
      let laminas = details.qtdLamina;
      if (details.trapdoor) {
        laminas -= 6;
      } else if (details.door) {
        laminas -= 20;
      }
      return {
        part,
        selected: details.fechadaOuTransvision === fechadaOuTransvision,
        quantity: laminas,
        measure: widthLamina,
        unit: "mm",
      };
    }
    case "trapdoor":
      return {
        part: { ...part, name: `(Alçapão) ${part.name}` },
        selected: details.fechadaOuTransvision === fechadaOuTransvision && details.trapdoor,
        quantity: 6,
        measure: 750,
        unit: "mm",
      };
    case "aroundTheTrapdoor":
      return {
        part: { ...part, name: `(Ao redor do alçapão) ${part.name}` },
        selected: details.fechadaOuTransvision === fechadaOuTransvision && details.trapdoor,
        quantity: 12,
        measure: Math.round((widthLamina - 570) / 2),
        unit: "mm",
      };
    case "door":
      return {
        part: { ...part, name: `(Portinhola) ${part.name}` },
        selected: details.fechadaOuTransvision === fechadaOuTransvision && details.door,
        quantity: 20,
        measure: 695,
        unit: "mm",
      };
    case "aroundTheDoor":
      return {
        part: { ...part, name: `(Ao redor da portinhola) ${part.name}` },
        selected: details.fechadaOuTransvision === fechadaOuTransvision && details.door,
        quantity: 20,
        measure: widthLamina - 695,
        unit: "mm",
      };
  }
}

function calcDetails(details: ProductDetails): ProductCalculationDetails {
  const big = details.height >= 6000;
  let additionHeight = 0;
  let additionWidth = 0;

  if (details.type1 === "Traz" || details.type2 === "Traz" || details.flag) {
    additionHeight += 400;
  }
  if (details.type1 === "Traz") {
    additionWidth += !big ? 70 : 90;
  }
  if (details.type2 === "Traz") {
    additionWidth += !big ? 70 : 90;
  }
  if (details.type1 === "Dentro" && details.type2 === "Dentro") {
    additionWidth -= 40;
  }

  const heightPlusAddition = details.height + additionHeight;
  const widthPlusAddition = details.width + additionWidth;

  return {
    ...details,
    big,
    additionHeight,
    additionWidth,
    heightPlusAddition,
    widthPlusAddition,
    qtdLamina: Math.round(details.height / 75) + Math.round(additionHeight / 75),
  };
}

/**
 * Calculates raw motor dimension rating based on total door dimensions.
 */
function calcMotorBruto(details: ProductCalculationDetails): number {
  let medida = (details.widthPlusAddition / 1000) * (details.heightPlusAddition / 1000) * 12;
  medida += medida * 0.3;
  return medida;
}

/**
 * Calculates exact motor capacity rating step (e.g., 200, 300, 400 kg).
 */
function calcMotor(details: ProductCalculationDetails): number {
  let medida = calcMotorBruto(details) + 10;
  if (medida < 990) {
    medida = Math.floor((medida + 99) / 100) * 100;
  } else {
    medida = Math.floor((medida + 199) / 200) * 200;
  }
  if (medida === 100) {
    medida = 200;
  }
  return medida;
}

function calcAllLaminas(details: ProductCalculationDetails, partsMap: PartsMap): Material[] {
  const materials: Material[] = [];
  const key = details.fechadaOuTransvision === "Fechada"
    ? PART_IPNS.virtT22PerfilChapa22GalvanizadaFechada
    : PART_IPNS.virtT22PerfilChapa22GalvanizadaTransvision;

  materials.push(calcLamina(details, partsMap[key], details.fechadaOuTransvision));

  if (details.trapdoor) {
    const borboleta: Material = {
      part: partsMap[PART_IPNS.borboleta516],
      selected: details.trapdoor,
      quantity: 10,
    };

    const parafuso: Material = {
      part: partsMap[PART_IPNS.parafuso516],
      selected: details.trapdoor,
      quantity: 10,
    };

    materials.push(
      calcLamina(details, partsMap[key], details.fechadaOuTransvision, "trapdoor"),
      calcLamina(details, partsMap[key], details.fechadaOuTransvision, "aroundTheTrapdoor"),
      borboleta,
      parafuso
    );
  } else if (details.door) {
    materials.push(
      calcLamina(details, partsMap[key], details.fechadaOuTransvision, "door"),
      calcLamina(details, partsMap[key], details.fechadaOuTransvision, "aroundTheDoor")
    );
  }

  return materials;
}

/**
 * Master calculation function - ports Python's `calcular_dados()` into TypeScript.
 */
export function calculateMaterials(details: ProductDetails, partsMap?: PartsMap): Material[] {
  if (partsMap === undefined)
    return [];
  
  const cDetails = calcDetails(details);
  const materials: Material[] = [];

  const widthLamina = cDetails.widthPlusAddition - cDetails.folga;
  const medidaMotor = calcMotor(cDetails);

  // 1. Lâminas (Fechada/Transvision + Trapdoor/Door variations)
  materials.push(...calcAllLaminas(cDetails, partsMap));

  // 2. Tubo redondo 4.5
  materials.push({
    part: partsMap[PART_IPNS.virtTuboRedondo45] ?? partsMap[PART_IPNS.tuboRedondo45],
    selected: !cDetails.big,
    quantity: 1,
    measure: cDetails.widthPlusAddition,
    unit: "mm",
  });

  // 3. Tubo redondo 6.0
  materials.push({
    part: partsMap[PART_IPNS.virtTuboRedondo60] ?? partsMap[PART_IPNS.tuboRedondo60],
    selected: cDetails.big,
    quantity: 1,
    measure: cDetails.widthPlusAddition,
    unit: "mm",
  });

  // 4. Guias perfil U galvanizado 70x30
  materials.push({
    part: partsMap[PART_IPNS.virtGuiasPerfilUGalvanizado70x30] ?? partsMap[PART_IPNS.guiaUGalvanizado70x30],
    selected: !cDetails.big,
    quantity: 2,
    measure: cDetails.height + 80,
    unit: "mm",
  });

  // 5. Guias perfil U galvanizado 90x30
  materials.push({
    part: partsMap[PART_IPNS.virtGuiasPerfilUGalvanizado90x30] ?? partsMap[PART_IPNS.guiaUGalvanizado90x30],
    selected: cDetails.big,
    quantity: 2,
    measure: cDetails.height + 80,
    unit: "mm",
  });

  // 6. Automatizador kg para testeira
  materials.push({
    part: partsMap[PART_IPNS.automatizadorKgParaTesteira],
    selected: true,
    quantity: 1,
    measure: medidaMotor,
    unit: "kg",
  });

  // 7. Testeira
  materials.push({
    part: partsMap[PART_IPNS.virtTesteira] ?? partsMap[PART_IPNS.testeira],
    selected: true,
    quantity: 1,
    measure: medidaMotor,
    unit: "kg",
  });

  // 8. Soleira T chapa dupla
  materials.push({
    part: partsMap[PART_IPNS.virtSoleiraTChapaDupla] ?? partsMap[PART_IPNS.soleiraTChapaDupla],
    selected: !cDetails.big,
    quantity: 1,
    measure: widthLamina,
    unit: "mm",
  });

  // 9. Soleira T chapa dupla com reforço
  materials.push({
    part: partsMap[PART_IPNS.virtSoleiraTChapaDuplaComReforco],
    selected: cDetails.big,
    quantity: 1,
    measure: widthLamina,
    unit: "mm",
  });

  // 10. PVC para as guias anti-ruídos
  materials.push({
    part: partsMap[PART_IPNS.pvcParaAsGuiasAntiRuidos],
    selected: true,
    quantity: 4,
    measure: Math.round((cDetails.height * 4) / 1000),
    unit: "m",
  });

  // 11. Acabamento de borracha para vedação de soleira
  materials.push({
    part: partsMap[PART_IPNS.acabamentoDeBorrachaParaVedacaoDeSoleira],
    selected: true,
    quantity: 1,
    measure: widthLamina,
    unit: "mm",
  });

  // 12. Central de comando com 2 controles
  materials.push({
    part: partsMap[PART_IPNS.centralDeComandoCom2Controles],
    selected: true,
    quantity: 1,
  });

  // 13. Trava lâminas anti-ruído lateral
  materials.push({
    part: partsMap[PART_IPNS.travaLaminasAntiRuidoLateral],
    selected: true,
    quantity: Math.round(cDetails.qtdLamina / 2),
  });

  // 14. Tubo 40 x 30 galvanizado 1,20m
  const numTraz = (cDetails.type1 === "Traz" ? 1 : 0) + (cDetails.type2 === "Traz" ? 1 : 0);
  materials.push({
    part: partsMap[PART_IPNS.virtTubo40X30Galvanizado120m] ?? partsMap[PART_IPNS.tubo40X30Galvanizado120m],
    selected: true,
    quantity: numTraz > 0 ? numTraz : 1,
    measure: cDetails.height,
    unit: "mm",
  });

  // 15. Pintura eletrostática
  materials.push({
    part: partsMap[PART_IPNS.virtPinturaEletrostatica],
    selected: true,
    quantity: undefined,
    measure: Math.round(cDetails.widthPlusAddition * cDetails.heightPlusAddition * 1e-6),
    unit: "m²",
  });

  // 16. Barra de rosca
  materials.push({
    part: partsMap[PART_IPNS.virtBarraDeRosca] ?? partsMap[PART_IPNS.barraDeRosca],
    selected: true,
    quantity: 8,
  });

  // 17. Fechadura
  const countFechadura = (cDetails.trapdoor ? 1 : 0) + (cDetails.door ? 1 : 0);
  materials.push({
    part: partsMap[PART_IPNS.fechadura],
    selected: cDetails.trapdoor || cDetails.door,
    quantity: countFechadura > 0 ? countFechadura : undefined,
  });

  // 18. Porca 3/8
  materials.push({
    part: partsMap[PART_IPNS.porca38],
    selected: true,
    quantity: 8,
  });

  // 19. Parafuso com Bucha 8
  materials.push({
    part: partsMap[PART_IPNS.parafusoComBucha8],
    selected: true,
    quantity: 12,
  });

  return materials;
}