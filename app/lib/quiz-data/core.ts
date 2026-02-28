import type { QuizQuestion } from "./types";

export const coreQuestions: QuizQuestion[] = [
    {
        id: "core-1",
        topic: "core",
        prompt: "Which layer in OSI model is responsible for routing packets?",
        options: ["Transport", "Data Link", "Network", "Session"],
        answerIndex: 2,
        explanation:
            "The Network layer (Layer 3) handles logical addressing and routing decisions across interconnected networks.",
        references: [{ label: "Wikipedia: OSI Model", url: "https://en.wikipedia.org/wiki/OSI_model" }],
    },
    {
        id: "core-2",
        topic: "core",
        prompt: "Which SQL command is used to retrieve data?",
        options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
        answerIndex: 0,
        explanation:
            "SELECT queries data from one or more tables and can be combined with WHERE, GROUP BY, ORDER BY, and JOIN clauses.",
        references: [{ label: "PostgreSQL SELECT Documentation", url: "https://www.postgresql.org/docs/current/sql-select.html" }],
    },
    {
        id: "core-3",
        topic: "core",
        prompt: "Which number system is base-16?",
        options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
        answerIndex: 3,
        explanation:
            "Hexadecimal is base-16 and represents values using 0-9 and A-F. It is commonly used to express memory addresses and binary data compactly.",
        references: [{ label: "Wikipedia: Hexadecimal", url: "https://en.wikipedia.org/wiki/Hexadecimal" }],
    },
    {
        id: "core-4",
        topic: "core",
        prompt: "In TCP/IP, which protocol provides reliable, ordered byte-stream delivery?",
        options: ["UDP", "IP", "TCP", "ARP"],
        answerIndex: 2,
        explanation:
            "TCP guarantees ordered delivery with acknowledgments, retransmissions, and flow/congestion control.",
        references: [{ label: "Wikipedia: Transmission Control Protocol", url: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol" }],
    },
    {
        id: "core-5",
        topic: "core",
        prompt: "Which normalization form removes partial dependency on a composite key?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answerIndex: 1,
        explanation:
            "Second Normal Form requires the table to be in 1NF and ensures non-key attributes are fully functionally dependent on the whole candidate key.",
        references: [{ label: "Wikipedia: Second Normal Form", url: "https://en.wikipedia.org/wiki/Second_normal_form" }],
    },
    {
        id: "core-6",
        topic: "core",
        prompt: "Which logic gate outputs 1 only when all inputs are 1?",
        options: ["OR", "XOR", "NAND", "AND"],
        answerIndex: 3,
        explanation:
            "An AND gate returns true only if every input is true; otherwise, the output is false.",
        references: [{ label: "Wikipedia: AND Gate", url: "https://en.wikipedia.org/wiki/AND_gate" }],
    },
    {
        id: "core-7",
        topic: "core",
        prompt: "Which OSI layer is responsible for end-to-end communication?",
        options: ["Network", "Transport", "Session", "Data Link"],
        answerIndex: 1,
        explanation:
            "The Transport layer provides end-to-end communication, reliability, flow control, and error handling.",
        references: [
            { label: "OSI Model", url: "https://en.wikipedia.org/wiki/OSI_model" },
        ],
    },
    {
        id: "core-8",
        topic: "core",
        prompt: "Which protocol provides reliable, connection-oriented communication?",
        options: ["UDP", "IP", "TCP", "ARP"],
        answerIndex: 2,
        explanation:
            "TCP ensures reliable data transfer using acknowledgements and retransmissions.",
        references: [
            { label: "TCP", url: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol" },
        ],
    },
    {
        id: "core-9",
        topic: "core",
        prompt: "Which SQL command is used to remove all rows from a table but keep the structure?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        answerIndex: 2,
        explanation:
            "TRUNCATE removes all records efficiently while preserving the table schema.",
        references: [
            { label: "TRUNCATE", url: "https://en.wikipedia.org/wiki/Truncate_(SQL)" },
        ],
    },
    {
        id: "core-10",
        topic: "core",
        prompt: "Which normal form removes transitive dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answerIndex: 2,
        explanation:
            "Third Normal Form eliminates transitive dependencies to reduce redundancy.",
        references: [
            { label: "Third Normal Form", url: "https://en.wikipedia.org/wiki/Third_normal_form" },
        ],
    },
    {
        id: "core-11",
        topic: "core",
        prompt: "Which addressing mode uses the operand stored in a register?",
        options: ["Immediate", "Direct", "Register", "Indirect"],
        answerIndex: 2,
        explanation:
            "Register addressing uses CPU registers to store operands, making it very fast.",
        references: [
            { label: "Addressing Modes", url: "https://en.wikipedia.org/wiki/Addressing_mode" },
        ],
    },
    {
        id: "core-12",
        topic: "core",
        prompt: "What is the base of the hexadecimal number system?",
        options: ["2", "8", "10", "16"],
        answerIndex: 3,
        explanation:
            "Hexadecimal uses base 16 and digits 0–9 and A–F.",
        references: [
            { label: "Hexadecimal", url: "https://en.wikipedia.org/wiki/Hexadecimal" },
        ],
    },
    {
        id: "core-13",
        topic: "core",
        prompt: "Which device operates at the Network layer of the OSI model?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        answerIndex: 2,
        explanation:
            "Routers forward packets based on logical (IP) addresses.",
        references: [
            { label: "Router", url: "https://en.wikipedia.org/wiki/Router_(computing)" },
        ],
    },
    {
        id: "core-14",
        topic: "core",
        prompt: "Which SQL constraint ensures uniqueness of column values?",
        options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "CHECK"],
        answerIndex: 2,
        explanation:
            "UNIQUE constraint ensures no duplicate values in a column.",
        references: [
            { label: "SQL Constraints", url: "https://en.wikipedia.org/wiki/SQL#Constraints" },
        ],
    },
    {
        id: "core-15",
        topic: "core",
        prompt: "Which cache mapping technique allows a block to be placed anywhere?",
        options: ["Direct mapping", "Associative mapping", "Set-associative mapping", "Static mapping"],
        answerIndex: 1,
        explanation:
            "Associative mapping allows any memory block to be stored in any cache line.",
        references: [
            { label: "Cache Mapping", url: "https://en.wikipedia.org/wiki/Cache_(computing)" },
        ],
    },
    {
        id: "core-16",
        topic: "core",
        prompt: "Which protocol translates IP addresses to MAC addresses?",
        options: ["RARP", "DNS", "ARP", "ICMP"],
        answerIndex: 2,
        explanation:
            "ARP resolves IP addresses to physical MAC addresses.",
        references: [
            { label: "ARP", url: "https://en.wikipedia.org/wiki/Address_Resolution_Protocol" },
        ],
    },
    {
        id: "core-17",
        topic: "core",
        prompt: "Which type of join returns only matching rows?",
        options: ["Left join", "Right join", "Full outer join", "Inner join"],
        answerIndex: 3,
        explanation:
            "Inner join returns rows that have matching values in both tables.",
        references: [
            { label: "SQL Join", url: "https://en.wikipedia.org/wiki/Join_(SQL)" },
        ],
    },
    {
        id: "core-18",
        topic: "core",
        prompt: "Which number system is commonly used to represent memory addresses?",
        options: ["Binary", "Decimal", "Hexadecimal", "Octal"],
        answerIndex: 2,
        explanation:
            "Hexadecimal is compact and maps neatly to binary representations.",
        references: [
            { label: "Memory Addressing", url: "https://en.wikipedia.org/wiki/Memory_address" },
        ],
    },
    {
        id: "core-19",
        topic: "core",
        prompt: "Which protocol is used to send error and control messages in IP networks?",
        options: ["TCP", "UDP", "ICMP", "FTP"],
        answerIndex: 2,
        explanation:
            "ICMP reports errors and diagnostic information such as ping.",
        references: [
            { label: "ICMP", url: "https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol" },
        ],
    },
    {
        id: "core-20",
        topic: "core",
        prompt: "Which database key uniquely identifies a record?",
        options: ["Foreign key", "Candidate key", "Primary key", "Composite key"],
        answerIndex: 2,
        explanation:
            "Primary keys uniquely identify each row and cannot be null.",
        references: [
            { label: "Primary Key", url: "https://en.wikipedia.org/wiki/Primary_key" },
        ],
    },
    {
        id: "core-21",
        topic: "core",
        prompt: "Which unit performs arithmetic and logical operations in a CPU?",
        options: ["Control Unit", "Register", "ALU", "Cache"],
        answerIndex: 2,
        explanation:
            "The Arithmetic Logic Unit (ALU) performs arithmetic and logical operations.",
        references: [
            { label: "ALU", url: "https://en.wikipedia.org/wiki/Arithmetic_logic_unit" },
        ],
    },
];