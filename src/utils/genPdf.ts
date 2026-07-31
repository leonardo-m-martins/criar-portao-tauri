import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions, Content, TableCell } from "pdfmake/interfaces";
import { Material, ProductDetails } from "./calculation";
import { partProcessFlags } from "./partFlags";
import { loadSettings } from "./settings";
import { invoke } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";

// Assign VFS fonts safely bypassing TypeScript's strict module checks
(pdfMake as any).vfs = pdfFonts && (pdfFonts as any).pdfMake ? (pdfFonts as any).pdfMake.vfs : pdfFonts;

pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  },
  Helvetica: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
};

export interface FrontPageMeta {
  client: string;
  code: string;
  date: string;
  color: string;
}

/**
 * Resolves process flags for a given material part, accounting for T22 prefixes.
 */
function getFlagsForMaterial(mat: Material) {
  const ipn = mat.part.IPN as string;
  const name = mat.part.name;

  let lookupKey = ipn;

  if (name.startsWith("(Alçapão)")) {
    lookupKey = `ALC-${ipn}`;
  } else if (name.startsWith("(Ao redor do alçapão)")) {
    lookupKey = `LALC-${ipn}`;
  } else if (name.startsWith("(Portinhola)")) {
    lookupKey = `POR-${ipn}`;
  } else if (name.startsWith("(Ao redor da portinhola)")) {
    lookupKey = `LPOR-${ipn}`;
  }

  return partProcessFlags[lookupKey] ?? partProcessFlags[ipn] ?? {
    corte: false,
    solda: false,
    pintura: false,
    embalagem: false,
  };
}

/**
 * Generates the vector diagram matching `draw_diagram()` on Page 1.
 */
function createDiagramCanvas(
  details: ProductDetails,
  corText: string
): Content {
  const sqSize = 210;
  const leftNumStr = details.height.toString();
  const bottomNumStr = details.width.toString();

  return {
    margin: [0, 60, 0, 20],
    alignment: "center",
    stack: [
      // 1. Center Square Canvas
      {
        alignment: "center",
        canvas: [
          {
            type: "rect",
            x: 0,
            y: 0,
            w: sqSize,
            h: sqSize,
            lineWidth: 1.5,
            lineColor: "#000000",
            color: "#FFFFFF",
          },
        ],
      },

      // 2. Text Inside Square (Color Name)
      {
        text: corText,
        bold: true,
        fontSize: 16,
        color: "#000000",
        alignment: "center",
        relativePosition: { x: 0, y: -sqSize / 2 - 8 },
      },

      // 3. Text Top-Left & Top-Right Columns
      {
        alignment: "center",
        columns: [
          { width: "*", text: "" },
          {
            text: details.type1,
            bold: true,
            fontSize: 14,
            color: "#1E293B",
            alignment: "left",
            width: sqSize / 2,
          },
          {
            text: details.type2,
            bold: true,
            fontSize: 14,
            color: "#1E293B",
            alignment: "right",
            width: sqSize / 2,
          },
          { width: "*", text: "" },
        ],
        relativePosition: { x: 0, y: -sqSize - 25 },
      },

      // 4. Text Bottom (Width)
      {
        text: bottomNumStr,
        bold: true,
        fontSize: 15,
        color: "#0F172A",
        alignment: "center",
        relativePosition: { x: 0, y: 15 },
      },

      // 5. Vertical Text to the Left (Height)
      {
        text: leftNumStr,
        bold: true,
        fontSize: 15,
        color: "#0F172A",
        alignment: "center",
        relativePosition: { x: -sqSize / 2 - 25, y: -sqSize / 2 - 8 },
      },
    ],
  };
}

/**
 * Creates a rounded checkbox vector shape aligned right inside table cells.
 */
function createRightAlignedSquare(scale = 1): TableCell {
  // Base dimensions (at scale = 1)
  const baseSize = 12;
  const baseRadius = 3;
  const baseX = 40;

  // Scaled dimensions
  const size = Math.round(baseSize * scale);
  const radius = Math.round(baseRadius * scale);
  
  // Adjust X offset so the scaled square stays right-aligned inside the cell
  const xOffset = Math.round(baseX + (baseSize - size));

  return {
    stack: [
      {
        canvas: [
          {
            type: "rect",
            x: xOffset,
            y: 1, // Reduced y offset slightly to keep vertical centering tight
            w: size,
            h: size,
            r: radius,
            lineWidth: Math.max(0.5, 1 * scale), // Keep border visible when scaled down
            lineColor: "#888888",
            color: "#FFFFFF",
          },
        ],
        alignment: "right",
      },
    ],
  };
}

