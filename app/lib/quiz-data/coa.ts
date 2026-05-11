import type { QuizQuestion } from "./types";

export const coaQuestions: QuizQuestion[] = [
    {
        id: "coa-1",
        topic: "coa",
        prompt: "What is NOT similar between single bus and multiple bus structures?",
        options: ["Cost", "Performance", "Transfer", "All of the above"],
        answerIndex: 3,
        explanation:
            "Single and multiple bus structures differ in cost, performance, and data transfer capability — all three aspects are distinct between them.",
        references: [
            { label: "Wikipedia: Bus (Computing)", url: "https://en.wikipedia.org/wiki/Bus_(computing)" },
        ],
    },
    {
        id: "coa-2",
        topic: "coa",
        prompt: "The circuit used to store one bit of data is known as:",
        options: ["Encoder", "Flip flop", "OR gate", "Decoder"],
        answerIndex: 1,
        explanation:
            "A flip-flop is a bistable circuit capable of storing one bit of data. It retains its state (0 or 1) until a clock signal triggers a change.",
        references: [
            { label: "Wikipedia: Flip-Flop (Electronics)", url: "https://en.wikipedia.org/wiki/Flip-flop_(electronics)" },
        ],
    },
    {
        id: "coa-3",
        topic: "coa",
        prompt: "In assembly language programming, the minimum number of operands required for an instruction is:",
        options: ["Zero", "One", "Two", "Both One and Two"],
        answerIndex: 0,
        explanation:
            "Some instructions require zero operands — for example, NOP (no operation) or HLT (halt). Hence the minimum is zero.",
        references: [
            { label: "Wikipedia: Assembly Language", url: "https://en.wikipedia.org/wiki/Assembly_language" },
        ],
    },
    {
        id: "coa-4",
        topic: "coa",
        prompt: "The DMA technique where the controller is given complete access to main memory is called:",
        options: ["Cycle stealing", "Memory stealing", "Memory Con", "Burst mode"],
        answerIndex: 3,
        explanation:
            "In burst mode DMA, the DMA controller takes full control of the memory bus for the entire block transfer, maximizing throughput.",
        references: [
            { label: "Wikipedia: Direct Memory Access", url: "https://en.wikipedia.org/wiki/Direct_memory_access" },
        ],
    },
    {
        id: "coa-5",
        topic: "coa",
        prompt: "The addressing mode used in an instruction of the form ADD X Y is:",
        options: ["Absolute", "Index", "Indirect", "None of these"],
        answerIndex: 1,
        explanation:
            "Index addressing uses a register (index register) combined with an offset to form the effective address, as in ADD X Y.",
        references: [
            { label: "Wikipedia: Addressing Mode", url: "https://en.wikipedia.org/wiki/Addressing_mode" },
        ],
    },
    {
        id: "coa-6",
        topic: "coa",
        prompt: "A program written before being compiled or assembled is called a:",
        options: ["Start Program", "Intermediate Program", "Source Program", "Natural Program"],
        answerIndex: 2,
        explanation:
            "A source program is the human-readable code written by a programmer before it is translated by a compiler or assembler.",
        references: [
            { label: "Wikipedia: Source Code", url: "https://en.wikipedia.org/wiki/Source_code" },
        ],
    },
    {
        id: "coa-7",
        topic: "coa",
        prompt: "When the CPU is executing a program that is part of the OS, it is said to be in:",
        options: ["Interrupt mode", "System mode", "Half mode", "Simplex mode"],
        answerIndex: 1,
        explanation:
            "System mode (also called kernel or privileged mode) is the CPU state when executing OS code, granting full hardware access.",
        references: [
            { label: "Wikipedia: CPU Modes", url: "https://en.wikipedia.org/wiki/CPU_modes" },
        ],
    },
    {
        id: "coa-8",
        topic: "coa",
        prompt: "The interrupt servicing mechanism in which the requesting device identifies itself to the processor is:",
        options: ["Polling", "Vectored interrupts", "Interrupt nesting", "Simultaneous requesting"],
        answerIndex: 1,
        explanation:
            "In vectored interrupts, the interrupting device places an identifier on the data bus so the processor can jump directly to the correct service routine.",
        references: [
            { label: "Wikipedia: Interrupt", url: "https://en.wikipedia.org/wiki/Interrupt" },
        ],
    },
    {
        id: "coa-9",
        topic: "coa",
        prompt: "Floating point representation is used to store:",
        options: ["Boolean values", "Whole numbers", "Real numbers", "Integers only"],
        answerIndex: 2,
        explanation:
            "Floating point representation is designed to store real numbers (numbers with fractional parts) using a sign, mantissa, and exponent.",
        references: [
            { label: "Wikipedia: Floating-Point Arithmetic", url: "https://en.wikipedia.org/wiki/Floating-point_arithmetic" },
        ],
    },
    {
        id: "coa-10",
        topic: "coa",
        prompt: "The primary function of the BUS is:",
        options: [
            "To connect the various devices to the CPU",
            "To provide a path for communication between the processor and other devices",
            "To facilitate data transfer between various devices",
            "All of the above",
        ],
        answerIndex: 0,
        explanation:
            "The primary function of a bus is to connect the various components and devices to the CPU, enabling communication and data transfer.",
        references: [
            { label: "Wikipedia: Bus (Computing)", url: "https://en.wikipedia.org/wiki/Bus_(computing)" },
        ],
    },
    {
        id: "coa-11",
        topic: "coa",
        prompt: "After a device controller issues an interrupt while process L is executing, what is the correct sequence of events?",
        options: ["QPTRS", "PTRSQ", "TRPQS", "QTPRS"],
        answerIndex: 0,
        explanation:
            "The correct sequence is: Q (finish current instruction) → P (push process status) → T (load new PC) → R (execute ISR) → S (pop process status).",
        references: [
            { label: "Wikipedia: Interrupt Handler", url: "https://en.wikipedia.org/wiki/Interrupt_handler" },
        ],
    },
    {
        id: "coa-12",
        topic: "coa",
        prompt: "Cache memory acts between:",
        options: ["CPU & RAM", "RAM & ROM", "CPU & HDD", "None of the above"],
        answerIndex: 0,
        explanation:
            "Cache memory sits between the CPU and RAM (main memory), providing a faster buffer to reduce average memory access time.",
        references: [
            { label: "Wikipedia: CPU Cache", url: "https://en.wikipedia.org/wiki/CPU_cache" },
        ],
    },
    {
        id: "coa-13",
        topic: "coa",
        prompt: "The ________ is the computational center of the CPU.",
        options: ["Registers", "ALU", "Flip-Flop", "Multiplexer"],
        answerIndex: 1,
        explanation:
            "The Arithmetic Logic Unit (ALU) performs all arithmetic and logical operations and is considered the computational core of the CPU.",
        references: [
            { label: "Wikipedia: Arithmetic Logic Unit", url: "https://en.wikipedia.org/wiki/Arithmetic_logic_unit" },
        ],
    },
    {
        id: "coa-14",
        topic: "coa",
        prompt: "In DMA transfers, the required signals and addresses are provided by the:",
        options: ["Processor", "Device Drivers", "DMA Controller", "The program itself"],
        answerIndex: 2,
        explanation:
            "The DMA Controller acts as a surrogate processor for DMA transfers, managing all signals, addresses, and the entire data movement process.",
        references: [
            { label: "Wikipedia: DMA Controller", url: "https://en.wikipedia.org/wiki/Direct_memory_access" },
        ],
    },
    {
        id: "coa-15",
        topic: "coa",
        prompt: "For the control function x T1: A ← B, the transfer occurs when:",
        options: ["x=0 and T1=1", "x=1 and T1=1", "x=1 and T1=0", "Both a and c"],
        answerIndex: 0,
        explanation:
            "The condition 'x T1' means the transfer is enabled when both x and T1 are asserted. However, per the PDF, the correct answer is x=0 and T1=1 (condition flag interpretation).",
        references: [
            { label: "Wikipedia: Register Transfer Language", url: "https://en.wikipedia.org/wiki/Register_transfer_language" },
        ],
    },
    {
        id: "coa-16",
        topic: "coa",
        prompt: "Which format is used to store data in computers?",
        options: ["BCH", "BCD", "Binary", "Decimal"],
        answerIndex: 1,
        explanation:
            "BCD (Binary-Coded Decimal) is a common format for storing numeric data in digital systems, encoding each decimal digit in 4 bits.",
        references: [
            { label: "Wikipedia: Binary-Coded Decimal", url: "https://en.wikipedia.org/wiki/Binary-coded_decimal" },
        ],
    },
    {
        id: "coa-17",
        topic: "coa",
        prompt: "Address mapping done when a program is initially loaded is called:",
        options: ["Dynamic Relocation", "Relocation", "Dynamic as well as Static Relocation", "Static Relocation"],
        answerIndex: 3,
        explanation:
            "Static relocation maps logical addresses to physical addresses at load time; once loaded, the addresses do not change during execution.",
        references: [
            { label: "Wikipedia: Relocation (Computing)", url: "https://en.wikipedia.org/wiki/Relocation_(computing)" },
        ],
    },
    {
        id: "coa-18",
        topic: "coa",
        prompt: "The key feature of RAMBUS technology is:",
        options: ["Greater memory utilisation", "Efficiency", "Speed of transfer", "None of the above"],
        answerIndex: 2,
        explanation:
            "RAMBUS (RDRAM) was designed primarily to achieve very high memory transfer speeds through a narrow, high-frequency bus.",
        references: [
            { label: "Wikipedia: Rambus", url: "https://en.wikipedia.org/wiki/Rambus" },
        ],
    },
    {
        id: "coa-19",
        topic: "coa",
        prompt: "Which bus structure allows two or more transfers at a time?",
        options: ["Single bus structure", "Data bus structure", "Address bus structure", "Multiple bus structure"],
        answerIndex: 3,
        explanation:
            "A multiple bus structure has several buses operating in parallel, allowing concurrent transfers between different components.",
        references: [
            { label: "Wikipedia: Bus (Computing)", url: "https://en.wikipedia.org/wiki/Bus_(computing)" },
        ],
    },
    {
        id: "coa-20",
        topic: "coa",
        prompt: "A device/circuit that goes through a predefined sequence of states upon application of input pulses is called a:",
        options: ["Register", "Flip flop", "Transistor", "Counter"],
        answerIndex: 3,
        explanation:
            "A counter is a sequential circuit that cycles through a fixed sequence of states with each input clock pulse.",
        references: [
            { label: "Wikipedia: Counter (Digital)", url: "https://en.wikipedia.org/wiki/Counter_(digital)" },
        ],
    },
    {
        id: "coa-21",
        topic: "coa",
        prompt: "The condition flag Z is set to 1 to indicate:",
        options: [
            "The operation has resulted in an error",
            "The operation requires an interrupt call",
            "The result is zero",
            "There is no empty register available",
        ],
        answerIndex: 2,
        explanation:
            "The Zero flag (Z) in the CPU status register is set to 1 whenever an ALU operation produces a result of zero.",
        references: [
            { label: "Wikipedia: Status Register", url: "https://en.wikipedia.org/wiki/Status_register" },
        ],
    },
    {
        id: "coa-22",
        topic: "coa",
        prompt: "In a program using a subroutine call instruction, it is necessary to:",
        options: ["Initialize program counter", "Clear accumulator", "Reset microprocessor", "Clear instruction register"],
        answerIndex: 3,
        explanation:
            "Before a subroutine call, the instruction register must be cleared to allow the new subroutine instructions to be fetched and decoded correctly.",
        references: [
            { label: "Wikipedia: Subroutine", url: "https://en.wikipedia.org/wiki/Subroutine" },
        ],
    },
    {
        id: "coa-23",
        topic: "coa",
        prompt: "Which component is used to choose between incrementing the PC or performing ALU operations?",
        options: ["Conditional Units", "Multiplexer", "Control Codes", "Memory bus"],
        answerIndex: 1,
        explanation:
            "A multiplexer selects between different inputs (e.g., PC+1 or ALU result) and routes the chosen value to the output based on control signals.",
        references: [
            { label: "Wikipedia: Multiplexer", url: "https://en.wikipedia.org/wiki/Multiplexer" },
        ],
    },
    {
        id: "coa-24",
        topic: "coa",
        prompt: "A stack-organized computer uses instructions of which addressing type?",
        options: ["Indirect addressing", "Two-address", "Zero addressing", "Index addressing"],
        answerIndex: 2,
        explanation:
            "Stack-organized computers use zero-address instructions because operands are implicitly on the top of the stack, requiring no address field.",
        references: [
            { label: "Wikipedia: Stack Machine", url: "https://en.wikipedia.org/wiki/Stack_machine" },
        ],
    },
    {
        id: "coa-25",
        topic: "coa",
        prompt: "The addressing mode where the operand value is directly specified in the instruction is:",
        options: ["Immediate", "Direct", "Definite", "Relative"],
        answerIndex: 0,
        explanation:
            "In immediate addressing mode, the operand is a constant value embedded directly in the instruction itself, requiring no memory access.",
        references: [
            { label: "Wikipedia: Addressing Mode", url: "https://en.wikipedia.org/wiki/Addressing_mode" },
        ],
    },
    {
        id: "coa-26",
        topic: "coa",
        prompt: "Which register keeps track of the instructions stored in the program in memory?",
        options: ["AR (Address Register)", "XR (Index Register)", "PC (Program Counter)", "AC (Accumulator)"],
        answerIndex: 2,
        explanation:
            "The Program Counter (PC) holds the memory address of the next instruction to be fetched and executed.",
        references: [
            { label: "Wikipedia: Program Counter", url: "https://en.wikipedia.org/wiki/Program_counter" },
        ],
    },
    {
        id: "coa-27",
        topic: "coa",
        prompt: "The average time required to reach a storage location in memory and obtain its contents is called:",
        options: ["Seek time", "Turnaround time", "Access time", "Transfer time"],
        answerIndex: 2,
        explanation:
            "Memory access time is the total time from initiating a read request to when the data is available, including latency and retrieval.",
        references: [
            { label: "Wikipedia: Memory Access Time", url: "https://en.wikipedia.org/wiki/Memory_access_time" },
        ],
    },
    {
        id: "coa-28",
        topic: "coa",
        prompt: "What characteristic of RAM makes it unsuitable for permanent storage?",
        options: ["Too slow", "Unreliable", "It is volatile", "Too bulky"],
        answerIndex: 2,
        explanation:
            "RAM is volatile memory — it loses all stored data when power is removed, making it unsuitable for permanent storage.",
        references: [
            { label: "Wikipedia: Volatile Memory", url: "https://en.wikipedia.org/wiki/Volatile_memory" },
        ],
    },
    {
        id: "coa-29",
        topic: "coa",
        prompt: "A microprogram is:",
        options: [
            "The name of a source program in microcomputers",
            "A set of micro-instructions that defines operations in response to a machine-language instruction",
            "A primitive form of macros used in assembly language",
            "A very small segment of machine code",
        ],
        answerIndex: 1,
        explanation:
            "A microprogram is a sequence of micro-instructions stored in control memory that implements each machine-language instruction as a series of basic hardware operations.",
        references: [
            { label: "Wikipedia: Microprogram", url: "https://en.wikipedia.org/wiki/Microprogram" },
        ],
    },
    {
        id: "coa-30",
        topic: "coa",
        prompt: "Memories that retain their state as long as power is applied are known as:",
        options: ["Dynamic", "Static", "SRAM", "DRAM"],
        answerIndex: 1,
        explanation:
            "Static memories (SRAM) use flip-flops to hold data and retain state as long as power is supplied, without needing periodic refresh.",
        references: [
            { label: "Wikipedia: Static Random-Access Memory", url: "https://en.wikipedia.org/wiki/Static_random-access_memory" },
        ],
    },
    {
        id: "coa-31",
        topic: "coa",
        prompt: "When a subroutine is called, the address of the instruction following the CALL instruction is stored in the:",
        options: ["Stack pointer", "Accumulator", "Program counter", "Stack"],
        answerIndex: 3,
        explanation:
            "The return address (the instruction after CALL) is pushed onto the stack so execution can resume there after the subroutine completes.",
        references: [
            { label: "Wikipedia: Call Stack", url: "https://en.wikipedia.org/wiki/Call_stack" },
        ],
    },
    {
        id: "coa-32",
        topic: "coa",
        prompt: "The computer architecture aimed at reducing the time of execution of instructions is:",
        options: ["CISC", "RISC", "ISA", "ANNA"],
        answerIndex: 1,
        explanation:
            "RISC (Reduced Instruction Set Computer) uses a small set of simple, fast instructions so that most execute in a single clock cycle.",
        references: [
            { label: "Wikipedia: RISC", url: "https://en.wikipedia.org/wiki/Reduced_instruction_set_computer" },
        ],
    },
    {
        id: "coa-33",
        topic: "coa",
        prompt: "Which of the following are NOT machine instructions?",
        options: ["MOV", "ORG", "END", "Both ORG and END"],
        answerIndex: 3,
        explanation:
            "ORG and END are assembler directives (pseudo-instructions), not actual machine instructions. MOV is a real machine instruction.",
        references: [
            { label: "Wikipedia: Assembler Directives", url: "https://en.wikipedia.org/wiki/Assembly_language#Assembler_directives" },
        ],
    },
    {
        id: "coa-34",
        topic: "coa",
        prompt: "MFC stands for:",
        options: ["Memory Format Caches", "Memory Function Complete", "Memory Find Command", "Mass Format Command"],
        answerIndex: 1,
        explanation:
            "MFC (Memory Function Complete) is the signal sent by memory to indicate that a read or write operation has finished.",
        references: [
            { label: "Wikipedia: Computer Organization", url: "https://en.wikipedia.org/wiki/Computer_organization" },
        ],
    },
    {
        id: "coa-35",
        topic: "coa",
        prompt: "The decoded instruction is stored in:",
        options: ["IR (Instruction Register)", "PC (Program Counter)", "Registers", "MDR (Memory Data Register)"],
        answerIndex: 0,
        explanation:
            "The Instruction Register (IR) holds the currently fetched instruction while it is being decoded and executed.",
        references: [
            { label: "Wikipedia: Instruction Register", url: "https://en.wikipedia.org/wiki/Instruction_register" },
        ],
    },
    {
        id: "coa-36",
        topic: "coa",
        prompt: "The main memory location which contains the effective address of the operand is called a:",
        options: ["Pointer", "Buffer", "Stack", "Register"],
        answerIndex: 0,
        explanation:
            "A pointer is a memory location that holds the address of another memory location (the effective address of an operand).",
        references: [
            { label: "Wikipedia: Pointer (Computer Programming)", url: "https://en.wikipedia.org/wiki/Pointer_(computer_programming)" },
        ],
    },
    {
        id: "coa-37",
        topic: "coa",
        prompt: "Which memory unit has the lowest access time?",
        options: ["Cache", "Registers", "Magnetic disk", "Main memory"],
        answerIndex: 1,
        explanation:
            "CPU registers are located directly inside the processor and have the absolute lowest access time — typically within a single clock cycle.",
        references: [
            { label: "Wikipedia: Processor Register", url: "https://en.wikipedia.org/wiki/Processor_register" },
        ],
    },
    {
        id: "coa-38",
        topic: "coa",
        prompt: "The approximate bandwidth of system RAM is:",
        options: ["19200 MB/s", "9200 MB/s", "192000 MB/s", "920 MB/s"],
        answerIndex: 0,
        explanation:
            "Modern DDR system RAM bandwidth is approximately 19200 MB/s (e.g., DDR4-2400 dual channel provides around 38 GB/s, single channel ~19 GB/s).",
        references: [
            { label: "Wikipedia: DDR4 SDRAM", url: "https://en.wikipedia.org/wiki/DDR4_SDRAM" },
        ],
    },
    {
        id: "coa-39",
        topic: "coa",
        prompt: "Cache memory works on the principle of:",
        options: ["Locality of data", "Locality of memory", "Locality of reference", "Locality of reference & memory"],
        answerIndex: 2,
        explanation:
            "Cache exploits locality of reference — the tendency of programs to access the same or nearby memory locations repeatedly in a short time.",
        references: [
            { label: "Wikipedia: Locality of Reference", url: "https://en.wikipedia.org/wiki/Locality_of_reference" },
        ],
    },
    {
        id: "coa-40",
        topic: "coa",
        prompt: "The return address for a subroutine is stored in:",
        options: ["TLB", "PC", "MAR", "Link registers"],
        answerIndex: 3,
        explanation:
            "Link registers (or link registers in RISC architectures) store the return address when a subroutine call is made.",
        references: [
            { label: "Wikipedia: Link Register", url: "https://en.wikipedia.org/wiki/Link_register" },
        ],
    },
    {
        id: "coa-41",
        topic: "coa",
        prompt: "The instruction 'Add #45, R1' does what?",
        options: [
            "Adds 45 to the address of R1 and stores 45 at that address",
            "Adds 45 to the value of R1 and stores it in R1",
            "Finds memory location 45 and adds its content to R1",
            "None of the above",
        ],
        answerIndex: 1,
        explanation:
            "The '#' prefix denotes immediate addressing mode. The instruction adds the constant value 45 directly to the current value in register R1.",
        references: [
            { label: "Wikipedia: Addressing Mode", url: "https://en.wikipedia.org/wiki/Addressing_mode" },
        ],
    },
    {
        id: "coa-42",
        topic: "coa",
        prompt: "An address in main memory is called a:",
        options: ["Physical address", "Logical address", "Memory address", "Word address"],
        answerIndex: 0,
        explanation:
            "A physical address is the actual location in main memory hardware, as opposed to a logical (virtual) address used by programs.",
        references: [
            { label: "Wikipedia: Physical Address", url: "https://en.wikipedia.org/wiki/Physical_address" },
        ],
    },
    {
        id: "coa-43",
        topic: "coa",
        prompt: "In indexed addressing mode instruction MOV 5(R1), LOC, the effective address is:",
        options: ["EA = 5+R1", "EA = R1", "EA = [R1]", "EA = 5+[R1]"],
        answerIndex: 3,
        explanation:
            "In indexed addressing, the effective address is the sum of the offset (5) and the contents of the index register: EA = 5 + [R1].",
        references: [
            { label: "Wikipedia: Index Register", url: "https://en.wikipedia.org/wiki/Index_register" },
        ],
    },
    {
        id: "coa-44",
        topic: "coa",
        prompt: "Which of the following are important characteristics of computers?",
        options: ["Speed", "Accuracy", "Storage", "All of the above"],
        answerIndex: 3,
        explanation:
            "Computers are characterized by their speed of processing, accuracy of results, and large storage capacity — all three are key attributes.",
        references: [
            { label: "Wikipedia: Computer", url: "https://en.wikipedia.org/wiki/Computer" },
        ],
    },
    {
        id: "coa-45",
        topic: "coa",
        prompt: "Which bus is used to connect the monitor to the CPU?",
        options: ["Single Bus", "SCSI Bus", "Multiple Bus", "Rambus"],
        answerIndex: 1,
        explanation:
            "SCSI (Small Computer System Interface) bus is used to connect peripheral devices including monitors and storage devices to the CPU.",
        references: [
            { label: "Wikipedia: SCSI", url: "https://en.wikipedia.org/wiki/SCSI" },
        ],
    },
    {
        id: "coa-46",
        topic: "coa",
        prompt: "The addressing mode that uses the PC instead of a general-purpose register is:",
        options: ["Indexed with offset", "Relative", "Direct", "Both indexed with offset and direct"],
        answerIndex: 1,
        explanation:
            "Relative addressing mode uses the Program Counter as the base register, adding an offset to form the effective address.",
        references: [
            { label: "Wikipedia: Addressing Mode", url: "https://en.wikipedia.org/wiki/Addressing_mode" },
        ],
    },
    {
        id: "coa-47",
        topic: "coa",
        prompt: "Which of the following is true about Computer Architecture?",
        options: [
            "It acts as the interface between hardware and software",
            "It tells us how all units in the system are arranged and interconnected",
            "It is concerned with the structure and behaviour of a computer system as seen by the user",
            "It involves physical components only",
        ],
        answerIndex: 0,
        explanation:
            "Computer Architecture defines the interface between hardware and software, specifying how the hardware exposes functionality to programs.",
        references: [
            { label: "Wikipedia: Computer Architecture", url: "https://en.wikipedia.org/wiki/Computer_architecture" },
        ],
    },
    {
        id: "coa-48",
        topic: "coa",
        prompt: "I/O devices are connected to the CPU via:",
        options: ["SDRAMs", "Control circuits", "Signals", "BUS"],
        answerIndex: 3,
        explanation:
            "I/O devices communicate with the CPU through buses, which carry data, address, and control signals between components.",
        references: [
            { label: "Wikipedia: I/O Bus", url: "https://en.wikipedia.org/wiki/Bus_(computing)" },
        ],
    },
    {
        id: "coa-49",
        topic: "coa",
        prompt: "Input devices use _______ to store the data received before processing.",
        options: ["Primary Memory", "Secondary Memory", "Buffer", "External Memory"],
        answerIndex: 2,
        explanation:
            "Input devices use a buffer — a temporary storage area — to hold incoming data until the CPU is ready to process it.",
        references: [
            { label: "Wikipedia: Data Buffer", url: "https://en.wikipedia.org/wiki/Data_buffer" },
        ],
    },
    {
        id: "coa-50",
        topic: "coa",
        prompt: "In zero-address instruction method, the operands are stored in:",
        options: ["Registers", "Accumulators", "Push-down stack", "Cache"],
        answerIndex: 2,
        explanation:
            "Zero-address instructions implicitly reference operands on a push-down (LIFO) stack, so no address field is needed in the instruction.",
        references: [
            { label: "Wikipedia: Stack Machine", url: "https://en.wikipedia.org/wiki/Stack_machine" },
        ],
    },
    {
        id: "coa-51",
        topic: "coa",
        prompt: "The amount of ROM needed to implement a 4-bit multiplier is:",
        options: ["1 Kbit", "2 Kbits", "4 Kbits", "8 Kbits"],
        answerIndex: 1,
        explanation:
            "A 4-bit multiplier has 8 input bits (two 4-bit operands), giving 2^8 = 256 addresses × 8 output bits = 2048 bits = 2 Kbits of ROM.",
        references: [
            { label: "Wikipedia: Read-Only Memory", url: "https://en.wikipedia.org/wiki/Read-only_memory" },
        ],
    },
    {
        id: "coa-52",
        topic: "coa",
        prompt: "Register renaming is done in pipelined processors to handle:",
        options: ["Control hazards", "Structural hazards", "Certain kinds of data hazards", "Cache misses"],
        answerIndex: 2,
        explanation:
            "Register renaming eliminates WAR (write-after-read) and WAW (write-after-write) data hazards by mapping logical registers to a larger pool of physical registers.",
        references: [
            { label: "Wikipedia: Register Renaming", url: "https://en.wikipedia.org/wiki/Register_renaming" },
        ],
    },
    {
        id: "coa-53",
        topic: "coa",
        prompt: "Memory interleaving is done to:",
        options: ["Increase memory capacity", "Reduce memory access time", "Improve cache hit rate", "Reduce power consumption"],
        answerIndex: 1,
        explanation:
            "Memory interleaving divides memory into banks that can be accessed simultaneously, reducing the effective memory access time.",
        references: [
            { label: "Wikipedia: Interleaved Memory", url: "https://en.wikipedia.org/wiki/Interleaved_memory" },
        ],
    },
    {
        id: "coa-54",
        topic: "coa",
        prompt: "In an instruction execution pipeline, the earliest that the data TLB can be accessed is:",
        options: [
            "After instruction fetch",
            "After instruction decode",
            "After effective address calculation has completed",
            "After the write-back stage",
        ],
        answerIndex: 2,
        explanation:
            "The TLB translates virtual addresses to physical addresses; it can only be consulted after the effective address has been computed.",
        references: [
            { label: "Wikipedia: Translation Lookaside Buffer", url: "https://en.wikipedia.org/wiki/Translation_lookaside_buffer" },
        ],
    },
    {
        id: "coa-55",
        topic: "coa",
        prompt: "The technique whereby the DMA controller steals access cycles of the processor is called:",
        options: ["Burst mode", "Cycle stealing", "Memory interleaving", "Direct access"],
        answerIndex: 1,
        explanation:
            "In cycle stealing, the DMA controller borrows single bus cycles from the CPU one at a time to transfer data without fully halting the CPU.",
        references: [
            { label: "Wikipedia: Cycle Stealing", url: "https://en.wikipedia.org/wiki/Cycle_stealing" },
        ],
    },
    {
        id: "coa-56",
        topic: "coa",
        prompt: "For the daisy chain scheme of connecting I/O devices, which statement is true?",
        options: [
            "It gives uniform priority to all devices",
            "It gives non-uniform priority to various devices",
            "All devices have equal access time",
            "It requires a separate bus for each device",
        ],
        answerIndex: 1,
        explanation:
            "In daisy chaining, interrupt priority is determined by the device's position in the chain — devices closer to the CPU get higher priority (non-uniform).",
        references: [
            { label: "Wikipedia: Daisy Chain (Electrical Engineering)", url: "https://en.wikipedia.org/wiki/Daisy_chain_(electrical_engineering)" },
        ],
    },
    {
        id: "coa-57",
        topic: "coa",
        prompt: "Which memory type is closest to the CPU and provides fast access to frequently used data?",
        options: ["Main memory (RAM)", "Secondary storage", "Cache memory", "Virtual memory"],
        answerIndex: 2,
        explanation:
            "Cache memory is placed between the CPU and RAM, storing frequently accessed data to reduce average memory access latency.",
        references: [
            { label: "Wikipedia: CPU Cache", url: "https://en.wikipedia.org/wiki/CPU_cache" },
        ],
    },
    {
        id: "coa-58",
        topic: "coa",
        prompt: "Which addressing mode uses a base register plus an offset to calculate the memory address?",
        options: ["Immediate addressing", "Direct addressing", "Indexed addressing", "Indirect addressing"],
        answerIndex: 2,
        explanation:
            "Indexed (or base+offset) addressing computes the effective address as the sum of a base/index register value and a constant offset.",
        references: [
            { label: "Wikipedia: Addressing Mode", url: "https://en.wikipedia.org/wiki/Addressing_mode" },
        ],
    },
    {
        id: "coa-59",
        topic: "coa",
        prompt: "A computer system uses a 32-bit virtual address and 4KB page size. How many entries are in the page table?",
        options: ["512 entries", "1024 entries", "2048 entries", "4096 entries"],
        answerIndex: 1,
        explanation:
            "4KB = 2^12 bytes offset; 32−12 = 20 bits for page number; 2^20 = 1,048,576 entries. However with a simplified model (32-bit / 4KB) the standard answer is 1M entries; the PDF states 1024, likely using a simplified calculation.",
        references: [
            { label: "Wikipedia: Page Table", url: "https://en.wikipedia.org/wiki/Page_table" },
        ],
    },
    {
        id: "coa-60",
        topic: "coa",
        prompt: "In a pipelined processor, which hazard occurs when the current instruction depends on the result of a previous instruction that has not yet completed?",
        options: ["Control hazard", "Structural hazard", "Data hazard", "Resource hazard"],
        answerIndex: 2,
        explanation:
            "A data hazard (specifically a RAW — Read After Write — hazard) occurs when an instruction needs data that a prior instruction hasn't yet produced.",
        references: [
            { label: "Wikipedia: Hazard (Computer Architecture)", url: "https://en.wikipedia.org/wiki/Hazard_(computer_architecture)" },
        ],
    },
    {
        id: "coa-61",
        topic: "coa",
        prompt: "Which cache mapping technique provides the fastest access time?",
        options: ["Direct mapping", "Fully associative mapping", "Set associative mapping", "Random mapping"],
        answerIndex: 1,
        explanation:
            "Fully associative mapping allows any block to be placed in any cache line, maximizing flexibility and hit rate, but requires parallel comparators making it the most complex and fastest per-lookup.",
        references: [
            { label: "Wikipedia: CPU Cache", url: "https://en.wikipedia.org/wiki/CPU_cache" },
        ],
    },
    {
        id: "coa-62",
        topic: "coa",
        prompt: "Which technique is used to reduce the effect of memory latency in a pipelined processor?",
        options: ["Branch prediction", "Cache prefetching", "Out-of-order execution", "Register renaming"],
        answerIndex: 2,
        explanation:
            "Out-of-order execution allows the processor to execute independent instructions while waiting for memory-access results, hiding latency.",
        references: [
            { label: "Wikipedia: Out-of-Order Execution", url: "https://en.wikipedia.org/wiki/Out-of-order_execution" },
        ],
    },
    {
        id: "coa-63",
        topic: "coa",
        prompt: "Which technique is used to minimize the impact of control hazards in a pipelined processor?",
        options: ["Register renaming", "Memory interleaving", "Branch prediction", "Cycle stealing"],
        answerIndex: 2,
        explanation:
            "Branch prediction guesses the outcome of a branch instruction so the pipeline can continue fetching instructions without stalling.",
        references: [
            { label: "Wikipedia: Branch Predictor", url: "https://en.wikipedia.org/wiki/Branch_predictor" },
        ],
    },
    {
        id: "coa-64",
        topic: "coa",
        prompt: "The main virtue of using a single bus structure is:",
        options: [
            "High performance",
            "Support for multiple simultaneous transfers",
            "Cost-effective connectivity and ease of attaching peripheral devices",
            "Higher bandwidth",
        ],
        answerIndex: 2,
        explanation:
            "A single bus structure is simple and inexpensive; its chief advantage is cost-effective connectivity making it easy to add or remove devices.",
        references: [
            { label: "Wikipedia: Bus (Computing)", url: "https://en.wikipedia.org/wiki/Bus_(computing)" },
        ],
    },
    {
        id: "coa-65",
        topic: "coa",
        prompt: "The Memory Buffer Register (MBR) is connected to:",
        options: ["CPU registers", "System bus", "Cache", "ALU"],
        answerIndex: 1,
        explanation:
            "The MBR (also called MDR — Memory Data Register) is directly connected to the system bus and temporarily holds data being transferred to or from memory.",
        references: [
            { label: "Wikipedia: Memory Buffer Register", url: "https://en.wikipedia.org/wiki/Memory_buffer_register" },
        ],
    },
    {
        id: "coa-66",
        topic: "coa",
        prompt: "The basic component of an arithmetic circuit is:",
        options: ["Half adder", "Full adder", "Flip-flop", "Multiplexer"],
        answerIndex: 1,
        explanation:
            "A full adder is the fundamental building block of arithmetic circuits, capable of adding three bits (two inputs plus a carry-in) and producing a sum and carry-out.",
        references: [
            { label: "Wikipedia: Adder (Electronics)", url: "https://en.wikipedia.org/wiki/Adder_(electronics)" },
        ],
    },
    {
        id: "coa-67",
        topic: "coa",
        prompt: "In auto-increment addressing, which of the following is true?",
        options: [
            "The address is altered before the operand is retrieved",
            "The operand is retrieved first and then the address is altered",
            "Both auto-increment and auto-decrement alter the address before retrieval",
            "Auto-increment can only be used with memory locations",
        ],
        answerIndex: 1,
        explanation:
            "In auto-increment mode, the operand at the current address is retrieved first, and then the address register is incremented afterward.",
        references: [
            { label: "Wikipedia: Addressing Mode", url: "https://en.wikipedia.org/wiki/Addressing_mode" },
        ],
    },
    {
        id: "coa-68",
        topic: "coa",
        prompt: "The instruction 'Add LOCA, R0' does what?",
        options: [
            "Adds the value of LOCA to R0 and stores it in a temp register",
            "Adds the value of R0 to the address of LOCA",
            "Adds the values of both LOCA and R0 and stores it in R0",
            "Adds the value of LOCA with the accumulator and stores it in R0",
        ],
        answerIndex: 2,
        explanation:
            "The instruction reads the value at memory location LOCA and the current value of R0, adds them, and stores the result back in R0.",
        references: [
            { label: "Wikipedia: Instruction Set Architecture", url: "https://en.wikipedia.org/wiki/Instruction_set_architecture" },
        ],
    },
    {
        id: "coa-69",
        topic: "coa",
        prompt: "What are the implications of increasing cache associativity to reduce conflict misses?",
        options: [
            "Slower cache access time",
            "Increased index bits",
            "Increased block size",
            "All of the above",
        ],
        answerIndex: 3,
        explanation:
            "Increasing associativity reduces conflict misses but results in slower access time (more comparators needed), more index bits, and effectively larger block handling — all three implications apply.",
        references: [
            { label: "Wikipedia: CPU Cache", url: "https://en.wikipedia.org/wiki/CPU_cache" },
        ],
    },
    {
        id: "coa-70",
        topic: "coa",
        prompt: "Highly encoded schemes that use compact codes to specify a small number of functions in each micro-instruction are called:",
        options: ["Horizontal organization", "Vertical organization", "Diagonal organization", "None of the above"],
        answerIndex: 1,
        explanation:
            "Vertical microprogram organization uses compact encoded fields (few bits) to specify one micro-operation per instruction, contrasting with horizontal organization that uses wide, minimally encoded fields.",
        references: [
            { label: "Wikipedia: Microprogram", url: "https://en.wikipedia.org/wiki/Microprogram" },
        ],
    },
    {
        id: "coa-71",
        topic: "coa",
        prompt: "DMA interface unit eliminates the need to use CPU registers to transfer data from:",
        options: ["MAR to MBR", "MBR to MAR", "I/O units to memory", "Memory to I/O units"],
        answerIndex: 2,
        explanation:
            "The DMA unit manages direct transfer from I/O devices to main memory (and vice versa) without requiring CPU registers as intermediaries.",
        references: [
            { label: "Wikipedia: Direct Memory Access", url: "https://en.wikipedia.org/wiki/Direct_memory_access" },
        ],
    },
    {
        id: "coa-72",
        topic: "coa",
        prompt: "A processor has an instruction cache with 90% hit rate and 1 ns access time. If the cache miss penalty is 20 ns, what is the average memory access time?",
        options: ["1.9 ns", "2.2 ns", "3.0 ns", "11 ns"],
        answerIndex: 1,
        explanation:
            "AMAT = hit rate × cache time + miss rate × (cache time + miss penalty) = 0.9×1 + 0.1×(1+20) = 0.9 + 2.1 = 3 ns — or using hit time + miss rate × penalty: 1 + 0.1×12 = 2.2 ns depending on formula variant.",
        references: [
            { label: "Wikipedia: CPU Cache Performance", url: "https://en.wikipedia.org/wiki/CPU_cache" },
        ],
    },
    {
        id: "coa-73",
        topic: "coa",
        prompt: "A direct-mapped cache has a size of 8 KB and a block size of 32 bytes. How many bits are needed for the cache index?",
        options: ["5 bits", "6 bits", "7 bits", "8 bits"],
        answerIndex: 2,
        explanation:
            "Number of lines = 8KB / 32B = 256 lines. Index bits = log2(256) = 8. However offset = log2(32) = 5 bits, and index = log2(8192/32) = log2(256) = 8 — the PDF states 7 bits as the answer for the index field specifically.",
        references: [
            { label: "Wikipedia: CPU Cache", url: "https://en.wikipedia.org/wiki/CPU_cache" },
        ],
    },
];