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

    // CCW 2024 PYQs —— DBMS (questions ccw24-11 to ccw24-20)
    {
        id: "ccw24-11",
        topic: "core",
        prompt: "Which of the following properties is preserved during the execution of a transaction in isolation?",
        options: ["Atomicity", "Isolation", "Durability", "Consistency"],
        answerIndex: 3,
        explanation:
            "Isolation ensures concurrent transactions produce the same result as if they ran serially, thereby preserving database Consistency.",
        references: [
            { label: "Wikipedia: ACID", url: "https://en.wikipedia.org/wiki/ACID" },
        ],
    },
    {
        id: "ccw24-12",
        topic: "core",
        prompt: "Given the relation instance with attributes X, Y, Z and tuples (1,4,2),(1,5,3),(1,6,3),(3,2,2), which functional dependency holds?",
        options: ["XY→Z and Z→Y", "YZ→X and Y→Z", "YZ→X and X→Z", "XZ→Y and Y→X"],
        answerIndex: 0,
        explanation:
            "From the data, the pair (X,Y) uniquely determines Z (XY→Z), and each Z value maps to a unique Y value (Z→Y).",
        references: [
            { label: "Wikipedia: Functional Dependency", url: "https://en.wikipedia.org/wiki/Functional_dependency" },
        ],
    },
    {
        id: "ccw24-13",
        topic: "core",
        prompt: "Which of the following statements about normalization is FALSE?",
        options: [
            "A relation in which all keys have only a single attribute is in 2NF",
            "A relation that has two attributes is in BCNF",
            "A prime attribute can depend transitively on any key in a relation in BCNF",
            "A prime attribute can depend transitively on any key in a relation in 3NF",
        ],
        answerIndex: 2,
        explanation:
            "BCNF is stricter than 3NF. In BCNF, every determinant must be a superkey, so transitive dependency of a prime attribute on a key violates BCNF — making statement C false.",
        references: [
            { label: "Wikipedia: Boyce–Codd Normal Form", url: "https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form" },
        ],
    },
    {
        id: "ccw24-14",
        topic: "core",
        prompt: "Which query always gives the same answer as: SELECT * FROM R WHERE a IN (SELECT S.a FROM S)?",
        options: [
            "SELECT R.* FROM R, S WHERE R.a=S.a",
            "SELECT DISTINCT R.* FROM R, S WHERE R.a=S.a",
            "SELECT R.* FROM R, (SELECT DISTINCT a FROM S) AS S1 WHERE R.a=S1.a",
            "SELECT R.* FROM R, S WHERE R.a=S.a AND is unique R",
        ],
        answerIndex: 2,
        explanation:
            "Using a subquery that selects DISTINCT values from S avoids duplicate rows from joins when S has multiple matching tuples, matching the IN semantics exactly.",
        references: [
            { label: "Wikipedia: SQL Subquery", url: "https://en.wikipedia.org/wiki/SQL#Queries" },
        ],
    },
    {
        id: "ccw24-15",
        topic: "core",
        prompt: "The term for information that describes what type of data is available in a database is:",
        options: ["Data dictionary", "Data repository", "Index data", "Metadata"],
        answerIndex: 3,
        explanation:
            "Metadata is data that describes other data — its structure, type, format, and constraints — giving context about the database contents.",
        references: [
            { label: "Wikipedia: Metadata", url: "https://en.wikipedia.org/wiki/Metadata" },
        ],
    },
    {
        id: "ccw24-16",
        topic: "core",
        prompt: "For the query SELECT P1.address FROM Cinema P1, which clause always finds theaters with maximum capacity?",
        options: [
            "WHERE P1.capacity >= ALL (SELECT P2.capacity FROM Cinema P2)",
            "WHERE P1.capacity >= ANY (SELECT P2.capacity FROM Cinema P2)",
            "WHERE P1.capacity > ALL (SELECT max(P2.capacity) FROM Cinema P2)",
            "WHERE P1.capacity > ANY (SELECT max(P2.capacity) FROM Cinema P2)",
        ],
        answerIndex: 0,
        explanation:
            "'>= ALL' ensures the capacity is at least as large as every other capacity in the table, i.e. it selects only the maximum.",
        references: [
            { label: "Wikipedia: SQL", url: "https://en.wikipedia.org/wiki/SQL" },
        ],
    },
    {
        id: "ccw24-17",
        topic: "core",
        prompt: "Which of the following statements about database transaction schedules is/are TRUE? I. Strict 2PL generates conflict-serializable, recoverable schedules. II. Timestamp-ordering with Thomas Write Rule can generate view-serializable but not conflict-serializable schedules.",
        options: ["Both I and II", "I only", "II only", "Neither I nor II"],
        answerIndex: 0,
        explanation:
            "Both statements are correct. Strict 2PL guarantees conflict serializability and recoverability. The Thomas Write Rule allows certain non-conflict-serializable but view-serializable schedules.",
        references: [
            { label: "Wikipedia: Two-Phase Locking", url: "https://en.wikipedia.org/wiki/Two-phase_locking" },
        ],
    },
    {
        id: "ccw24-18",
        topic: "core",
        prompt: "B+ Trees are considered balanced because:",
        options: [
            "The lengths of the paths from the root to all leaf nodes are all equal",
            "The lengths of the paths from the root to all leaf nodes differ by at most 1",
            "The number of children of any two non-leaf sibling nodes differ by at most 1",
            "The number of records in any two leaf nodes differ by at most 1",
        ],
        answerIndex: 0,
        explanation:
            "In a B+ Tree, all leaf nodes are at the same depth, so every path from root to leaf has identical length — this is what makes it balanced.",
        references: [
            { label: "Wikipedia: B+ Tree", url: "https://en.wikipedia.org/wiki/B%2B_tree" },
        ],
    },
    {
        id: "ccw24-19",
        topic: "core",
        prompt: "Which of the following relational query languages have the same expressive power? I) Relational algebra II) Tuple relational calculus (safe) III) Domain relational calculus (safe)",
        options: ["II and III only", "I and II only", "I and III only", "I, II and III"],
        answerIndex: 3,
        explanation:
            "All three — relational algebra, safe tuple relational calculus, and safe domain relational calculus — are equally expressive and can express the same set of queries.",
        references: [
            { label: "Wikipedia: Relational Algebra", url: "https://en.wikipedia.org/wiki/Relational_algebra" },
        ],
    },
    {
        id: "ccw24-20",
        topic: "core",
        prompt: "An entity in A is associated with at most one entity in B. An entity in B can be associated with any number of entities in A. What is this relationship?",
        options: ["One-to-many", "One-to-one", "Many-to-many", "Many-to-one"],
        answerIndex: 3,
        explanation:
            "Many entities in A map to at most one entity in B — this is a Many-to-one relationship from A's perspective.",
        references: [
            { label: "Wikipedia: Entity–Relationship Model", url: "https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model" },
        ],
    },
];