/**
 * Predicts whether text will wrap based on font size and column width.
 * 
 * @param text The string to measure
 * @param fontSize Active font size in points
 * @param columnWidthPt Width of the table column in points
 * @returns boolean True if text exceeds column width and will wrap
 */
function willTextWrap(text: string, fontSize: number, columnWidthPt: number): boolean {
  // Uppercase Helvetica characters average ~0.60x font size in width
  const AVERAGE_CHAR_WIDTH_FACTOR = 0.60;
  
  // Approximate total width of the string in points
  const estimatedTextWidth = text.length * fontSize * AVERAGE_CHAR_WIDTH_FACTOR;

  // Subtract left + right cell padding (e.g., 4pt left + 4pt right = 8pt)
  const INNER_CELL_PADDING = 8; 
  const availableWidth = columnWidthPt - INNER_CELL_PADDING;

  return estimatedTextWidth > availableWidth;
}

/**
 * Formats values and unit conversions (mm -> m).
 */
function formatCellText(val?: number, unit?: string): { measureStr: string; unitStr: string } {
  if (val === undefined || isNaN(val)) {
    return { measureStr: " - ", unitStr: unit ?? " - " };
  }

  let finalVal = val;
  let finalUnit = unit ?? " - ";

  if (unit === "mm") {
    finalVal = val / 1000;
    finalUnit = "m";
    return {
      measureStr: finalVal.toFixed(3).replace(".", ","),
      unitStr: finalUnit,
    };
  }

  const formattedStr = Number.isInteger(finalVal)
    ? finalVal.toString()
    : finalVal.toString().replace(".", ",");

  return { measureStr: formattedStr, unitStr: finalUnit };
}

/**
 * Master PDF Builder function.
 */
