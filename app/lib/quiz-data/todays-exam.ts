import type { QuizQuestion } from "./types";

export const todaysExamQuestions: QuizQuestion[] = [
  {
    id: "todays-exam-1",
    topic: "todays-exam",
    prompt:
      "Consider a situation where a swap operation is very costly. Which of the following sorting algorithms should be preferred so that the number of swap operations are minimized in general?",
    options: [
      "Heap Sort",
      "Selection Sort",
      "Insertion Sort",
      "Merge Sort",
    ],
    answerIndex: 1,
    explanation:
      "Selection Sort minimizes swaps — it performs exactly n-1 swaps in the worst case (one swap per pass). Heap Sort performs O(n log n) swaps during heapify and deletion. Insertion Sort performs O(n^2) swaps (shifting elements). Merge Sort doesn't swap but copies elements, with O(n log n) operations. For a swap-costly environment, Selection Sort's O(n) swaps make it the optimal choice.",
    explanationLatex: "\\text{Swaps: Selection } O(n),\\; \\text{Heap } O(n \\log n),\\; \\text{Insertion } O(n^2),\\; \\text{Merge } O(n \\log n)",
    references: [
      {
        label: "Wikipedia: Selection Sort",
        url: "https://en.wikipedia.org/wiki/Selection_sort",
      },
    ],
  },
  {
    id: "todays-exam-2",
    topic: "todays-exam",
    prompt:
      "Which of the following operations is not possible in a singly linked list?",
    options: [
      "Insertion at beginning",
      "Insertion at end",
      "Traversal in reverse direction",
      "Deletion at beginning",
    ],
    answerIndex: 2,
    explanation:
      "A singly linked list node contains only a data field and a next pointer (pointing to the next node). There is no previous pointer, so traversing in reverse direction is impossible without reversing the entire list first or using O(n) auxiliary space (e.g., a stack). Insertion at beginning/end and deletion at beginning are all possible with O(1) or O(n) time by updating pointers.",
    references: [
      {
        label: "Wikipedia: Linked List",
        url: "https://en.wikipedia.org/wiki/Linked_list",
      },
    ],
  },
  {
    id: "todays-exam-3",
    topic: "todays-exam",
    prompt:
      "Using Insertion Sort, how many shifts are required to sort the elements 7, 3, 5, 2, 6 in ascending order?",
    options: ["4", "5", "6", "7"],
    answerIndex: 2,
    explanation:
      "Insertion Sort builds the sorted array one element at a time by shifting larger elements right. Tracing: [7] (start), then 3 shifts 7 right (1 shift), then 5 shifts 7 right (1), then 2 shifts 7, 5, 3 right (3), then 6 shifts 7 right (1). Total = 1 + 1 + 3 + 1 = 6 shifts.",
    explanationLatex: "1 + 1 + 3 + 1 = 6",
    references: [
      {
        label: "Wikipedia: Insertion Sort",
        url: "https://en.wikipedia.org/wiki/Insertion_sort",
      },
    ],
  },
  {
    id: "todays-exam-4",
    topic: "todays-exam",
    prompt:
      "Which data structure is most appropriate for checking whether parentheses in an expression are balanced?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    answerIndex: 0,
    explanation:
      "A Stack is ideal: push opening brackets and pop on closing ones. If the stack is empty at the end, parentheses are balanced. This works because nesting follows LIFO ordering — the most recently opened bracket must be closed first.",
    references: [
      {
        label: "Wikipedia: Stack (Abstract Data Type)",
        url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",
      },
    ],
  },
  {
    id: "todays-exam-5",
    topic: "todays-exam",
    prompt: "Evaluate the prefix expression: - * + 10 5 / 20 4 5",
    options: ["60", "65", "70", "75"],
    answerIndex: 2,
    explanation:
      "Prefix (Polish) notation is evaluated right-to-left. Step 1: + 10 5 = 15. Step 2: / 20 4 = 5. Step 3: * 15 5 = 75. Step 4: - 75 5 = 70. The expression evaluates to 70.",
    explanationLatex: "\\begin{aligned}+10\\;5 &= 15 \\\\ /20\\;4 &= 5 \\\\ 15 \\times 5 &= 75 \\\\ 75 - 5 &= 70\\end{aligned}",
    references: [
      {
        label: "Wikipedia: Polish Notation",
        url: "https://en.wikipedia.org/wiki/Polish_notation",
      },
    ],
  },
  {
    id: "todays-exam-6",
    topic: "todays-exam",
    prompt:
      "The maximum number of nodes in a binary tree of height 4 (root at height 0) is:",
    options: ["15", "16", "31", "32"],
    answerIndex: 2,
    explanation:
      "A full binary tree of height h (root at height 0) has all levels completely filled. For h = 4, the total nodes = 2^(4+1) - 1 = 32 - 1 = 31.",
    explanationLatex: "\\sum_{i=0}^{4} 2^{i} = 2^{5} - 1 = 31",
    references: [
      {
        label: "Wikipedia: Binary Tree",
        url: "https://en.wikipedia.org/wiki/Binary_tree",
      },
    ],
  },
  {
    id: "todays-exam-7",
    topic: "todays-exam",
    prompt:
      "Which traversal technique of a Binary Search Tree (BST) yields elements in ascending order?",
    options: ["Level Order", "Inorder", "Preorder", "Postorder"],
    answerIndex: 1,
    explanation:
      "Inorder traversal (left subtree -> root -> right subtree) visits BST elements in ascending sorted order. Preorder (root -> left -> right) is used for tree copying. Postorder (left -> right -> root) is used for tree deletion. Level order is BFS traversal.",
    references: [
      {
        label: "Wikipedia: Tree Traversal",
        url: "https://en.wikipedia.org/wiki/Tree_traversal",
      },
    ],
  },
  {
    id: "todays-exam-8",
    topic: "todays-exam",
    prompt: "Which traversal is used to delete a tree safely?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    answerIndex: 2,
    explanation:
      "Postorder traversal (left -> right -> root) is used for safe tree deletion because it deletes children before the parent. This ensures no dangling pointers remain. If Preorder were used (delete root first), we would lose references to the children, causing memory leaks.",
    references: [
      {
        label: "Wikipedia: Tree Traversal",
        url: "https://en.wikipedia.org/wiki/Tree_traversal",
      },
    ],
  },
  {
    id: "todays-exam-9",
    topic: "todays-exam",
    prompt:
      "Which graph traversal algorithm is used to find the shortest path in an unweighted graph?",
    options: [
      "Depth First Search (DFS)",
      "Breadth First Search (BFS)",
      "Dijkstra's Algorithm",
      "Prim's Algorithm",
    ],
    answerIndex: 1,
    explanation:
      "BFS explores level by level — it visits all nodes at distance k before any node at distance k+1. This guarantees the first time a node is discovered is via the shortest path (minimum number of edges). DFS explores depth-first and does not guarantee shortest path. Dijkstra works for weighted graphs but is overkill for unweighted. Prim finds MST, not shortest paths.",
    references: [
      {
        label: "Wikipedia: Breadth-First Search",
        url: "https://en.wikipedia.org/wiki/Breadth-first_search",
      },
    ],
  },
  {
    id: "todays-exam-10",
    topic: "todays-exam",
    prompt:
      "State True or False:\ni) A queue follows the LIFO principle.\nii) In a complete binary tree, all levels except possibly the last are completely filled.",
    options: [
      "True, True",
      "True, False",
      "False, False",
      "False, True",
    ],
    answerIndex: 3,
    explanation:
      "i) False — A queue follows FIFO (First-In-First-Out). Elements are added at the rear and removed from the front. LIFO is the principle of a stack.\n\nii) True — A complete binary tree has all levels completely filled except possibly the last level, which is filled from left to right. This is its defining property.",
    references: [
      {
        label: "Wikipedia: Queue (Abstract Data Type)",
        url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)",
      },
      {
        label: "Wikipedia: Binary Tree",
        url: "https://en.wikipedia.org/wiki/Binary_tree",
      },
    ],
  },
  {
    id: "todays-exam-11",
    topic: "todays-exam",
    prompt:
      "Which synchronization mechanism is most appropriate to ensure mutual exclusion while accessing a critical section in a multithreaded program running on a multiprocessor system?",
    options: ["Mutex", "Deadlock", "Semaphore", "Spooling"],
    answerIndex: 0,
    explanation:
      "A mutex (mutual exclusion lock) ensures only one thread enters a critical section at a time. It provides ownership semantics (only the locking thread can unlock) and priority inheritance (prevents priority inversion in some implementations). A binary semaphore can also provide mutual exclusion, but a mutex is preferred for critical sections due to these benefits.",
    references: [
      {
        label: "Wikipedia: Mutex",
        url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      },
    ],
  },
  {
    id: "todays-exam-12",
    topic: "todays-exam",
    prompt: "Which of the following is not an operating system?",
    options: ["iOS", "Linux", "Oracle", "Unix"],
    answerIndex: 2,
    explanation:
      "Oracle is a Relational Database Management System (RDBMS), not an operating system. iOS is Apple's mobile OS, Linux is an open-source Unix-like kernel, and Unix is a family of multitasking, multiuser operating systems.",
    references: [
      {
        label: "Wikipedia: Operating System",
        url: "https://en.wikipedia.org/wiki/Operating_system",
      },
    ],
  },
  {
    id: "todays-exam-13",
    topic: "todays-exam",
    prompt:
      "In a system using demand paging, what happens when a process accesses a page that is not currently in main memory?",
    options: [
      "Context switch occurs",
      "Page fault is generated",
      "Page is overwritten",
      "TLB is flushed immediately",
    ],
    answerIndex: 1,
    explanation:
      "A page fault interrupt is generated by the MMU (Memory Management Unit). The OS then traps to the kernel, checks if the virtual address is valid, locates a free frame or evicts a page using the replacement algorithm, loads the required page from disk (swap space) into the frame, updates the page table, and restarts the faulting instruction.",
    references: [
      {
        label: "Wikipedia: Page Fault",
        url: "https://en.wikipedia.org/wiki/Page_fault",
      },
    ],
  },
  {
    id: "todays-exam-14",
    topic: "todays-exam",
    prompt:
      "A disk has tracks numbered from 0 to 4999. The disk head is currently at track 1200. The previous request was at 1100, so the head is moving towards higher-numbered tracks. The queue of pending requests is: 1800, 900, 1300, 3000, 1000, 2500, 1400\n\nUsing the SCAN (Elevator) disk scheduling algorithm, the total head movement (in number of tracks) is:",
    options: ["7898", "8798", "7840", "7920"],
    answerIndex: 0,
    explanation:
      "SCAN services requests in the current direction until the end of the disk (track 4999), then reverses. Going up from 1200: 1300, 1400, 1800, 2500, 3000, then end at 4999. Distance up = (100 + 100 + 400 + 700 + 500 + 1999) = 3799. Going down from 4999: 1000, 900. Distance down = (3999 + 100) = 4099. Total = 3799 + 4099 = 7898 tracks.",
    explanationLatex: "\\begin{aligned}\\text{Up: }&100+100+400+700+500+1999 = 3799 \\\\ \\text{Down: }&3999+100 = 4099 \\\\ \\text{Total: }&3799+4099 = 7898\\end{aligned}",
    references: [
      {
        label: "Wikipedia: Elevator Algorithm",
        url: "https://en.wikipedia.org/wiki/Elevator_algorithm",
      },
    ],
  },
  {
    id: "todays-exam-15",
    topic: "todays-exam",
    prompt:
      "A system uses FIFO page replacement and has 3 page frames initially empty. The page reference string is:\n7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3\n\nThe total number of page faults generated is:",
    options: ["9", "10", "11", "12"],
    answerIndex: 1,
    explanation:
      "FIFO replaces the page that entered the frame set first. Tracing with 3 frames: 7 (fault, frames: 7), 0 (fault, frames: 7,0), 1 (fault, frames: 7,0,1), 2 (fault, replace 7), 0 (hit), 3 (fault, replace 0), 0 (fault, replace 1), 4 (fault, replace 2), 2 (fault, replace 3), 3 (fault, replace 0), 0 (fault, replace 4), 3 (hit). Total = 10 page faults.",
    explanationLatex: "\\text{Trace: }7\\to0\\to1\\to2\\to3\\to0\\to4\\to2\\to3\\to0 = 10\\text{ faults}",
    references: [
      {
        label: "Wikipedia: Page Replacement Algorithm",
        url: "https://en.wikipedia.org/wiki/Page_replacement_algorithm",
      },
    ],
  },
  {
    id: "todays-exam-16",
    topic: "todays-exam",
    prompt:
      "Which of the following techniques is used to handle deadlock?",
    options: ["Deadlock", "Compaction", "Paging", "Swapping"],
    answerIndex: 0,
    explanation:
      "Deadlock handling collectively refers to techniques used to manage deadlocks: prevention (ensure at least one Coffman condition never holds), avoidance (Banker's algorithm, safe state checking), detection and recovery (resource allocation graphs, process termination or resource preemption), and ignorance (Ostrich algorithm). The other options are memory management techniques: compaction resolves external fragmentation, paging maps virtual to physical addresses, swapping moves processes between memory and disk.",
    references: [
      {
        label: "Wikipedia: Deadlock",
        url: "https://en.wikipedia.org/wiki/Deadlock",
      },
    ],
  },
  {
    id: "todays-exam-17",
    topic: "todays-exam",
    prompt:
      "In the Banker's algorithm, the system is in a safe state if:",
    options: [
      "All resources are allocated",
      "Deadlock cannot occur",
      "There exists a safe sequence",
      "CPU utilization is maximum",
    ],
    answerIndex: 2,
    explanation:
      "In the Banker's algorithm, a safe state is defined as one where there exists at least one safe sequence of all processes such that each process's remaining resource needs can be satisfied by the currently available resources plus resources held by earlier processes in the sequence. Option (b) 'deadlock cannot occur' is a consequence of a safe state, not its definition.",
    references: [
      {
        label: "Wikipedia: Banker's Algorithm",
        url: "https://en.wikipedia.org/wiki/Banker%27s_algorithm",
      },
    ],
  },
  {
    id: "todays-exam-18",
    topic: "todays-exam",
    prompt: "Thrashing occurs when:",
    options: [
      "CPU is idle",
      "Page fault rate is high",
      "Disk utilization is low",
      "Context switching is minimum",
    ],
    answerIndex: 1,
    explanation:
      "Thrashing occurs when the system spends more time handling page faults than executing processes. Key symptoms: very high page fault rate (working set exceeds available physical memory), low CPU utilization (idle waiting for page transfers), and high disk I/O (continuous swapping). The OS may misinterpret low CPU utilization as needing more multiprogramming, worsening the thrashing.",
    references: [
      {
        label: "Wikipedia: Thrashing",
        url: "https://en.wikipedia.org/wiki/Thrashing_(computer_science)",
      },
    ],
  },
  {
    id: "todays-exam-19",
    topic: "todays-exam",
    prompt:
      "Which of the following is private to each thread within the same process?",
    options: [
      "Address Space",
      "Global Variables",
      "Stack",
      "Global variables",
    ],
    answerIndex: 2,
    explanation:
      "Within a process, threads share the address space, heap, global variables, file descriptors, and signal handlers. However, each thread has its own private stack (for local variables and function calls), program counter, register set (including stack pointer), thread ID, signal mask, and errno variable.",
    references: [
      {
        label: "Wikipedia: Thread (Computing)",
        url: "https://en.wikipedia.org/wiki/Thread_(computing)",
      },
    ],
  },
  {
    id: "todays-exam-20",
    topic: "todays-exam",
    prompt:
      '```c\n#include <unistd.h>\n\nint x = 5;\n\nint main() {\n    fork();\n    x = x + 5;\n    printf("%d\\n", x);\n    return 0;\n}\n```',
    options: [
      "10 printed once",
      "10 printed twice",
      "15 printed once",
      "15 printed twice",
    ],
    answerIndex: 1,
    explanation:
      "fork() creates an exact duplicate (child process) of the calling process. Both parent and child continue from the same point. Initially x=5. After fork(), both processes execute x = x + 5 (5+5=10), so both print '10'. Output: '10' printed twice — once by the parent and once by the child.",
    explanationLatex: "\\text{Parent: } x = 5 + 5 = 10 \\quad \\text{Child: } x = 5 + 5 = 10",
    references: [
      {
        label: "Wikipedia: Fork (System Call)",
        url: "https://en.wikipedia.org/wiki/Fork_(system_call)",
      },
    ],
  },
  {
    id: "todays-exam-21",
    topic: "todays-exam",
    prompt:
      "Which of the following memory types allows content-based access rather than address-based access?",
    options: ["RAM", "ROM", "Cache memory", "Associative memory"],
    answerIndex: 3,
    explanation:
      "Associative memory (Content-Addressable Memory / CAM) is accessed by searching for matching content rather than by supplying a memory address. It compares input data against all stored entries simultaneously. Applications include TLB (Translation Lookaside Buffer), cache tag memory, and network router lookup tables. RAM, ROM, and standard cache use address-based access.",
    references: [
      {
        label: "Wikipedia: Content-Addressable Memory",
        url: "https://en.wikipedia.org/wiki/Content-addressable_memory",
      },
    ],
  },
  {
    id: "todays-exam-22",
    topic: "todays-exam",
    prompt: "The basic unit of information in a computer is:",
    options: ["Bit", "Nibble", "Byte", "Word"],
    answerIndex: 0,
    explanation:
      "A bit (binary digit) is the most basic unit of information, representing either 0 or 1. Larger units: nibble = 4 bits, byte = 8 bits (addressable unit in most architectures), word = typically 2, 4, or 8 bytes depending on the processor.",
    references: [
      {
        label: "Wikipedia: Bit",
        url: "https://en.wikipedia.org/wiki/Bit",
      },
    ],
  },
  {
    id: "todays-exam-23",
    topic: "todays-exam",
    prompt:
      "In which addressing mode does the operand value form part of the instruction itself?",
    options: ["Immediate", "Register", "Direct", "Indirect"],
    answerIndex: 0,
    explanation:
      "In immediate addressing mode, the operand value is encoded directly within the instruction (e.g., MOV R1, #42 loads 42 into R1). No memory or register access is needed — the operand is fetched along with the instruction. This is the fastest mode but offers limited range. Register: operand in a register. Direct: address of operand in the instruction. Indirect: address of operand's address in the instruction.",
    references: [
      {
        label: "Wikipedia: Addressing Mode",
        url: "https://en.wikipedia.org/wiki/Addressing_mode",
      },
    ],
  },
  {
    id: "todays-exam-24",
    topic: "todays-exam",
    prompt:
      "A cache has a hit ratio of 95%. Cache access time is 5 ns, and main memory access time is 80 ns. The average memory access time (AMAT) is:",
    options: ["8.75 ns", "9 ns", "12 ns", "80 ns"],
    answerIndex: 1,
    explanation:
      "AMAT = Hit time + (Miss rate x Miss penalty). Given hit ratio = 95% = 0.95, so miss rate = 0.05. AMAT = 5 + 0.05 x 80 = 5 + 4 = 9 ns.",
    explanationLatex: "\\text{AMAT} = 5 + 0.05 \\times 80 = 9\\,\\text{ns}",
    references: [
      {
        label: "Wikipedia: Average Memory Access Time",
        url: "https://en.wikipedia.org/wiki/Cache_performance_measurement_and_metric",
      },
    ],
  },
  {
    id: "todays-exam-25",
    topic: "todays-exam",
    prompt:
      "Which addressing mode is used when the effective address of the operand is obtained by adding a constant value to the contents of a register?",
    options: [
      "Immediate addressing",
      "Direct addressing",
      "Indexed addressing",
      "Indirect addressing",
    ],
    answerIndex: 2,
    explanation:
      "Indexed addressing computes Effective Address = Base Register + Offset (constant). This is used for array access (base register holds array start, offset selects element), stack operations (frame pointer + offset for local variables), and struct field access. Example: LOAD R1, 100(R2) loads from address R2 + 100.",
    references: [
      {
        label: "Wikipedia: Addressing Mode",
        url: "https://en.wikipedia.org/wiki/Addressing_mode",
      },
    ],
  },
  {
    id: "todays-exam-26",
    topic: "todays-exam",
    prompt:
      "Which of the following correctly describes the CPU involvement during DMA transfer?",
    options: [
      "CPU transfers each word of data",
      "CPU polls the device continuously",
      "CPU initializes the DMA controller and is interrupted on completion",
      "CPU executes I/O instructions for every transfer",
    ],
    answerIndex: 2,
    explanation:
      "DMA (Direct Memory Access) allows devices to transfer data directly to/from memory without CPU intervention per word. The CPU initializes the DMA controller with source address, destination address, transfer count, and direction. The DMA controller handles the transfer using bus master cycles. When complete, the DMA controller sends an interrupt to notify the CPU.",
    references: [
      {
        label: "Wikipedia: Direct Memory Access",
        url: "https://en.wikipedia.org/wiki/Direct_memory_access",
      },
    ],
  },
  {
    id: "todays-exam-27",
    topic: "todays-exam",
    prompt:
      "A system uses a direct-mapped cache with 4096 bytes cache size and 16-byte blocks. The number of index bits required is:",
    options: ["6", "7", "8", "None of these"],
    answerIndex: 2,
    explanation:
      "Number of blocks = Cache size / Block size = 4096 / 16 = 256. Index bits = log2(256) = 8. The address is divided into: tag (remaining upper bits), index (8 bits, selects which cache line), and offset (4 bits, selects byte within block).",
    explanationLatex: "\\frac{4096}{16} = 256\\text{ blocks},\\quad \\log_2(256) = 8\\text{ index bits}",
    references: [
      {
        label: "Wikipedia: CPU Cache",
        url: "https://en.wikipedia.org/wiki/CPU_cache",
      },
    ],
  },
  {
    id: "todays-exam-28",
    topic: "todays-exam",
    prompt:
      "Which of the following is the fundamental building block used to design an arithmetic logic unit (ALU)?",
    options: ["Half adder", "Full adder", "Decoder", "Multiplexer"],
    answerIndex: 1,
    explanation:
      "The full adder is the fundamental building block of an ALU. It adds three bits (two operands + carry-in) producing a sum and carry-out. Full adders can be cascaded to add multi-bit numbers. A half adder only adds two bits (no carry-in), insufficient for multi-bit addition. Decoders and multiplexers handle instruction decoding and data selection, not arithmetic.",
    explanationLatex: "S = A \\oplus B \\oplus C_{\\text{in}},\\; C_{\\text{out}} = AB + C_{\\text{in}}(A \\oplus B)",
    references: [
      {
        label: "Wikipedia: Adder (Electronics)",
        url: "https://en.wikipedia.org/wiki/Adder_(electronics)",
      },
    ],
  },
  {
    id: "todays-exam-29",
    topic: "todays-exam",
    prompt:
      "Which of the following cannot be eliminated using instruction pipelining?",
    options: [
      "Structural hazards",
      "Data hazards",
      "Control hazards",
      "All of these",
    ],
    answerIndex: 3,
    explanation:
      "Instruction pipelining by itself does not eliminate any of the three hazard types — it can introduce them. Structural hazards (resource conflicts) require additional hardware. Data hazards (RAW, WAR, WAW dependencies) require forwarding/bypassing or stalling. Control hazards (branches) require branch prediction or delay slots. Pipelining increases throughput but the hazards remain as fundamental challenges.",
    references: [
      {
        label: "Wikipedia: Pipeline Hazard",
        url: "https://en.wikipedia.org/wiki/Hazard_(computer_architecture)",
      },
    ],
  },
  {
    id: "todays-exam-30",
    topic: "todays-exam",
    prompt:
      "Compared to RISC processors, CISC processors contain ________.",
    options: [
      "More transistor elements",
      "Larger instruction set and fewer registers",
      "More registers and smaller instruction set",
      "Both (a) and (b)",
    ],
    answerIndex: 3,
    explanation:
      "CISC processors differ from RISC: CISC has a large, complex instruction set with fewer registers and more transistors (complex decoding), variable instruction length, and many addressing modes. RISC has a small, simple instruction set with many registers (typically 32+), fixed instruction length, and a load-store architecture. Therefore, both statements (a) and (b) are true.",
    references: [
      {
        label: "Wikipedia: Complex Instruction Set Computer",
        url: "https://en.wikipedia.org/wiki/Complex_instruction_set_computer",
      },
    ],
  },
  {
    id: "todays-exam-31",
    topic: "todays-exam",
    prompt:
      "Which of the following SQL command(s) belong to the Data Manipulation Language (DML) category?\n\n1. TRUNCATE\n2. UPDATE\n3. DELETE\n4. DROP",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1, 3 and 4 only",
      "1, 2 and 4 only",
    ],
    answerIndex: 1,
    explanation:
      "DML (Data Manipulation Language) handles data within tables: SELECT, INSERT, UPDATE, DELETE. DDL (Data Definition Language) handles database structure: CREATE, ALTER, DROP, TRUNCATE, RENAME. Therefore, UPDATE (2) and DELETE (3) are DML. TRUNCATE (1) and DROP (4) are DDL.",
    references: [
      {
        label: "Wikipedia: Data Manipulation Language",
        url: "https://en.wikipedia.org/wiki/Data_manipulation_language",
      },
    ],
  },
  {
    id: "todays-exam-32",
    topic: "todays-exam",
    prompt:
      "Consider an E-R diagram with the following characteristics:\n\n* Entity A is a strong entity with a primary key\n* Entity B is a weak entity that depends on A for identification\n* The relationship between A and B is identifying one-to-many relationship\n* Neither A, B, nor the relationship has any additional attributes\n* All attributes are simple and single-valued\n\nWhat is the minimum number of relational tables required to represent this design in the relational model?",
    options: ["2", "3", "4", "5"],
    answerIndex: 0,
    explanation:
      "Minimum 2 tables are needed: one for strong entity A (with its primary key and attributes), and one for weak entity B (with its own attributes plus A's primary key as a foreign key, which is also part of B's composite primary key). No separate table is needed for the identifying relationship because the foreign key in B's table captures it.",
    references: [
      {
        label: "Wikipedia: Entity-Relationship Model",
        url: "https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model",
      },
    ],
  },
  {
    id: "todays-exam-33",
    topic: "todays-exam",
    prompt:
      "Consider the relation R(P, Q, R, S) with the set of functional dependencies:\nF = {P -> Q, Q -> R, R -> S}\n\nWhat is the highest normal form of the relation?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answerIndex: 1,
    explanation:
      "Candidate key is P (since P -> Q -> R -> S determines all attributes). With a single-attribute key, no partial dependency can exist -> at least 2NF. However, transitive dependencies exist: P -> Q -> R and P -> R -> S, so it is not in 3NF. Highest normal form = 2NF.",
    explanationLatex: "\\text{Candidate key: }P.\\quad P \\to Q,\\; Q \\to R,\\; R \\to S \\Rightarrow \\text{transitive} \\Rightarrow 2\\text{NF}",
    references: [
      {
        label: "Wikipedia: Database Normalization",
        url: "https://en.wikipedia.org/wiki/Database_normalization",
      },
    ],
  },
  {
    id: "todays-exam-34",
    topic: "todays-exam",
    prompt:
      "Which of the following statements is always true?",
    options: [
      "Every 3NF relation is in BCNF",
      "Every BCNF relation is in 3NF",
      "Every 2NF relation is in 3NF",
      "Every 1NF relation is in 2NF",
    ],
    answerIndex: 1,
    explanation:
      "The normal forms form a strict hierarchy: BCNF is a subset of 3NF, which is a subset of 2NF, which is a subset of 1NF. Therefore, every BCNF relation is automatically in 3NF. The reverse is not true: a 3NF relation may violate BCNF (e.g., when overlapping candidate keys create non-key determinants of prime attributes).",
    explanationLatex: "\\text{BCNF} \\subset \\text{3NF} \\subset \\text{2NF} \\subset \\text{1NF}",
    references: [
      {
        label: "Wikipedia: Boyce-Codd Normal Form",
        url: "https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form",
      },
    ],
  },
  {
    id: "todays-exam-35",
    topic: "todays-exam",
    prompt:
      'What is the meaning of the following SQL query?\n\n```sql\nSELECT name FROM student WHERE name LIKE \'a%\';\n```',
    options: [
      'List of student names that start with "a"',
      'List of student names whose second character is "a"',
      'List of student names that contain the substring "a"',
      "None of these",
    ],
    answerIndex: 0,
    explanation:
      "LIKE 'a%' uses pattern matching: '%' matches zero or more characters, '_' matches exactly one character. 'a%' means the string must start with 'a' followed by any sequence. Second character 'a' would be '_a%'. Contains 'a' would be '%a%'.",
    references: [
      {
        label: "Wikipedia: SQL LIKE Clause",
        url: "https://en.wikipedia.org/wiki/Where_(SQL)",
      },
    ],
  },
  {
    id: "todays-exam-36",
    topic: "todays-exam",
    prompt:
      "Which of the following SQL statements will change the structure of a table and cannot be rolled back once executed?\n\n1. TRUNCATE TABLE Student;\n2. DELETE FROM Student;\n3. DROP TABLE Student;\n4. (statement missing in original)",
    options: [
      "1 and 2 only",
      "3 only",
      "1, 3 and 4 only",
      "2 and 4 only",
    ],
    answerIndex: 2,
    explanation:
      "DDL (Data Definition Language) statements are auto-committed and cannot be rolled back in most databases (MySQL, PostgreSQL, SQL Server). TRUNCATE (1) removes all rows (DDL), DROP (3) removes the entire table (DDL) — both are irreversible. DELETE (2) is DML and can be rolled back within a transaction.",
    references: [
      {
        label: "Wikipedia: Data Definition Language",
        url: "https://en.wikipedia.org/wiki/Data_definition_language",
      },
    ],
  },
  {
    id: "todays-exam-37",
    topic: "todays-exam",
    prompt:
      "A B-tree of order 4 is used to store integer keys. Which of the following statements is/are TRUE?\n\n1. Each internal node can have at most 4 children\n2. Each node can store at most 3 keys\n3. Data records (keys) may be stored in both internal and leaf nodes\n4. Leaf nodes are necessarily linked to support sequential access",
    options: [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "All of these",
      "None of these",
    ],
    answerIndex: 0,
    explanation:
      "For a B-tree of order 4: (1) max children = 4, true; (2) max keys = m-1 = 3, true; (3) in a B-tree (not B+tree), data records are stored in all nodes, true; (4) leaf node linking is a B+tree feature, not B-tree, false. Therefore statements 1, 2, and 3 are true.",
    explanationLatex: "\\text{Order } m=4 \\Rightarrow \\text{max children}=4,\\; \\text{max keys}=3",
    references: [
      {
        label: "Wikipedia: B-Tree",
        url: "https://en.wikipedia.org/wiki/B-tree",
      },
    ],
  },
  {
    id: "todays-exam-38",
    topic: "todays-exam",
    prompt:
      "Consider the following two transactions with data items X and Y, both initialized to 0:\n\n**T1:**\nread(X);\nread(Y);\nif X = 0 then Y := Y + 2;\nwrite(Y);\n\n**T2:**\nread(Y);\nread(X);\nif Y = 0 then X := X + 2;\nwrite(X);\n\nAny non-serial interleaving of T1 and T2 during concurrent execution results in:",
    options: [
      "A serializable schedule",
      "A schedule that is not conflict-serializable",
      "A conflict-serializable schedule",
      "A schedule with no conflicting operations",
    ],
    answerIndex: 1,
    explanation:
      "Serial executions: T1;T2 gives (X=0, Y=2) because T2 reads Y=2 and doesn't modify X. T2;T1 gives (X=2, Y=0) because T1 reads X=2 and doesn't modify Y. In any non-serial interleaving, both T1 and T2 read the initial values (X=0, Y=0), so both execute the then-branch, producing (X=2, Y=2). This matches neither serial schedule, so every non-serial interleaving is not conflict-serializable.",
    explanationLatex: "\\text{Serial: }(0,2)\\text{ or }(2,0).\\; \\text{Non-serial: }(2,2) \\Rightarrow \\text{not conflict-serializable}",
    references: [
      {
        label: "Wikipedia: Conflict Serializability",
        url: "https://en.wikipedia.org/wiki/Serializability",
      },
    ],
  },
  {
    id: "todays-exam-39",
    topic: "todays-exam",
    prompt:
      "Which of the following statements about database triggers is/are TRUE?\n\n1. A trigger is automatically executed when a specified event occurs on a table\n2. A trigger can be activated by INSERT, UPDATE, or DELETE operations\n3. A trigger must be explicitly called using a SQL statement\n4. A trigger can be defined before or after a database event",
    options: [
      "1, 2 and 4 only",
      "2 and 4 only",
      "1, 2 and 3 only",
      "All of these",
    ],
    answerIndex: 0,
    explanation:
      "Triggers are stored procedures that automatically execute in response to specified events. Statements 1 and 2 are true: triggers fire automatically on INSERT, UPDATE, or DELETE. Statement 3 is false: triggers are automatic, never explicitly called. Statement 4 is true: triggers can be defined as BEFORE (execute prior to event, for validation) or AFTER (execute after event, for auditing).",
    references: [
      {
        label: "Wikipedia: Database Trigger",
        url: "https://en.wikipedia.org/wiki/Database_trigger",
      },
    ],
  },
  {
    id: "todays-exam-40",
    topic: "todays-exam",
    prompt:
      "Which of the following statements about the Two-Phase Locking (2PL) protocol is/are TRUE?\n\n1. A transaction must acquire all locks before releasing any lock\n2. 2PL guarantees conflict serializability\n3. 2PL can lead to deadlock\n4. 2PL guarantees freedom from starvation",
    options: [
      "2 and 3 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "All of these",
    ],
    answerIndex: 1,
    explanation:
      "2PL divides execution into a growing phase (acquire locks, no release) and a shrinking phase (release locks, no acquire). Statement 1 is true (growing phase acquires all locks first). Statement 2 is true (2PL guarantees conflict serializability). Statement 3 is true (2PL can deadlock as transactions wait for each other's locks). Statement 4 is false (2PL does not guarantee freedom from starvation).",
    explanationLatex: "\\text{2PL: Growing phase} \\to \\text{acquire only},\\; \\text{Shrinking phase} \\to \\text{release only}",
    references: [
      {
        label: "Wikipedia: Two-Phase Locking",
        url: "https://en.wikipedia.org/wiki/Two-phase_locking",
      },
    ],
  },
  {
    id: "todays-exam-41",
    topic: "todays-exam",
    prompt:
      "Which of the following computational models is specifically used to recognize regular languages?",
    options: [
      "Turing machine",
      "Pushdown automaton",
      "Linear-bounded automaton",
      "Finite automaton",
    ],
    answerIndex: 3,
    explanation:
      "Chomsky hierarchy: Type 3 (Regular) languages are recognized by Finite Automata (DFA/NFA). Type 2 (Context-Free) by PDAs. Type 1 (Context-Sensitive) by LBAs. Type 0 (Recursively Enumerable) by TMs. A Finite Automaton has finite memory (a finite set of states) and cannot count or match nested structures.",
    references: [
      {
        label: "Wikipedia: Finite-State Machine",
        url: "https://en.wikipedia.org/wiki/Finite-state_machine",
      },
    ],
  },
  {
    id: "todays-exam-42",
    topic: "todays-exam",
    prompt:
      "Consider the grammar\nS -> aSb | ab\nA -> aA | a\n\nThe above grammar is:",
    options: ["Regular", "Context Free", "Context Sensitive", "Type-0"],
    answerIndex: 1,
    explanation:
      "The language generated by S is {a^n b^n | n >= 1}, which is context-free but not regular. S produces matching pairs of a and b. Note that A is unreachable from S and does not affect the language. The grammar itself is a Context-Free Grammar (Type 2) with productions of the form A -> alpha.",
    explanationLatex: "S \\Rightarrow aSb \\Rightarrow a^2 S b^2 \\Rightarrow \\cdots \\Rightarrow a^n b^n,\\; n \\ge 1",
    references: [
      {
        label: "Wikipedia: Context-Free Grammar",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar",
      },
    ],
  },
  {
    id: "todays-exam-43",
    topic: "todays-exam",
    prompt:
      "Which of the following languages cannot be generated by a regular grammar?",
    options: [
      "The set of all binary strings that end with 1",
      "The set of all strings over {a,b} containing an even number of a's",
      "The set of all strings of the form a^m b^n, where m,n >= 0",
      "The set of all strings of the form a^n b^n, where n >= 1",
    ],
    answerIndex: 3,
    explanation:
      "L = {a^n b^n | n >= 1} requires counting and matching the number of a's and b's, which a finite automaton cannot do. Options (a), (b), and (c) are all regular. Proof via Pumping Lemma: assume pumping length p, take s = a^p b^p, pumping gives a^{p+k} b^p not in L.",
    explanationLatex: "L = \\{a^n b^n \\mid n \\ge 1\\} \\text{ requires unbounded counting } \\Rightarrow \\text{ not regular}",
    references: [
      {
        label: "Wikipedia: Regular Grammar",
        url: "https://en.wikipedia.org/wiki/Regular_grammar",
      },
    ],
  },
  {
    id: "todays-exam-44",
    topic: "todays-exam",
    prompt:
      "Which of the following model conversions does NOT have a general algorithm to produce an equivalent deterministic model?",
    options: [
      "Right-linear grammar -> Finite automaton",
      "Nondeterministic finite automaton -> Deterministic finite automaton",
      "Nondeterministic pushdown automaton -> Deterministic pushdown automaton",
      "Nondeterministic Turing machine -> Deterministic Turing machine",
    ],
    answerIndex: 2,
    explanation:
      "NPDA -> DPDA has no general algorithm because DPDAs are strictly less powerful than NPDAs. Languages like even-length palindromes {ww^R | w in {a,b}*} can be recognized by an NPDA but by no DPDA. Other conversions have known algorithms: right-linear grammar -> FA (direct NFA construction), NFA -> DFA (subset construction), NTM -> DTM (2-tape simulation).",
    explanationLatex: "\\text{NPDA} > \\text{DPDA} \\;\\;\\text{(nondeterminism adds genuine power to PDAs)}",
    references: [
      {
        label: "Wikipedia: Pushdown Automaton",
        url: "https://en.wikipedia.org/wiki/Pushdown_automaton",
      },
    ],
  },
  {
    id: "todays-exam-45",
    topic: "todays-exam",
    prompt:
      "Consider the grammar\nG = ({S}, {a,b}, P, S) with productions:\nS -> aSb | ab\n\nWhich of the following languages is generated by the grammar G?",
    options: [
      "{a^n b^n | n >= 0}",
      "{a^n b^n | n >= 1}",
      "{a^n b^m | n,m >= 1}",
      "{a^n b^{n+1} | n >= 1}",
    ],
    answerIndex: 1,
    explanation:
      "Each application of S -> aSb adds one a at the beginning and one b at the end. The base case S -> ab terminates with one pair. So L(G) = {a^n b^n | n >= 1}. Option (a) requires empty string (not generated). Option (c) allows unequal counts. Option (d) has one extra b.",
    explanationLatex: "S \\Rightarrow aSb \\Rightarrow a^2 S b^2 \\Rightarrow \\cdots \\Rightarrow a^n b^n,\\; n \\ge 1",
    references: [
      {
        label: "Wikipedia: Context-Free Grammar",
        url: "https://en.wikipedia.org/wiki/Context-free_grammar",
      },
    ],
  },
  {
    id: "todays-exam-46",
    topic: "todays-exam",
    prompt: "Subset Construction method refers to:",
    options: [
      "Conversion of NFA to DFA",
      "DFA minimization",
      "Eliminating Null references",
      "epsilon-NFA to NFA",
    ],
    answerIndex: 0,
    explanation:
      "Subset Construction (Powerset Construction) converts an NFA to an equivalent DFA. Each DFA state represents a set of NFA states. The DFA's start state is the epsilon-closure of the NFA's start state. A DFA state is accepting if its set contains an NFA accepting state. In the worst case, |Q_DFA| <= 2^{|Q_NFA|}.",
    explanationLatex: "\\text{DFA state} = \\text{set of NFA states},\\; |Q_{\\text{DFA}}| \\le 2^{|Q_{\\text{NFA}}|}",
    references: [
      {
        label: "Wikipedia: Powerset Construction",
        url: "https://en.wikipedia.org/wiki/Powerset_construction",
      },
    ],
  },
  {
    id: "todays-exam-47",
    topic: "todays-exam",
    prompt:
      "Which automaton allows multiple transitions for the same input symbol from a state?",
    options: ["DFA", "Moore Machine", "NFA", "Mealy Machine"],
    answerIndex: 2,
    explanation:
      "An NFA (Nondeterministic Finite Automaton) allows zero, one, or multiple transitions for the same input symbol from a state. This is nondeterminism: delta(q, a) can be a set of next states. A string is accepted if any path leads to an accepting state. DFA, Moore, and Mealy machines are all deterministic with exactly one transition per input symbol.",
    references: [
      {
        label: "Wikipedia: Nondeterministic Finite Automaton",
        url: "https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton",
      },
    ],
  },
  {
    id: "todays-exam-48",
    topic: "todays-exam",
    prompt:
      "Which of the following problems is undecidable?",
    options: [
      "Whether a DFA accepts at least one string",
      "Whether two DFAs accept the same language",
      "Whether a string belongs to a given context-free language",
      "Whether a Turing machine halts on a given input",
    ],
    answerIndex: 3,
    explanation:
      "The Halting problem (does a TM halt on a given input?) is undecidable — proven by Turing in 1936. The other problems are decidable: DFA emptiness (check if an accepting state is reachable), DFA equivalence (construct symmetric difference DFA and check emptiness), and CFG membership (CYK algorithm, O(n^3)).",
    explanationLatex: "\\text{Halting problem: undecidable. Others: decidable.}",
    references: [
      {
        label: "Wikipedia: Halting Problem",
        url: "https://en.wikipedia.org/wiki/Halting_problem",
      },
    ],
  },
  {
    id: "todays-exam-49",
    topic: "todays-exam",
    prompt:
      "A context-free grammar is said to be ambiguous if:",
    options: [
      "It contains more than one production for a non-terminal",
      "There exists a string in the language with multiple parse trees",
      "Contains left recursion",
      "It can generate the empty string",
    ],
    answerIndex: 1,
    explanation:
      "A CFG is ambiguous if at least one string in its language has more than one distinct parse tree (equivalently, multiple leftmost or rightmost derivations). Multiple productions per non-terminal is normal and necessary. Left recursion can be eliminated algorithmically. Generating the empty string does not imply ambiguity.",
    explanationLatex: "\\text{Ambiguous: }\\exists w \\in L(G)\\text{ with }\\ge 2\\text{ parse trees}",
    references: [
      {
        label: "Wikipedia: Ambiguous Grammar",
        url: "https://en.wikipedia.org/wiki/Ambiguous_grammar",
      },
    ],
  },
  {
    id: "todays-exam-50",
    topic: "todays-exam",
    prompt:
      "Which of the following operations is NOT guaranteed to preserve regularity of a language?",
    options: [
      "Inverse Homomorphism",
      "Intersection",
      "Kleene star",
      "None of these",
    ],
    answerIndex: 3,
    explanation:
      "Regular languages are closed under all three: (1) Inverse Homomorphism: if L is regular and h is a homomorphism, h^{-1}(L) is regular. (2) Intersection: construct the product DFA Q1 x Q2 with accepting states F1 x F2. (3) Kleene star: add epsilon-transitions from accepting states back to start. Since all three preserve regularity, the answer is 'None of these'.",
    explanationLatex: "\\text{Regular languages are closed under } h^{-1},\\; \\cap,\\; *",
    references: [
      {
        label: "Wikipedia: Regular Language Closure Properties",
        url: "https://en.wikipedia.org/wiki/Regular_language",
      },
    ],
  },
];
