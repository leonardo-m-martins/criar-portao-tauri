import { Part, PartService } from "../api";
import { getPartList } from "../api/wrappers/wparts";

export const PART_IPNS = {
  "acabamentoDeBorrachaParaVedacaoDeSoleira": "BRRCH-SLRA",
  "automatizadorKgParaTesteira": "AUTOMATIZADOR", // Append numero (e.g. AUTOMATIZADOR-200)
  "barraDeRosca": "BARRA-RSC",
  "virtBarraDeRosca": "VIRT-BARRA-RSC",
  "borboleta516": "BRBLT-5/16",
  "centralDeComandoCom2Controles": "CTRAL-CMND-2-CTROLS",
  "chapa22Galvanizada": "CHAPA-22-GALV",
  "fechadura": "FCHDR",
  "virtGuiasPerfilUGalvanizado70x30": "VIRT-GUIA-U-70x30",
  "virtGuiasPerfilUGalvanizado90x30": "VIRT-GUIA-U-90x30",
  "guiaUGalvanizado70x30": "GUIA-U-70x30",
  "guiaUGalvanizado90x30": "GUIA-U-90x30",
  "metalao40x40": "MTLAO-40x40",
  "parafuso516": "PRF-5/16",
  "parafusoComBucha8": "PRF-BUCHA-8",
  "virtPinturaEletrostatica": "VIRT-PNTR-ELETR",
  "porca38": "PRC-3/8",
  "pvcParaAsGuiasAntiRuidos": "PVC-ANTI-RUIDO",
  "soleiraTChapaDupla": "SOLEIRA-T",
  "virtSoleiraTChapaDupla": "VIRT-SOLEIRA-T",
  "virtSoleiraTChapaDuplaComReforco": "VIRT-SOLEIRA-T-RFRC",
  "virtT22PerfilChapa22GalvanizadaFechada": "VIRT-T22-CHP-GLV-FCH",
  "virtT22PerfilChapa22GalvanizadaTransvision": "VIRT-T22-CHP-GLV-TVS",
  "virtTesteira": "VIRT-TSTR",
  "testeira": "TSTR", // Append numero (e.g. TSTR-200)
  "travaLaminasAntiRuidoLateral": "TRV-LMNS",
  "tubo40X30Galvanizado120m": "TUBO-40x30",
  "virtTubo40X30Galvanizado120m": "VIRT-TUBO-40x30",
  "tuboRedondo45": "TUBO-RDND-4.5",
  "virtTuboRedondo45": "VIRT-TUBO-RDND-4.5",
  "tuboRedondo60": "TUBO-RDND-6.0",
  "virtTuboRedondo60": "VIRT-TUBO-RDND-6.0"
} as const;

/**
 * Fetches Part objects for a list of IPNs in parallel and returns an object mapping IPN -> Part.
 * 
 * @param ipns Array of IPN strings to retrieve
 * @returns Promise resolving to a Record<string, Part> map
 */
export async function getPartsMapByIpns(): Promise<Record<string, Part>> {
    const ipns = Object.values(PART_IPNS);

    // Execute queries in parallel
    const partPromises = ipns.map(async (ipn) => {
        try {
            const response = await getPartList({limit: 1, ipn: ipn})
            console.log(`Response: ${response.count}, ${response.results}`);
            const part = response.results[0];
            return { ipn, part: part || null };
        } catch (error) {
            console.error(`Falha em encontrar peça para IPN: ${ipn}`, error);
            return { ipn, part: null };
        }
    });

    const results = await Promise.all(partPromises);

    // Build map from successful results
    const partsMap: Record<string, Part> = {};
    for (const { ipn, part } of results) {
        if (part) {
            partsMap[ipn] = part;
        }
    }

    return partsMap;
}