export function buildPdfDefinition(
  meta: FrontPageMeta,
  details: ProductDetails,
  materials: Material[]
): TDocumentDefinitions {
  // 1. Filter selected rows
  const activeMaterials = materials.filter((m) => m.selected);
  const totalRows = activeMaterials.length + 1; // +1 for header row

  // 2. Exact Landscape A4 Geometry Calculations
  const PAGE_HEIGHT = 595.28;
  const TOP_MARGIN = 20;
  const BOTTOM_MARGIN = 20;
  const USABLE_HEIGHT = PAGE_HEIGHT - TOP_MARGIN - BOTTOM_MARGIN;
  const USABLE_WIDTH = 841.89 - TOP_MARGIN - BOTTOM_MARGIN;

  // 3. Dynamic Full-Page Mathematical Scaling
  const targetRowHeight = USABLE_HEIGHT / totalRows;

  // Scale font size proportionally to row height (clamped between 7pt and 16pt)
  const fontSize = Math.max(7, Math.min(16, Math.floor(targetRowHeight * 0.38)));

  // Calculate exact vertical padding required to push rows to full page height
  // Subtracted ~2pt to account for horizontal border line thickness
  const cellPadding = Math.max(2, Math.floor((targetRowHeight - fontSize) / 2) - 1);

  // Scale canvas elements proportionally with target row height
  const squareScale = Math.max(0.6, Math.min(1.4, targetRowHeight / 28));

  // 4. PAGE 1: Front Page Content
  const page1Content: Content[] = [
    { text: "", margin: [0, 10, 0, 0] },
    {
      table: {
        widths: ["*", "*", "*"],
        body: [
          [
            { text: "CLIENTE", style: "metaLabel", alignment: "center" },
            { text: "CÓDIGO", style: "metaLabel", alignment: "center" },
            { text: "DATA", style: "metaLabel", alignment: "center" },
          ],
          [
            { text: meta.client, style: "metaValue", alignment: "center" },
            { text: meta.code, style: "metaValue", alignment: "center" },
            { text: meta.date, style: "metaValue", alignment: "center" },
          ],
        ],
      },
      layout: "noBorders",
      margin: [0, 0, 0, 20],
    },
    createDiagramCanvas(details, meta.color),
    { text: "", pageBreak: "after" },
  ];

  // 5. PAGE 2: Table Construction
  const headers = ["Item", "Qtd", "Med", "Uni", "Corte", "Solda", "Pintura", "Embalagem"];
  const tableHeaderRow: TableCell[] = headers.map((h) => ({
    text: h,
    style: "tableHeader",
    fontSize,
  }));

  const tableBody: TableCell[][] = [tableHeaderRow];

  activeMaterials.forEach((mat) => {
    const flags = getFlagsForMaterial(mat);
    const { measureStr, unitStr } = formatCellText(mat.measure, mat.unit);
    const bigName = willTextWrap(mat.part.name, fontSize, USABLE_WIDTH * 0.34);
    const margin = bigName ? [0, -cellPadding + 1.5, 0, -cellPadding] : undefined;

    const row: TableCell[] = [
      {
        text: mat.part.name.toUpperCase(),
        style: "tableCellLeft",
        fontSize: fontSize,
        margin: margin as [number, number, number, number] | undefined,
      },
      { text: mat.quantity?.toString() ?? " - ", style: "tableCell", fontSize },
      { text: measureStr, style: "tableCell", fontSize },
      { text: unitStr, style: "tableCell", fontSize },

      flags.corte ? createRightAlignedSquare(squareScale) : { text: " - - - - ", style: "tableCell", fontSize },
      flags.solda ? createRightAlignedSquare(squareScale) : { text: " - - - - ", style: "tableCell", fontSize },
      flags.pintura ? createRightAlignedSquare(squareScale) : { text: " - - - - ", style: "tableCell", fontSize },
      flags.embalagem ? createRightAlignedSquare(squareScale) : { text: " - - - - ", style: "tableCell", fontSize },
    ];

    tableBody.push(row);
  });

  return {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [20, 20, 20, 20],
    content: [
      ...page1Content,
      {
        table: {
          headerRows: 1,
          widths: ["34%", "5%", "8%", "5%", "12%", "12%", "12%", "12%"],
          body: tableBody,
        },
        layout: {
          paddingLeft: () => 4,
          paddingRight: () => 4,
          // Apply exact dynamic padding to fill entire page height
          paddingTop: () => cellPadding,
          paddingBottom: () => cellPadding,

          fillColor: (rowIndex) => (rowIndex === 0 ? "#F5F5F5" : null),

          hLineWidth: () => 0.5,
          vLineWidth: () => 0.5,
          hLineColor: () => "#888888",
          vLineColor: () => "#888888",
        },
      },
    ],
    styles: {
      metaLabel: { font: "Helvetica", bold: true, fontSize: 16, color: "#000000" },
      metaValue: { font: "Helvetica", fontSize: 16, color: "#0F172A" },
      tableHeader: { font: "Helvetica", bold: true, alignment: "center", color: "#0F172A" },
      tableCell: { font: "Helvetica", alignment: "center", color: "#334155" },
      tableCellLeft: { font: "Helvetica", alignment: "left", color: "#334155" },
    },
  };
}

export async function savePdfToCustomPath(filePath: string, pdfBuffer: Uint8Array) {
  try {
    await invoke("save_file_to_disk", {
      path: filePath, // e.g., "C:\CustomFolder\Report.pdf" or "/Users/name/Docs/Report.pdf"
      bytes: Array.from(pdfBuffer),
    });
    console.log(`PDF salvo em ${filePath}`);
  } catch (error) {
    console.error('Failed to write file:', error);
  }
}
/**
 * Triggers PDF opening in a new browser tab/window inside Tauri.
 */
export async function generatePdf(
  meta: FrontPageMeta,
  details: ProductDetails,
  materials: Material[]
) {
  const docDef = buildPdfDefinition(meta, details, materials);
  const createdPdf = pdfMake.createPdf(docDef);
  const settings = await loadSettings();
  
  if (settings.autoDownload) {
    const fileName = `${meta.client}-${meta.code}.pdf`.replace(/[/\\?%*:|"<>]/g, '_');
    const buffer = await createdPdf.getBuffer();
    const filePath = await join(settings.downloadPath as string, fileName);
    await savePdfToCustomPath(filePath, buffer);
  }
  return createdPdf.getBlob();
}