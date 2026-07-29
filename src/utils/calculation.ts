export type Material = {
  selected: boolean;
  item: string;
  quantity?: number;
  measure?: number;
  unit?: string;
};

type TrazOuDentro = "Traz" | "Dentro"

export interface ProductDetails {
    folga: 45,
    width: number,
    height: number,
    type1: TrazOuDentro,
    type2: TrazOuDentro,
    fechadaOuTransvision: "Fechada" | "Transvision",
    flag: boolean,
    door: boolean,
    trapdoor: boolean,
}

export function calculateMaterials(details: ProductDetails): Material[] {
    return [];
}