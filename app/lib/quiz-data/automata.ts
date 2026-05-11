import type { QuizQuestion } from "./types";

export const automataQuestions: QuizQuestion[] = [
  {
    id: "flat-1",
    topic: "automata",
    prompt: "Which language in the Chomsky hierarchy is the most restrictive?",
    options: [
      "Context Free",
      "Regular",
      "Context Sensitive",
      "Recursively Enumerable",
    ],
    answerIndex: 1,
    explanation:
      "Regular languages (Type 3) are the most restrictive in the Chomsky hierarchy. They are a proper subset of context-free, context-sensitive, and recursively enumerable languages.",
    references: [
      {
        label: "Wikipedia: Chomsky Hierarchy",
        url: "https://en.wikipedia.org/wiki/Chomsky_hierarchy",
      },
    ],
  },
  {
    id: "flat-2",
    topic: "automata",
    prompt:
      "The language accepted by a Pushdown Automaton (PDA) belongs to which type in the Chomsky hierarchy?",
    options: ["Type 0", "Type 1", "Type 2", "Type 3"],
    answerIndex: 2,
    explanation:
      "A Pushdown Automaton accepts Type 2 (Context-Free) languages. PDAs extend finite automata with a stack memory.",
    references: [
      {
        label: "Wikipedia: Pushdown Automaton",
        url: "https://en.wikipedia.org/wiki/Pushdown_automaton",
      },
    ],
  },
  {
    id: "flat-3",
    topic: "automata",
    prompt:
      "All regular languages can be described by which of the following representations?",
    options: [
      "DFA, NFA, and Regular Expressions only",
      "DFA, NFA, and ε-NFA only",
      "DFA and Regular Expressions only",
      "DFA, NFA, ε-NFA, and Regular Expressions",
    ],
    answerIndex: 3,
    explanation:
      "Every regular language can equivalently be described by a DFA, NFA, ε-NFA, or a Regular Expression. All four representations have the same expressive power.",
    references: [
      {
        label: "Wikipedia: Regular Language",
        url: "https://en.wikipedia.org/wiki/Regular_language",
      },
    ],
  },
  {
    id: "flat-4",
    topic: "automata",
    prompt:
      "Recursively enumerable languages are NOT closed under which operation?",
    options: ["Union", "Homomorphism", "Complementation", "Concatenation"],
    answerIndex: 2,
    explanation:
      "Recursively enumerable languages are not closed under complementation. The complement of a recursively enumerable language need not be recursively enumerable.",
    references: [
      {
        label: "Wikipedia: Recursively Enumerable Language",
        url: "https://en.wikipedia.org/wiki/Recursively_enumerable_language",
      },
    ],
  },
  {
    id: "flat-5",
    topic: "automata",
    prompt:
      "If all production rules have a single non-terminal symbol on the left side, the grammar is called:",
    options: [
      "Context Free Grammar",
      "Context Sensitive Grammar",
      "Unrestricted Grammar",
      "Phrase Grammar",
    ],
    answerIndex: 0,
    explanation:
      "A Context-Free Grammar (CFG) requires that every production rule has exactly one non-terminal on the left-hand side, with no context restrictions.",
    references: [
      {
        label: "Wikipedia: Context-Free Grammar",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar",
      },
    ],
  },
  {
    id: "flat-6",
    topic: "automata",
    prompt:
      "A grammar whose productions are of the form A → BC is in which normal form?",
    options: [
      "Chomsky Normal Form",
      "Greibach Normal Form",
      "Both CNF and GNF",
      "Neither CNF nor GNF",
    ],
    answerIndex: 0,
    explanation:
      "Chomsky Normal Form (CNF) requires every production to be of the form A → BC (two non-terminals) or A → a (a terminal). GNF requires the right-hand side to start with a terminal.",
    references: [
      {
        label: "Wikipedia: Chomsky Normal Form",
        url: "https://en.wikipedia.org/wiki/Chomsky_normal_form",
      },
    ],
  },
  {
    id: "flat-7",
    topic: "automata",
    prompt:
      "Which technique can be used to prove that a language is non-regular?",
    options: [
      "Arden's Theorem",
      "Pumping Lemma",
      "Ogden's Lemma",
      "Both Pumping Lemma and Ogden's Lemma",
    ],
    answerIndex: 1,
    explanation:
      "The Pumping Lemma for regular languages is the standard technique for proving a language is not regular. Ogden's Lemma is used for context-free languages.",
    references: [
      {
        label: "Wikipedia: Pumping Lemma",
        url: "https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages",
      },
    ],
  },
  {
    id: "flat-8",
    topic: "automata",
    prompt:
      "Let N be an NFA with n states. Let k be the number of states of the minimal equivalent DFA. Which is necessarily true?",
    options: ["k ≥ 2ⁿ", "k ≥ n", "k ≤ n²", "k ≤ 2ⁿ"],
    answerIndex: 3,
    explanation:
      "The subset construction converts an NFA with n states to a DFA with at most 2ⁿ states. Thus k ≤ 2ⁿ is always true; k can be much less in practice.",
    references: [
      {
        label: "Wikipedia: Powerset Construction",
        url: "https://en.wikipedia.org/wiki/Powerset_construction",
      },
    ],
  },
  {
    id: "flat-9",
    topic: "automata",
    prompt:
      "A language L is accepted by a Finite State Automaton (FSA) if and only if it is:",
    options: ["Context-Free", "Context-Sensitive", "Recursive", "Regular"],
    answerIndex: 3,
    explanation:
      "FSAs (DFAs and NFAs) accept exactly the class of Regular languages (Type 3). This is a foundational result in automata theory.",
    references: [
      {
        label: "Wikipedia: Finite Automaton",
        url: "https://en.wikipedia.org/wiki/Finite-state_machine",
      },
    ],
  },
  {
    id: "flat-10",
    topic: "automata",
    prompt:
      "Which of the following correctly represents the Chomsky hierarchy (most restrictive to least restrictive)?",
    options: [
      "REG ⊂ CFL ⊂ CSL ⊂ Type-0",
      "CFL ⊂ REG ⊂ Type-0 ⊂ CSL",
      "CSL ⊂ Type-0 ⊂ REG ⊂ CFL",
      "CSL ⊂ CFL ⊂ REG ⊂ Type-0",
    ],
    answerIndex: 0,
    explanation:
      "The Chomsky hierarchy from most to least restrictive is: Regular (Type 3) ⊂ Context-Free (Type 2) ⊂ Context-Sensitive (Type 1) ⊂ Recursively Enumerable (Type 0).",
    references: [
      {
        label: "Wikipedia: Chomsky Hierarchy",
        url: "https://en.wikipedia.org/wiki/Chomsky_hierarchy",
      },
    ],
  },
  {
    id: "flat-11",
    topic: "automata",
    prompt: "Which of the following regular expression identities is true?",
    options: [
      "r(*) = r*",
      "(r*s*)* = (r+s)*",
      "(r+s)* = r* + s*",
      "r*s* = r* + s*",
    ],
    answerIndex: 1,
    explanation:
      "(r*s*)* = (r+s)* is a valid identity: both generate all strings over the union of alphabets of r and s. The others are false; for example (r+s)* ≠ r* + s* in general.",
    references: [
      {
        label: "Wikipedia: Regular Expression",
        url: "https://en.wikipedia.org/wiki/Regular_expression",
      },
    ],
  },
  {
    id: "flat-12",
    topic: "automata",
    prompt: "Which type of grammar can be directly translated to a DFA?",
    options: [
      "Left linear grammar",
      "Right linear grammar",
      "Generic grammar",
      "All of these",
    ],
    answerIndex: 1,
    explanation:
      "Right linear grammars (where all productions are of the form A → aB or A → a) directly correspond to DFAs. Left linear grammars generate regular languages but require reversal for DFA construction.",
    references: [
      {
        label: "Wikipedia: Regular Grammar",
        url: "https://en.wikipedia.org/wiki/Regular_grammar",
      },
    ],
  },
  {
    id: "flat-13",
    topic: "automata",
    prompt: "Which statement about context-free languages (CFLs) is TRUE?",
    options: [
      "If a language is context free it can always be accepted by a deterministic PDA",
      "The union of two context-free languages is context free",
      "The intersection of two context-free languages is context free",
      "The complement of a context-free language is context free",
    ],
    answerIndex: 1,
    explanation:
      "CFLs are closed under union. However, they are NOT closed under intersection, complement, or deterministic PDA acceptance in general (some CFLs require non-deterministic PDAs).",
    references: [
      {
        label: "Wikipedia: Context-Free Language",
        url: "https://en.wikipedia.org/wiki/Context-free_language",
      },
    ],
  },
  {
    id: "flat-14",
    topic: "automata",
    prompt: "An ε-NFA is represented as a __________ in its formal definition.",
    options: ["Quadruple", "Quintuple", "Triple", "Sextuple"],
    answerIndex: 1,
    explanation:
      "An ε-NFA is formally defined as a quintuple (Q, Σ, δ, q₀, F): set of states, input alphabet, transition function, start state, and set of final states.",
    references: [
      {
        label: "Wikipedia: Nondeterministic Finite Automaton",
        url: "https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton",
      },
    ],
  },
  {
    id: "flat-15",
    topic: "automata",
    prompt: "Which normal form does NOT have left recursion?",
    options: [
      "Chomsky Normal Form",
      "Greibach Normal Form",
      "Backus-Naur Form",
      "All of the mentioned",
    ],
    answerIndex: 1,
    explanation:
      "Greibach Normal Form (GNF) requires every production to start with a terminal, which eliminates left recursion by definition. CNF may still be used in contexts with recursion.",
    references: [
      {
        label: "Wikipedia: Greibach Normal Form",
        url: "https://en.wikipedia.org/wiki/Greibach_normal_form",
      },
    ],
  },
  {
    id: "flat-16",
    topic: "automata",
    prompt:
      "What is the regular expression for the language L = {ε, ab, abab, ababab, ...}?",
    options: ["(ab)*", "(a,b)*", "(a)*(b)*", "ab*"],
    answerIndex: 0,
    explanation:
      "The language consists of zero or more repetitions of 'ab', which is exactly described by the regular expression (ab)*.",
    references: [
      {
        label: "Wikipedia: Regular Expression",
        url: "https://en.wikipedia.org/wiki/Regular_expression",
      },
    ],
  },
  {
    id: "flat-17",
    topic: "automata",
    prompt: "A CFG is NOT closed under which of the following operations?",
    options: [
      "Concatenation (Dot operation)",
      "Union",
      "Kleene Star (Iteration)",
      "None — CFGs are closed under all of these",
    ],
    answerIndex: 3,
    explanation:
      "Context-Free Grammars (or Context-Free Languages) are closed under union, concatenation, and Kleene star operations. However, they are not closed under intersection or complementation. Therefore, all operations listed in the options preserve closure.",
    references: [
      {
        label: "Wikipedia: Context-Free Language",
        url: "https://en.wikipedia.org/wiki/Context-free_language",
      },
    ],
  },
  {
    id: "flat-18",
    topic: "automata",
    prompt:
      "If L1 and L2 are regular languages, then the concatenation L1.L2 is:",
    options: [
      "Regular",
      "Non-regular",
      "May be regular",
      "None of the mentioned",
    ],
    answerIndex: 0,
    explanation:
      "Regular languages are closed under concatenation. If L1 and L2 are both regular, their concatenation L1.L2 is also regular.",
    references: [
      {
        label: "Wikipedia: Regular Language Closure Properties",
        url: "https://en.wikipedia.org/wiki/Regular_language#Closure_properties",
      },
    ],
  },
  {
    id: "flat-19",
    topic: "automata",
    prompt:
      "Consider: S1: Every context-sensitive language is recursive. S2: There exists a recursive language that is not context-sensitive. Which is correct?",
    options: [
      "S1 is false and S2 is false",
      "S1 is false and S2 is true",
      "S1 is true and S2 is false",
      "S1 is true and S2 is true",
    ],
    answerIndex: 3,
    explanation:
      "S1 is true: every CSL is recursive (decidable). S2 is also true: there exist recursive languages outside the CSL class (e.g., some problems decidable by TMs but not by LBAs).",
    references: [
      {
        label: "Wikipedia: Context-Sensitive Language",
        url: "https://en.wikipedia.org/wiki/Context-sensitive_language",
      },
    ],
  },
  {
    id: "flat-20",
    topic: "automata",
    prompt: "Which string is NOT generated by the grammar S → SaSbS | ε?",
    options: ["aabb", "abab", "aababb", "aaabb"],
    answerIndex: 3,
    explanation:
      "The grammar S → SaSbS | ε generates strings with matched a's and b's in a balanced structure. 'aaabb' cannot be derived because it has unbalanced occurrences.",
    references: [
      {
        label: "Wikipedia: Context-Free Grammar",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar",
      },
    ],
  },
  {
    id: "flat-21",
    topic: "automata",
    prompt:
      "A pushdown automaton behaves like a Turing machine when the number of auxiliary memory stacks is:",
    options: ["0", "1", "1 or more", "2 or more"],
    answerIndex: 3,
    explanation:
      "A PDA with 2 or more stacks has the same computational power as a Turing machine, making it Turing-complete.",
    references: [
      {
        label: "Wikipedia: Pushdown Automaton",
        url: "https://en.wikipedia.org/wiki/Pushdown_automaton",
      },
    ],
  },
  {
    id: "flat-22",
    topic: "automata",
    prompt: "Any production of a CFG of the form A → ε is called:",
    options: [
      "ε-production",
      "Unit production",
      "Symbol removal",
      "Zero production",
    ],
    answerIndex: 0,
    explanation:
      "A production of the form A → ε (where ε is the empty string) is called an epsilon (ε) production or null production.",
    references: [
      {
        label: "Wikipedia: Context-Free Grammar",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar",
      },
    ],
  },
  {
    id: "flat-23",
    topic: "automata",
    prompt:
      "Context-free languages are closed under which of the following operations?",
    options: [
      "Intersection only",
      "Complementation only",
      "Union and Kleene Star",
      "Intersection and Complementation",
    ],
    answerIndex: 2,
    explanation:
      "CFLs are closed under union and Kleene star (iteration). They are NOT closed under intersection or complementation.",
    references: [
      {
        label: "Wikipedia: Context-Free Language",
        url: "https://en.wikipedia.org/wiki/Context-free_language",
      },
    ],
  },
  {
    id: "flat-24",
    topic: "automata",
    prompt:
      "How many tuples are in the formal definition of a Finite State Machine?",
    options: ["4", "5", "6", "Unlimited"],
    answerIndex: 1,
    explanation:
      "A finite state machine (DFA) is formally defined as a 5-tuple: (Q, Σ, δ, q₀, F) — states, alphabet, transition function, start state, and accept states.",
    references: [
      {
        label: "Wikipedia: Deterministic Finite Automaton",
        url: "https://en.wikipedia.org/wiki/Deterministic_finite_automaton",
      },
    ],
  },
  {
    id: "flat-25",
    topic: "automata",
    prompt: "The number of states in a Turing machine is:",
    options: ["Finite", "Infinite", "Always 1", "At most 100"],
    answerIndex: 0,
    explanation:
      "A Turing machine has an infinite tape but its set of internal states is finite — the formal definition of a TM specifies a finite set of states Q. The number of possible TMs is infinite, but each individual TM has a finite state set.",
    references: [
      {
        label: "Wikipedia: Turing Machine",
        url: "https://en.wikipedia.org/wiki/Turing_machine",
      },
    ],
  },
  {
    id: "flat-26",
    topic: "automata",
    prompt: "The Myhill-Nerode theorem does which of the following?",
    options: [
      "Minimization of DFA only",
      "Tells us exactly when a language is regular only",
      "Both DFA minimization and determining when a language is regular",
      "None of the mentioned",
    ],
    answerIndex: 2,
    explanation:
      "The Myhill-Nerode theorem both characterizes regular languages (a language is regular iff the number of equivalence classes is finite) and provides the basis for DFA minimization.",
    references: [
      {
        label: "Wikipedia: Myhill-Nerode Theorem",
        url: "https://en.wikipedia.org/wiki/Myhill%E2%80%93Nerode_theorem",
      },
    ],
  },
  {
    id: "flat-27",
    topic: "automata",
    prompt:
      "Which language is NOT accepted by a Linear Bounded Automaton (LBA)?",
    options: [
      "Regular",
      "Context-Free",
      "Context-Sensitive",
      "Recursively Enumerable",
    ],
    answerIndex: 3,
    explanation:
      "A Linear Bounded Automaton accepts exactly the Context-Sensitive languages (Type 1). Recursively Enumerable languages (Type 0) require a full Turing machine.",
    references: [
      {
        label: "Wikipedia: Linear Bounded Automaton",
        url: "https://en.wikipedia.org/wiki/Linear_bounded_automaton",
      },
    ],
  },
  {
    id: "flat-28",
    topic: "automata",
    prompt: "Which of the following problems is undecidable?",
    options: [
      "Deciding if a given context-free grammar is ambiguous",
      "Deciding if a given string is generated by a given CFG",
      "Deciding if the language of a given CFG is empty",
      "Deciding if the language of a given CFG is finite",
    ],
    answerIndex: 0,
    explanation:
      "Grammar ambiguity is undecidable — no algorithm can determine in general whether a CFG is ambiguous. The other options (membership, emptiness, finiteness) are all decidable for CFGs.",
    references: [
      {
        label: "Wikipedia: Ambiguous Grammar",
        url: "https://en.wikipedia.org/wiki/Ambiguous_grammar",
      },
    ],
  },
  {
    id: "flat-29",
    topic: "automata",
    prompt:
      "The CFG S→XYX, X→aX|bX|λ, Y→bbb generates the language described by which regular expression?",
    options: [
      "(a+b)*bbb",
      "abbb(a+b)*",
      "(a+b)*(bbb)(a+b)*",
      "(a+b)(bbb)(a+b)*",
    ],
    answerIndex: 2,
    explanation:
      "X generates any string over {a,b} including ε, and Y generates exactly 'bbb'. So XYX generates any string with 'bbb' somewhere in the middle, matching (a+b)*(bbb)(a+b)*.",
    references: [
      {
        label: "Wikipedia: Context-Free Grammar",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar",
      },
    ],
  },
  {
    id: "flat-30",
    topic: "automata",
    prompt:
      "The language of a Finite Automaton belongs to which type in the Chomsky hierarchy?",
    options: ["Type 0", "Type 1", "Type 2", "Type 3"],
    answerIndex: 3,
    explanation:
      "Finite automata accept exactly the Type 3 (Regular) languages. This is a cornerstone result of formal language theory.",
    references: [
      {
        label: "Wikipedia: Regular Language",
        url: "https://en.wikipedia.org/wiki/Regular_language",
      },
    ],
  },
  {
    id: "flat-31",
    topic: "automata",
    prompt: "Palindromes cannot be recognized by any FSA because:",
    options: [
      "FSA cannot remember arbitrarily large amounts of information",
      "FSA cannot deterministically fix the midpoint",
      "Even if the midpoint is known, FSA cannot match the second half to the first half",
      "All of the above",
    ],
    answerIndex: 3,
    explanation:
      "All three reasons apply: FSAs have finite memory (no stack), cannot locate the midpoint non-deterministically in a DFA, and cannot compare two halves. Palindromes require a PDA.",
    references: [
      {
        label: "Wikipedia: Pumping Lemma",
        url: "https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages",
      },
    ],
  },
  {
    id: "flat-32",
    topic: "automata",
    prompt: "Which statement about context-free languages is FALSE?",
    options: [
      "CFLs are closed under union",
      "CFLs are closed under concatenation",
      "CFLs are closed under intersection",
      "CFLs are closed under Kleene closure",
    ],
    answerIndex: 2,
    explanation:
      "CFLs are NOT closed under intersection. The intersection of two CFLs can be a non-context-free language (e.g., {aⁿbⁿcⁿ | n ≥ 1}).",
    references: [
      {
        label: "Wikipedia: Context-Free Language",
        url: "https://en.wikipedia.org/wiki/Context-free_language",
      },
    ],
  },
  {
    id: "flat-33",
    topic: "automata",
    prompt: "Context-free languages are NOT closed under which operation?",
    options: ["Intersection", "Union", "Reversal", "Kleene closure"],
    answerIndex: 0,
    explanation:
      "CFLs are not closed under intersection. The classic counterexample is {aⁿbⁿ} ∩ {bⁿcⁿ} = {aⁿbⁿcⁿ}, which is not context-free.",
    references: [
      {
        label: "Wikipedia: Context-Free Language Closure",
        url: "https://en.wikipedia.org/wiki/Context-free_language",
      },
    ],
  },
  {
    id: "flat-34",
    topic: "automata",
    prompt: "Which of the following pairs have DIFFERENT expressive power?",
    options: [
      "Single-tape TM and multi-dimensional TM",
      "Multi-tape TM and multi-dimensional TM",
      "Deterministic PDA and Non-deterministic PDA",
      "DFA and NFA",
    ],
    answerIndex: 2,
    explanation:
      "Deterministic and non-deterministic PDAs have DIFFERENT expressive power — DPDA is strictly less powerful than NPDA. All other pairs are computationally equivalent.",
    references: [
      {
        label: "Wikipedia: Pushdown Automaton",
        url: "https://en.wikipedia.org/wiki/Pushdown_automaton",
      },
    ],
  },
  {
    id: "flat-35",
    topic: "automata",
    prompt: "Which problem about CFGs is undecidable?",
    options: [
      "Finiteness problem for FSAs",
      "Membership problem for CFGs",
      "Equivalence problem for FSAs",
      "Ambiguity problem for CFGs",
    ],
    answerIndex: 3,
    explanation:
      "The ambiguity problem for CFGs (is a given CFG ambiguous?) is undecidable. FSA finiteness, CFG membership, and FSA equivalence are all decidable.",
    references: [
      {
        label: "Wikipedia: Undecidable Problem",
        url: "https://en.wikipedia.org/wiki/Undecidable_problem",
      },
    ],
  },
  {
    id: "flat-36",
    topic: "automata",
    prompt: "An ambiguous grammar is defined as a grammar that has:",
    options: [
      "More than one start symbol",
      "More than one derivation tree for some string",
      "Left recursive productions",
      "Useless productions",
    ],
    answerIndex: 1,
    explanation:
      "A grammar is ambiguous if there exists at least one string that has more than one parse (derivation) tree, i.e., more than one leftmost or rightmost derivation.",
    references: [
      {
        label: "Wikipedia: Ambiguous Grammar",
        url: "https://en.wikipedia.org/wiki/Ambiguous_grammar",
      },
    ],
  },
  {
    id: "flat-37",
    topic: "automata",
    prompt: "A language for which no DFA exists is called a:",
    options: [
      "Context-Free Language",
      "Recursively Enumerable Language",
      "Non-Regular Language",
      "Context-Sensitive Language",
    ],
    answerIndex: 2,
    explanation:
      "A language is regular if and only if some DFA accepts it. If no DFA exists for a language, it is non-regular.",
    references: [
      {
        label: "Wikipedia: Regular Language",
        url: "https://en.wikipedia.org/wiki/Regular_language",
      },
    ],
  },
  {
    id: "flat-38",
    topic: "automata",
    prompt:
      "The regular expression for all strings that start with 'ab' and end with 'bba' is:",
    options: [
      "ab a*b*bba",
      "ab(ab)*bba",
      "ab(a+b)*bba",
      "All of the mentioned",
    ],
    answerIndex: 2,
    explanation:
      "ab(a+b)*bba matches strings beginning with 'ab', followed by any combination of a's and b's, and ending with 'bba'.",
    references: [
      {
        label: "Wikipedia: Regular Expression",
        url: "https://en.wikipedia.org/wiki/Regular_expression",
      },
    ],
  },
  {
    id: "flat-39",
    topic: "automata",
    prompt:
      "In converting NFA to DFA, which of the following statements is true?",
    options: [
      "Only Statement 1: Initial state of NFA is the initial state of DFA",
      "Only Statement 2: Final states of DFA are every combination containing a final state of NFA",
      "Both statements are true",
      "Both statements are false",
    ],
    answerIndex: 2,
    explanation:
      "In the subset construction: the DFA's start state is {q₀} (initial state of NFA), and any DFA state (subset) containing at least one NFA final state becomes a DFA final state.",
    references: [
      {
        label: "Wikipedia: Powerset Construction",
        url: "https://en.wikipedia.org/wiki/Powerset_construction",
      },
    ],
  },
  {
    id: "flat-40",
    topic: "automata",
    prompt: "The language accepted by a Pushdown Automaton is:",
    options: [
      "Regular language",
      "Context-sensitive language",
      "Context-free language",
      "Recursively enumerable language",
    ],
    answerIndex: 2,
    explanation:
      "PDAs accept exactly the Context-Free Languages (Type 2). This is a fundamental correspondence in automata theory.",
    references: [
      {
        label: "Wikipedia: Pushdown Automaton",
        url: "https://en.wikipedia.org/wiki/Pushdown_automaton",
      },
    ],
  },
  {
    id: "flat-41",
    topic: "automata",
    prompt:
      "The production of the form A → B, where A and B are non-terminals, is called:",
    options: [
      "ε-production",
      "Unit production",
      "Useless production",
      "Terminal production",
    ],
    answerIndex: 1,
    explanation:
      "A production A → B where both A and B are non-terminals is called a unit production (or chain production). These are eliminated in CNF conversion.",
    references: [
      {
        label: "Wikipedia: Unit Production",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar#Unit_production",
      },
    ],
  },
  {
    id: "flat-42",
    topic: "automata",
    prompt: "Which of the following is NOT a component of a formal language?",
    options: ["Alphabet", "Grammar", "Automaton", "Compiler"],
    answerIndex: 3,
    explanation:
      "A compiler is a software tool, not a component of a formal language. Formal languages are defined by alphabets, grammars, and are recognized by automata.",
    references: [
      {
        label: "Wikipedia: Formal Language",
        url: "https://en.wikipedia.org/wiki/Formal_language",
      },
    ],
  },
  {
    id: "flat-43",
    topic: "automata",
    prompt: "Which type of automaton recognizes regular languages?",
    options: [
      "Pushdown Automaton",
      "Turing Machine",
      "Finite Automaton",
      "Linear Bounded Automaton",
    ],
    answerIndex: 2,
    explanation:
      "Finite automata (both DFA and NFA) recognize exactly the class of regular languages.",
    references: [
      {
        label: "Wikipedia: Finite-State Machine",
        url: "https://en.wikipedia.org/wiki/Finite-state_machine",
      },
    ],
  },
  {
    id: "flat-44",
    topic: "automata",
    prompt:
      "The Chomsky hierarchy classifies formal languages into how many levels?",
    options: ["2", "3", "4", "5"],
    answerIndex: 2,
    explanation:
      "The Chomsky hierarchy has 4 levels: Type 0 (Recursively Enumerable), Type 1 (Context-Sensitive), Type 2 (Context-Free), and Type 3 (Regular).",
    references: [
      {
        label: "Wikipedia: Chomsky Hierarchy",
        url: "https://en.wikipedia.org/wiki/Chomsky_hierarchy",
      },
    ],
  },
  {
    id: "flat-45",
    topic: "automata",
    prompt:
      "Which type of automaton has both a finite control unit and an unbounded tape?",
    options: [
      "Finite Automaton",
      "Pushdown Automaton",
      "Linear Bounded Automaton",
      "Turing Machine",
    ],
    answerIndex: 3,
    explanation:
      "A Turing Machine has a finite set of states (finite control) and an infinite tape that can be read and written in both directions.",
    references: [
      {
        label: "Wikipedia: Turing Machine",
        url: "https://en.wikipedia.org/wiki/Turing_machine",
      },
    ],
  },
  {
    id: "flat-46",
    topic: "automata",
    prompt:
      "The language accepted by a Turing machine with a halting state is known as:",
    options: [
      "Regular language",
      "Context-free language",
      "Context-sensitive language",
      "Recursively enumerable language",
    ],
    answerIndex: 3,
    explanation:
      "A Turing machine that halts on all inputs accepts a recursive (decidable) language. One that may loop accepts a recursively enumerable language.",
    references: [
      {
        label: "Wikipedia: Recursively Enumerable Language",
        url: "https://en.wikipedia.org/wiki/Recursively_enumerable_language",
      },
    ],
  },
  {
    id: "flat-47",
    topic: "automata",
    prompt: "Which of the following is a non-deterministic automaton?",
    options: [
      "Deterministic Finite Automaton",
      "Deterministic PDA",
      "Pushdown Automaton",
      "Deterministic Turing Machine",
    ],
    answerIndex: 2,
    explanation:
      "A standard Pushdown Automaton (PDA) is non-deterministic. It may have multiple possible transitions for the same input and stack symbol.",
    references: [
      {
        label: "Wikipedia: Pushdown Automaton",
        url: "https://en.wikipedia.org/wiki/Pushdown_automaton",
      },
    ],
  },
  {
    id: "flat-48",
    topic: "automata",
    prompt: "Which of the following is true about regular languages?",
    options: [
      "They can only be recognized by Turing machines",
      "They can be recognized by finite automata",
      "They require a stack for recognition",
      "They are equivalent to context-free languages",
    ],
    answerIndex: 1,
    explanation:
      "Regular languages are exactly the languages recognized by finite automata (DFA/NFA). They require no additional memory beyond a finite set of states.",
    references: [
      {
        label: "Wikipedia: Regular Language",
        url: "https://en.wikipedia.org/wiki/Regular_language",
      },
    ],
  },
  {
    id: "flat-49",
    topic: "automata",
    prompt: "Chomsky Normal Form (CNF) represents a CFG where:",
    options: [
      "All productions start with a terminal",
      "All productions have at most two non-terminals on the right-hand side",
      "All productions are of the form A → aB",
      "Left recursion is eliminated",
    ],
    answerIndex: 1,
    explanation:
      "In CNF, every production is either A → BC (exactly two non-terminals) or A → a (a single terminal). This is useful for parsing algorithms like CYK.",
    references: [
      {
        label: "Wikipedia: Chomsky Normal Form",
        url: "https://en.wikipedia.org/wiki/Chomsky_normal_form",
      },
    ],
  },
  {
    id: "flat-50",
    topic: "automata",
    prompt:
      "Which type of automaton is used in lexical analysis for tokenizing source code?",
    options: [
      "Pushdown Automaton",
      "Turing Machine",
      "Finite Automaton",
      "Linear Bounded Automaton",
    ],
    answerIndex: 2,
    explanation:
      "Lexical analysers (scanners/tokenizers) in compilers are implemented using finite automata, driven by regular expressions describing token patterns.",
    references: [
      {
        label: "Wikipedia: Lexical Analysis",
        url: "https://en.wikipedia.org/wiki/Lexical_analysis",
      },
    ],
  },
  {
    id: "flat-51",
    topic: "automata",
    prompt:
      "Which of the following conversions is NOT possible algorithmically?",
    options: [
      "Regular grammar to CFG",
      "Non-deterministic FA to Deterministic FA",
      "Non-deterministic PDA to Deterministic PDA",
      "Non-deterministic TM to Deterministic TM",
    ],
    answerIndex: 2,
    explanation:
      "There is no general algorithm to convert an NPDA to an equivalent DPDA — DPDAs are strictly less powerful than NPDAs. The other conversions are all algorithmically possible.",
    references: [
      {
        label: "Wikipedia: Pushdown Automaton",
        url: "https://en.wikipedia.org/wiki/Pushdown_automaton",
      },
    ],
  },
  {
    id: "flat-52",
    topic: "automata",
    prompt: "Pumping Lemma is generally used for proving that:",
    options: [
      "A given grammar is regular",
      "A given grammar is NOT regular",
      "Two regular expressions are equivalent",
      "None of these",
    ],
    answerIndex: 1,
    explanation:
      "The Pumping Lemma is used as a proof tool to show a language is NOT regular — by showing that no pumping length can satisfy the lemma conditions.",
    references: [
      {
        label: "Wikipedia: Pumping Lemma for Regular Languages",
        url: "https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages",
      },
    ],
  },
  {
    id: "flat-53",
    topic: "automata",
    prompt:
      "Which of the following languages cannot be accepted by a regular grammar?",
    options: [
      "Set of numbers divisible by 2",
      "Set of binary complements",
      "Set of strings with odd number of 0s",
      "Set of 0ⁿ1ⁿ",
    ],
    answerIndex: 3,
    explanation:
      "The language {0ⁿ1ⁿ | n ≥ 1} requires counting and matching equal numbers of 0s and 1s, which a finite automaton (regular grammar) cannot do. It is a context-free language.",
    references: [
      {
        label: "Wikipedia: Pumping Lemma",
        url: "https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages",
      },
    ],
  },
  {
    id: "flat-54",
    topic: "automata",
    prompt:
      "If L1 and L2 are context-free languages, which of the following is also context-free?",
    options: ["L1* only", "L2 ∪ L1 only", "L1.L2 only", "All of the mentioned"],
    answerIndex: 3,
    explanation:
      "CFLs are closed under Kleene star, union, and concatenation. Therefore L1*, L1 ∪ L2, and L1.L2 are all context-free when L1 and L2 are CFLs.",
    references: [
      {
        label: "Wikipedia: Context-Free Language",
        url: "https://en.wikipedia.org/wiki/Context-free_language",
      },
    ],
  },
  {
    id: "flat-55",
    topic: "automata",
    prompt:
      "Which of the following is not part of the 5-tuple definition of a finite automaton?",
    options: [
      "Input Alphabet",
      "Transition function",
      "Initial state",
      "Output alphabet",
    ],
    answerIndex: 3,
    explanation:
      "A DFA is defined as (Q, Σ, δ, q₀, F): states, input alphabet, transition function, start state, accept states. An output alphabet belongs to transducers (Mealy/Moore machines), not recognizers.",
    references: [
      {
        label: "Wikipedia: Deterministic Finite Automaton",
        url: "https://en.wikipedia.org/wiki/Deterministic_finite_automaton",
      },
    ],
  },
  {
    id: "flat-56",
    topic: "automata",
    prompt:
      "A regular expression for the language of all strings over {a,b} containing at least one 'a' is:",
    options: ["a(a+b)*", "(a+b)*a", "(a+b)a(a+b)", "All of the above"],
    answerIndex: 3,
    explanation:
      "All three options describe strings over {a,b} that contain at least one 'a'. (a+b)a(a+b)* also works. The given PDF answer (a+b)a(a+b) is one valid form.",
    references: [
      {
        label: "Wikipedia: Regular Expression",
        url: "https://en.wikipedia.org/wiki/Regular_expression",
      },
    ],
  },
  {
    id: "flat-57",
    topic: "automata",
    prompt:
      "Which of the following statements about problems I–III is correct? (I) Membership in unrestricted grammar is undecidable. (II) Whether L(TM) is regular is undecidable. (III) Equivalence of two CFGs is undecidable.",
    options: [
      "Only I and II are undecidable",
      "Only III is undecidable",
      "Only II and IV are undecidable",
      "Only I, II and III are undecidable",
    ],
    answerIndex: 3,
    explanation:
      "All three are undecidable: (I) Membership in unrestricted grammars is undecidable (Post correspondence). (II) Rice's theorem applies to TM language regularity. (III) CFG equivalence is undecidable.",
    references: [
      {
        label: "Wikipedia: Undecidable Problem",
        url: "https://en.wikipedia.org/wiki/Undecidable_problem",
      },
    ],
  },
  {
    id: "flat-58",
    topic: "automata",
    prompt:
      "Suppose a regular language L is closed under the halving operation. The result (½L) will be:",
    options: [
      "¼L will be regular",
      "½L will be regular",
      "⅛L will be regular",
      "All of the mentioned",
    ],
    answerIndex: 1,
    explanation:
      "Regular languages are closed under the halving operation. If L is regular, then ½L = {x | xy ∈ L for some y with |y| = |x|} is also regular.",
    references: [
      {
        label: "Wikipedia: Regular Language Closure Properties",
        url: "https://en.wikipedia.org/wiki/Regular_language",
      },
    ],
  },
  {
    id: "flat-59",
    topic: "automata",
    prompt: "Given Grammar: S→A, A→aA, A→ε, B→bA. Which production is useless?",
    options: ["S→A", "A→aA", "A→ε", "B→bA"],
    answerIndex: 3,
    explanation:
      "B→bA is useless because B is never reachable from the start symbol S. Productions that can never contribute to the derivation of a terminal string are useless.",
    references: [
      {
        label: "Wikipedia: Useless Symbol (Formal Languages)",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar",
      },
    ],
  },
  {
    id: "flat-60",
    topic: "automata",
    prompt:
      "The minimum number of states in any DFA accepting the language L = (111+11111)* is:",
    options: ["2", "3", "5", "6"],
    answerIndex: 1,
    explanation:
      "The language (111+11111)* consists of strings formed by concatenating runs of exactly 3 or 5 ones. The minimal DFA requires 3 states to track this.",
    references: [
      {
        label: "Wikipedia: Deterministic Finite Automaton",
        url: "https://en.wikipedia.org/wiki/Deterministic_finite_automaton",
      },
    ],
  },

  // CCW 2024 PYQs —— Automata (questions ccw24-40 to ccw24-49)
  {
    id: "ccw24-40",
    topic: "automata",
    prompt:
      "For the DFA with states (Initial, Final, Dumping) and transitions a: Initial→Final, a: Final→Initial, b: Initial→Dumping, b: Final→Final — which string will NOT be accepted?",
    options: ["ababaabaa", "abbbaa", "abbbaabb", "abbaabbaa"],
    answerIndex: 1,
    explanation:
      "The DFA accepts strings where 'a's keep cycling between Initial and Final, while 'b' is only allowed from the Final state. 'abbbaa' hits a 'b' from a non-final state and enters the Dumping (trap) state.",
    references: [
      {
        label: "Wikipedia: Deterministic Finite Automaton",
        url: "https://en.wikipedia.org/wiki/Deterministic_finite_automaton",
      },
    ],
  },
  {
    id: "ccw24-41",
    topic: "automata",
    prompt: "Can a DFA recognize a palindrome language?",
    options: [
      "Yes",
      "No",
      "Yes, with input alphabet as Σ*",
      "Can't be determined",
    ],
    answerIndex: 1,
    explanation:
      "The set of all palindromes over an alphabet of size ≥ 2 is not a regular language — it requires memory proportional to string length, which a DFA cannot provide.",
    references: [
      {
        label: "Wikipedia: Pumping Lemma for Regular Languages",
        url: "https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages",
      },
    ],
  },
  {
    id: "ccw24-42",
    topic: "automata",
    prompt:
      "Statement 1: The initial state of an NFA is the initial state of its equivalent DFA. Statement 2: The final states of the DFA will be every combination of final states of the NFA. Which is correct?",
    options: [
      "Statement 1 is true and Statement 2 is true",
      "Statement 1 is true and Statement 2 is false",
      "Statement 1 can be true and Statement 2 is true",
      "Statement 1 is false and Statement 2 is also false",
    ],
    answerIndex: 1,
    explanation:
      "In the subset construction (NFA→DFA), the DFA's initial state IS the NFA's initial state (S1 true). The DFA's final states are any subsets that contain at least one NFA final state — not every combination (S2 false).",
    references: [
      {
        label: "Wikipedia: Powerset Construction",
        url: "https://en.wikipedia.org/wiki/Powerset_construction",
      },
    ],
  },
  {
    id: "ccw24-43",
    topic: "automata",
    prompt:
      "Which of the following statements about the relationship between grammar types is correct?",
    options: [
      "All regular grammars are context-free but not vice versa",
      "All context-free grammars are regular grammars but not vice versa",
      "Regular grammar and context-free grammar are the same entity",
      "None of the mentioned",
    ],
    answerIndex: 0,
    explanation:
      "Regular languages form a strict subset of context-free languages. Every regular grammar is also a context-free grammar, but not every context-free grammar is regular.",
    references: [
      {
        label: "Wikipedia: Chomsky Hierarchy",
        url: "https://en.wikipedia.org/wiki/Chomsky_hierarchy",
      },
    ],
  },
  {
    id: "ccw24-44",
    topic: "automata",
    prompt:
      "Suppose A → xBz and B → y. What is the simplified (substituted) grammar?",
    options: [
      "A → xyz",
      "A → xBz | xyz",
      "A → xBz | B | y",
      "None of the mentioned",
    ],
    answerIndex: 1,
    explanation:
      "Substituting B → y into A → xBz gives A → xyz, but we keep the original production too: A → xBz | xyz.",
    references: [
      {
        label: "Wikipedia: Context-Free Grammar",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar",
      },
    ],
  },
  {
    id: "ccw24-45",
    topic: "automata",
    prompt:
      "Given grammar G: (1)S→AS, (2)S→AAS, (3)A→SA, (4)A→aa — which productions violate Chomsky Normal Form?",
    options: ["2 and 4", "1 and 3", "1, 2, 3, and 4", "2, 3, and 4"],
    answerIndex: 0,
    explanation:
      "CNF requires productions of the form A→BC (exactly two non-terminals) or A→a (single terminal). S→AS (1) and A→SA (3) are valid A→BC forms. S→AAS (2) has three symbols on the RHS, violating CNF. A→aa (4) has two terminals instead of one.",
    references: [
      {
        label: "Wikipedia: Chomsky Normal Form",
        url: "https://en.wikipedia.org/wiki/Chomsky_normal_form",
      },
    ],
  },
  {
    id: "ccw24-46",
    topic: "automata",
    prompt: "What is the pumping length of a string of length x?",
    options: ["x+1", "x", "x−1", "x²"],
    answerIndex: 0,
    explanation:
      "The pumping lemma states that for any string s in a regular language with |s| ≥ pumping length p, s can be split and pumped. The pumping length is x+1 for a string of length x.",
    references: [
      {
        label: "Wikipedia: Pumping Lemma",
        url: "https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages",
      },
    ],
  },
  {
    id: "ccw24-47",
    topic: "automata",
    prompt: "The language of balanced parentheses is:",
    options: [
      "Regular",
      "Non-regular",
      "May be regular",
      "None of the mentioned",
    ],
    answerIndex: 1,
    explanation:
      "Balanced parentheses require counting (matching open with close), which requires unbounded memory — it is context-free but not regular.",
    references: [
      {
        label: "Wikipedia: Context-Free Language",
        url: "https://en.wikipedia.org/wiki/Context-free_language",
      },
    ],
  },
  {
    id: "ccw24-48",
    topic: "automata",
    prompt: "Which of the following problems are unsolvable (undecidable)?",
    options: [
      "Halting problem only",
      "Boolean Satisfiability problem only",
      "Both Halting problem and Boolean Satisfiability",
      "None of the mentioned",
    ],
    answerIndex: 0,
    explanation:
      "The Halting problem is undecidable (proven by Turing). Boolean Satisfiability (SAT) is decidable — it is NP-complete but a solution can always be verified and found by exhaustive search.",
    references: [
      {
        label: "Wikipedia: Halting Problem",
        url: "https://en.wikipedia.org/wiki/Halting_problem",
      },
    ],
  },
  {
    id: "ccw24-49",
    topic: "automata",
    prompt:
      "A language L is said to be ________ if there is a Turing machine M such that L(M)=L and M halts at every point.",
    options: [
      "Turing acceptable",
      "Decidable",
      "Undecidable",
      "None of the mentioned",
    ],
    answerIndex: 1,
    explanation:
      "A decidable (recursive) language is one for which a Turing machine always halts and correctly accepts or rejects every input.",
    references: [
      {
        label: "Wikipedia: Decidability (Logic)",
        url: "https://en.wikipedia.org/wiki/Decidability_(logic)",
      },
    ],
  },
];
