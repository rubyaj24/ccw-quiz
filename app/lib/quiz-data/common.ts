export type Section = "common" | "core";

export type Subject =
  | "maths"
  | "aptitude"
  | "environment"
  | "design"
  | "oop"
  | "os"
  | "ds"
  | "dbms"
  | "cn"
  | "coa"
  | "dm";

export type Difficulty = "easy" | "medium" | "hard";

export type QuizQuestion = {
  id: string;
  section: Section;
  subject: Subject;
  difficulty: Difficulty;

  prompt: string;

  /**
   * LaTeX version for KaTeX rendering
   */
  promptLatex?: string;

  options: string[];

  /**
   * Optional LaTeX for options
   */
  optionsLatex?: string[];

  answerIndex: number;

  explanation: string;

  /**
   * Rich explanation rendering
   */
  explanationLatex?: string;

  tags?: string[];

  source?: {
    university?: string;
    year?: number;
    paper?: string;
  };

  references: {
    type?: "docs" | "video" | "formula";
    label: string;
    url: string;
  }[];
};

export const commonVectorQuestions: QuizQuestion[] = [
  {
    id: "common-vector-001",
    section: "common",
    subject: "maths",
    difficulty: "easy",

    prompt:
      "If vector r = xi + yj + zk, find the divergence of r.",

    promptLatex:
      "\\vec{r} = xi + yj + zk",

    options: ["0", "1", "2", "3"],

    optionsLatex: ["0", "1", "2", "3"],

    answerIndex: 3,

    explanation:
      "Divergence is computed using partial derivatives with respect to x, y, and z.",

    explanationLatex:
      "\\nabla \\cdot \\vec{r} = \\frac{\\partial x}{\\partial x} + \\frac{\\partial y}{\\partial y} + \\frac{\\partial z}{\\partial z} = 1 + 1 + 1 = 3",

    tags: ["vectors", "divergence", "vector-calculus"],

    source: {
      university: "KTU",
      year: 2020,
      paper: "CCW",
    },

    references: [
      {
        type: "formula",
        label: "Divergence",
        url: "https://en.wikipedia.org/wiki/Divergence",
      },
    ],
  },

  {
    id: "common-vector-002",
    section: "common",
    subject: "maths",
    difficulty: "medium",

    prompt:
      "Find the magnitude of vector A = 3i + 4j.",

    promptLatex:
      "\\vec{A} = 3i + 4j",

    options: ["4", "5", "6", "7"],

    optionsLatex: ["4", "5", "6", "7"],

    answerIndex: 1,

    explanation:
      "Magnitude is computed using square root of sum of squares.",

    explanationLatex:
      "|\\vec{A}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5",

    tags: ["vectors", "magnitude"],

    source: {
      university: "KTU",
      year: 2021,
      paper: "CCW",
    },

    references: [
      {
        type: "formula",
        label: "Vector Magnitude",
        url: "https://en.wikipedia.org/wiki/Euclidean_vector",
      },
    ],
  },

  {
    id: "common-vector-003",
    section: "common",
    subject: "maths",
    difficulty: "medium",

    prompt:
      "Find the dot product of vectors A = i + 2j and B = 2i + 3j.",

    promptLatex:
      "\\vec{A} = i + 2j, \\quad \\vec{B} = 2i + 3j",

    options: ["6", "7", "8", "9"],

    optionsLatex: ["6", "7", "8", "9"],

    answerIndex: 2,

    explanation:
      "Dot product is computed component-wise.",

    explanationLatex:
      "\\vec{A} \\cdot \\vec{B} = (1)(2) + (2)(3) = 2 + 6 = 8",

    tags: ["vectors", "dot-product"],

    source: {
      university: "KTU",
      year: 2021,
      paper: "CCW",
    },

    references: [
      {
        type: "formula",
        label: "Dot Product",
        url: "https://en.wikipedia.org/wiki/Dot_product",
      },
    ],
  },

  {
    id: "common-vector-004",
    section: "common",
    subject: "maths",
    difficulty: "hard",

    prompt:
      "Find the curl of vector field F = yi + zj + xk.",

    promptLatex:
      "\\vec{F} = yi + zj + xk",

    options: [
      "i + j + k",
      "0",
      "2i + 2j + 2k",
      "i - j + k",
    ],

    optionsLatex: [
      "i + j + k",
      "0",
      "2i + 2j + 2k",
      "i - j + k",
    ],

    answerIndex: 0,

    explanation:
      "Curl is computed using determinant expansion.",

    explanationLatex:
      "\\nabla \\times \\vec{F} = \\begin{vmatrix} i & j & k \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ y & z & x \\end{vmatrix} = i + j + k",

    tags: ["vectors", "curl", "vector-calculus"],

    source: {
      university: "KTU",
      year: 2022,
      paper: "CCW",
    },

    references: [
      {
        type: "formula",
        label: "Curl",
        url: "https://en.wikipedia.org/wiki/Curl_(mathematics)",
      },
    ],
  },

  {
    id: "common-vector-005",
    section: "common",
    subject: "maths",
    difficulty: "easy",

    prompt:
      "If vectors A and B are perpendicular, what is their dot product?",

    promptLatex:
      "\\vec{A} \\perp \\vec{B}",

    options: ["0", "1", "|A||B|", "90"],

    optionsLatex: ["0", "1", "|A||B|", "90"],

    answerIndex: 0,

    explanation:
      "Perpendicular vectors have zero dot product.",

    explanationLatex:
      "\\vec{A} \\cdot \\vec{B} = |A||B|\\cos 90^{\\circ} = 0",

    tags: ["vectors", "orthogonality"],

    source: {
      university: "KTU",
      year: 2022,
      paper: "CCW",
    },

    references: [
      {
        type: "formula",
        label: "Orthogonal Vectors",
        url: "https://en.wikipedia.org/wiki/Orthogonality",
      },
    ],
  },
];