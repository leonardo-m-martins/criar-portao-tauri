import { PART_IPNS } from "./parts";

interface PartProcessFlags {
  corte: boolean;
  solda: boolean;
  pintura: boolean;
  embalagem: boolean;
}

export const partProcessFlags: Record<string, PartProcessFlags> = {
    [PART_IPNS.virtT22PerfilChapa22GalvanizadaFechada]:
    {//"T22 Perfil chapa 22 Galvanizada FECHADA"]
       corte: true,
       solda: false,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.virtT22PerfilChapa22GalvanizadaTransvision]:
    {//"T22 Perfil chapa 22 Galvanizada transvision"]
       corte: true,
       solda: false,
       pintura: true,
       embalagem: true,
    },
    [`ALC-${PART_IPNS.virtT22PerfilChapa22GalvanizadaFechada}`]: 
    {//"Alçapão"]
       corte: true,
       solda: false,
       pintura: true,
       embalagem: true,
    },
    [`LALC-${PART_IPNS.virtT22PerfilChapa22GalvanizadaFechada}`]: 
    {//"Laminas para alçapão"]
       corte: true,
       solda: false,
       pintura: true,
       embalagem: true,
    },
    [`POR-${PART_IPNS.virtT22PerfilChapa22GalvanizadaFechada}`]: 
    {//"Laminas para portinhola"]
       corte: true,
       solda: true,
       pintura: true,
       embalagem: true,
    },
    [`LPOR-${PART_IPNS.virtT22PerfilChapa22GalvanizadaFechada}`]: 
    {//"Laminas para portinhola"]
       corte: true,
       solda: true,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.borboleta516]:
    {//"Borboleta 5/16"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.parafuso516]:
    {//"Parafuso 5/16"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.virtTuboRedondo45]:
    {//"Tubo redondo 4.5"]
       corte: true,
       solda: true,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.virtTuboRedondo60]:
    {//"Tubo redondo 6.0"]
       corte: true,
       solda: true,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.virtGuiasPerfilUGalvanizado70x30]:
    {//"Guias perfil U galvanizado 70x30"]
       corte: true,
       solda: true,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.virtGuiasPerfilUGalvanizado90x30]:
    {//"Guias perfil U galvanizado 90x30"]
       corte: true,
       solda: true,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.automatizadorKgParaTesteira]:
    {//"Automatizador kg para testeira"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.virtTesteira]:
    {//"Testeira"]
       corte: false,
       solda: true,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.virtSoleiraTChapaDupla]:
    {//"Soleira T chapa dupla"]
       corte: true,
       solda: false,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.virtSoleiraTChapaDuplaComReforco]:
    {//"Soleira T chapa dupla com reforço"]
       corte: true,
       solda: true,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.pvcParaAsGuiasAntiRuidos]:
    {//"PVC para as guias anti-ruídos"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.acabamentoDeBorrachaParaVedacaoDeSoleira]:
    {//"Acabamento de borracha para vedação de soleira"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.centralDeComandoCom2Controles]:
    {//"Central de comando com 2 controles"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.travaLaminasAntiRuidoLateral]:
    {//"Trava lâminas anti-ruído lateral"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.virtTubo40X30Galvanizado120m]:
    {//"Tubo 40 x 30 galvanizado 1,20m"]
       corte: true,
       solda: true,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.virtPinturaEletrostatica]:
    {//"Pintura eletrostática"]
       corte: false,
       solda: false,
       pintura: true,
       embalagem: true,
    },
    [PART_IPNS.virtBarraDeRosca]:
    {//"Barra de rosca"]
       corte: true,
       solda: true,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.fechadura]:
    {//"Fechadura"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.porca38]:
    {//"Porca 3/8"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
    [PART_IPNS.parafusoComBucha8]:
    {//"Parafuso com Bucha 8"]
       corte: false,
       solda: false,
       pintura: false,
       embalagem: false,
    },
}