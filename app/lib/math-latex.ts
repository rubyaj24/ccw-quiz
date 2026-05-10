export const vec = (v: string) => `\\vec{${v}}`;
export const magnitude = (v: string) => `\\lVert ${v} \\rVert`;
export const abs = (v: string) => `\\left|${v}\\right|`;
export const norm = (v: string) => `\\|${v}\\|`;
export const dot = (a: string, b: string) => `${a} \\cdot ${b}`;
export const cross = (a: string, b: string) => `${a} \\times ${b}`;
export const unit = (v: string) => `\\hat{${v}}`;

export const matrix = (rows: string[][]) => {
  const body = rows.map((r) => r.join(" & ")).join(" \\\\ ");
  return `\\begin{pmatrix} ${body} \\end{pmatrix}`;
};
export const bracketMatrix = (rows: string[][]) => {
  const body = rows.map((r) => r.join(" & ")).join(" \\\\ ");
  return `\\begin{bmatrix} ${body} \\end{bmatrix}`;
};
export const determinant = (rows: string[][]) => {
  const body = rows.map((r) => r.join(" & ")).join(" \\\\ ");
  return `\\begin{vmatrix} ${body} \\end{vmatrix}`;
};

export const gradient = (f: string) => `\\nabla ${f}`;
export const divergence = (F: string) => `\\nabla \\cdot ${F}`;
export const curl = (F: string) => `\\nabla \\times ${F}`;
export const laplacian = (f: string) => `\\nabla^2 ${f}`;
export const partial = (num: string, denom: string) =>
  `\\frac{\\partial ${num}}{\\partial ${denom}}`;

export const integral = (lower?: string, upper?: string) =>
  `\\int${lower ? `_{${lower}}` : ""}${upper ? `^{${upper}}` : ""}`;
export const iint = (lower?: string, upper?: string) =>
  `\\iint${lower ? `_{${lower}}` : ""}${upper ? `^{${upper}}` : ""}`;
export const iiint = (lower?: string, upper?: string) =>
  `\\iiint${lower ? `_{${lower}}` : ""}${upper ? `^{${upper}}` : ""}`;
export const oint = (lower?: string, upper?: string) =>
  `\\oint${lower ? `_{${lower}}` : ""}${upper ? `^{${upper}}` : ""}`;

export const lim = (x: string, a: string) => `\\lim_{${x} \\to ${a}}`;
export const sum = (lower?: string, upper?: string) =>
  `\\sum${lower ? `_{${lower}}` : ""}${upper ? `^{${upper}}` : ""}`;
export const prod = (lower?: string, upper?: string) =>
  `\\prod${lower ? `_{${lower}}` : ""}${upper ? `^{${upper}}` : ""}`;

export const frac = (num: string, denom: string) => `\\frac{${num}}{${denom}}`;
export const dfrac = (num: string, denom: string) => `\\dfrac{${num}}{${denom}}`;
export const sqrt = (content: string) => `\\sqrt{${content}}`;
export const nthRoot = (n: string, content: string) => `\\sqrt[${n}]{${content}}`;
export const binom = (n: string, k: string) => `\\binom{${n}}{${k}}`;

export const union = "\\cup";
export const intersect = "\\cap";
export const subset = "\\subset";
export const supset = "\\supset";
export const subseteq = "\\subseteq";
export const supseteq = "\\supseteq";
export const element = "\\in";
export const notelement = "\\notin";
export const emptyset = "\\emptyset";
export const set = (contents: string) => `\\{ ${contents} \\}`;
export const setBuilder = (var_: string, condition: string) =>
  `\\{ ${var_} \\mid ${condition} \\}`;

export const forall = "\\forall";
export const exists = "\\exists";
export const implies = "\\implies";
export const iff = "\\iff";
export const neg = "\\neg";
export const land = "\\land";
export const lor = "\\lor";
export const therefore = "\\therefore";
export const because = "\\because";

export const alpha = "\\alpha";
export const beta = "\\beta";
export const gamma = "\\gamma";
export const delta = "\\delta";
export const epsilon = "\\epsilon";
export const varepsilon = "\\varepsilon";
export const theta = "\\theta";
export const lambda = "\\lambda";
export const mu = "\\mu";
export const pi = "\\pi";
export const sigma = "\\sigma";
export const omega = "\\omega";
export const phi = "\\phi";
export const tau = "\\tau";
export const infinity = "\\infty";
export const nabla = "\\nabla";
export const partialSymbol = "\\partial";

export const text = (t: string) => `\\text{${t}}`;

export const cases = (cases_: [string, string][]): string => {
  const body = cases_.map(([expr, cond]) => `${expr}, & ${text(cond)}`).join(" \\\\ ");
  return `\\begin{cases} ${body} \\end{cases}`;
};
