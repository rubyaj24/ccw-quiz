import type { QuizQuestion } from "./types";

export const osQuestions: QuizQuestion[] = [
    {
        id: "os-1",
        topic: "os",
        prompt: "What does a CPU scheduler primarily decide?",
        options: [
            "Which process gets memory",
            "Which process gets CPU time next",
            "How files are encrypted",
            "How interrupts are generated",
        ],
        answerIndex: 1,
        explanation:
            "CPU scheduling selects the next runnable process/thread and balances fairness, throughput, and response time. Different algorithms optimize different goals.",
        references: [
            { label: "Wikipedia: Scheduling (Computing)", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" },
        ],
    },
    {
        id: "os-2",
        topic: "os",
        prompt: "Which condition is NOT one of Coffman’s deadlock conditions?",
        options: ["Mutual exclusion", "Hold and wait", "Preemption", "Circular wait"],
        answerIndex: 2,
        explanation:
            "Coffman conditions include mutual exclusion, hold-and-wait, no preemption, and circular wait. If preemption is allowed, one condition is broken and deadlock can be prevented.",
        references: [
            { label: "Wikipedia: Deadlock", url: "https://en.wikipedia.org/wiki/Deadlock" },
        ],
    },
    {
        id: "os-3",
        topic: "os",
        prompt: "Virtual memory mainly helps by:",
        options: [
            "Increasing CPU clock speed",
            "Allowing larger logical address space than physical RAM",
            "Removing context switches",
            "Eliminating page faults",
        ],
        answerIndex: 1,
        explanation:
            "Virtual memory gives each process a large logical address space and maps pages to physical RAM or disk. It improves isolation and memory utilization.",
        references: [
            { label: "Wikipedia: Virtual Memory", url: "https://en.wikipedia.org/wiki/Virtual_memory" },
        ],
    },
    {
        id: "os-4",
        topic: "os",
        prompt: "A context switch occurs when the OS:",
        options: [
            "Changes virtual memory page size",
            "Saves one process state and restores another",
            "Compiles a process",
            "Defragments disk sectors",
        ],
        answerIndex: 1,
        explanation:
            "During a context switch, CPU registers and scheduler state of the current task are saved, and another task's state is restored so execution can continue.",
        references: [
            { label: "Wikipedia: Context Switch", url: "https://en.wikipedia.org/wiki/Context_switch" },
        ],
    },
    {
        id: "os-5",
        topic: "os",
        prompt: "Which memory management issue is addressed by page replacement algorithms?",
        options: ["CPU starvation", "Disk fragmentation", "Page faults when RAM is full", "Thread deadlock"],
        answerIndex: 2,
        explanation:
            "When RAM is full and a new page must be loaded, a replacement algorithm chooses which existing page to evict, directly affecting page fault rate.",
        references: [
            { label: "Wikipedia: Page Replacement Algorithm", url: "https://en.wikipedia.org/wiki/Page_replacement_algorithm" },
        ],
    },
    {
        id: "os-6",
        topic: "os",
        prompt: "Round Robin scheduling is best known for:",
        options: ["Always minimizing turnaround time", "Time-slice based fairness", "No context switching", "Priority inversion prevention"],
        answerIndex: 1,
        explanation:
            "Round Robin gives each runnable process a fixed time quantum in cyclic order, improving fairness and responsiveness in time-sharing systems.",
        references: [
            { label: "Wikipedia: Round-robin Scheduling", url: "https://en.wikipedia.org/wiki/Round-robin_scheduling" },
        ],
    },
    {
        id: "os-7",
        topic: "os",
        prompt: "A process requires 18 ms of CPU time. With Round Robin scheduling and a time quantum of 5 ms, how many CPU bursts will it need?",
        options: ["3", "4", "5", "6"],
        answerIndex: 1,
        explanation:
            "Each time quantum gives 5 ms. 18 / 5 = 3.6, so the process needs 4 CPU bursts to complete execution.",
        references: [
            { label: "Round Robin Scheduling", url: "https://en.wikipedia.org/wiki/Round-robin_scheduling" },
        ],
    },
    {
        id: "os-8",
        topic: "os",
        prompt: "If a page size is 8 KB, how many pages are required for a process of size 40 KB?",
        options: ["4", "5", "6", "8"],
        answerIndex: 1,
        explanation:
            "Number of pages = Process size / Page size = 40 KB / 8 KB = 5 pages.",
        references: [
            { label: "Paging", url: "https://en.wikipedia.org/wiki/Paging" },
        ],
    },
    {
        id: "os-9",
        topic: "os",
        prompt: "In FCFS scheduling, the average waiting time is generally:",
        options: [
            "Minimum",
            "Maximum",
            "Depends on arrival order",
            "Always zero",
        ],
        answerIndex: 2,
        explanation:
            "FCFS does not reorder processes. Waiting time depends heavily on arrival order and may suffer from the convoy effect.",
        references: [
            { label: "FCFS Scheduling", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)#First-come,_first-served" },
        ],
    },
    {
        id: "os-10",
        topic: "os",
        prompt: "Which disk scheduling algorithm always services the nearest request first?",
        options: ["FCFS", "SCAN", "LOOK", "SSTF"],
        answerIndex: 3,
        explanation:
            "Shortest Seek Time First (SSTF) selects the pending request closest to the current head position, minimizing seek time.",
        references: [
            { label: "Disk Scheduling", url: "https://en.wikipedia.org/wiki/Disk_scheduling" },
        ],
    },
    {
        id: "os-num-1",
        topic: "os",
        prompt: "A process requires 20 ms of CPU time. With Round Robin scheduling and a time quantum of 4 ms, how many time slices are needed?",
        options: ["4", "5", "6", "8"],
        answerIndex: 1,
        explanation:
            "Number of slices = ceil(20 / 4) = 5 time slices.",
        references: [
            { label: "Round Robin Scheduling", url: "https://en.wikipedia.org/wiki/Round-robin_scheduling" },
        ],
    },
    {
        id: "os-num-2",
        topic: "os",
        prompt: "If page size is 2 KB and a process size is 10 KB, how many pages are required?",
        options: ["4", "5", "6", "8"],
        answerIndex: 1,
        explanation:
            "Number of pages = 10 KB / 2 KB = 5 pages.",
        references: [
            { label: "Paging", url: "https://en.wikipedia.org/wiki/Paging" },
        ],
    },
    {
        id: "os-num-3",
        topic: "os",
        prompt: "A logical address space of 32 bits with page size 4 KB uses how many bits for offset?",
        options: ["10", "12", "16", "20"],
        answerIndex: 1,
        explanation:
            "4 KB = 4096 bytes = 2^12, so offset requires 12 bits.",
        references: [
            { label: "Logical Addressing", url: "https://en.wikipedia.org/wiki/Virtual_memory" },
        ],
    },
    {
        id: "os-num-4",
        topic: "os",
        prompt: "If a disk head is at position 50 and the request is at position 90, what is the seek distance?",
        options: ["40", "50", "90", "140"],
        answerIndex: 0,
        explanation:
            "Seek distance = |90 - 50| = 40.",
        references: [
            { label: "Disk Scheduling", url: "https://en.wikipedia.org/wiki/Disk_scheduling" },
        ],
    },
    {
        id: "os-num-5",
        topic: "os",
        prompt: "In FCFS scheduling, if a process arrives last among 5 processes, its waiting time will be:",
        options: ["Minimum", "Zero", "Maximum", "Average"],
        answerIndex: 2,
        explanation:
            "In FCFS, processes are served in arrival order. The last arriving process waits for all others.",
        references: [
            { label: "FCFS Scheduling", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)#First-come,_first-served" },
        ],
    },
    {
        id: "os-num-6",
        topic: "os",
        prompt: "A system has 8 GB RAM and page size 4 KB. How many page frames are available?",
        options: ["2^20", "2^21", "2^22", "2^23"],
        answerIndex: 1,
        explanation:
            "8 GB = 2^33 bytes. Page frames = 2^33 / 2^12 = 2^21.",
        references: [
            { label: "Page Frame", url: "https://en.wikipedia.org/wiki/Page_frame" },
        ],
    },
    {
        id: "os-num-7",
        topic: "os",
        prompt: "If time quantum is very large in Round Robin scheduling, the algorithm behaves like:",
        options: ["SJF", "Priority Scheduling", "FCFS", "Multilevel Queue"],
        answerIndex: 2,
        explanation:
            "When time quantum is very large, each process finishes in one slice, behaving like FCFS.",
        references: [
            { label: "Round Robin Scheduling", url: "https://en.wikipedia.org/wiki/Round-robin_scheduling" },
        ],
    },
    {
        id: "os-num-8",
        topic: "os",
        prompt: "If a page fault occurs, which storage is accessed?",
        options: ["CPU cache", "RAM", "Disk", "Register"],
        answerIndex: 2,
        explanation:
            "A page fault means the page is not in RAM and must be fetched from disk.",
        references: [
            { label: "Page Fault", url: "https://en.wikipedia.org/wiki/Page_fault" },
        ],
    },
    {
        id: "os-num-9",
        topic: "os",
        prompt: "Which scheduling algorithm minimizes average waiting time theoretically?",
        options: ["FCFS", "SJF", "Round Robin", "Priority"],
        answerIndex: 1,
        explanation:
            "Shortest Job First minimizes average waiting time if burst times are known.",
        references: [
            { label: "Shortest Job First", url: "https://en.wikipedia.org/wiki/Shortest_job_next" },
        ],
    },
    {
        id: "os-num-10",
        topic: "os",
        prompt: "If a process needs 9 ms CPU time and quantum is 3 ms, how many context switches occur?",
        options: ["2", "3", "4", "5"],
        answerIndex: 0,
        explanation:
            "Process executes in 3 slices. Context switches occur after each slice except last: 3 - 1 = 2 switches.",
        references: [
            { label: "Context Switch", url: "https://en.wikipedia.org/wiki/Context_switch" },
        ],
    },
    {
        id: "os-num-11",
        topic: "os",
        prompt: "Which memory allocation technique suffers from external fragmentation?",
        options: ["Paging", "Segmentation", "Virtual Memory", "Swapping"],
        answerIndex: 1,
        explanation:
            "Segmentation allocates variable-sized blocks, leading to external fragmentation.",
        references: [
            { label: "Segmentation", url: "https://en.wikipedia.org/wiki/Memory_segmentation" },
        ],
    },
    {
        id: "os-num-12",
        topic: "os",
        prompt: "If there are n processes, how many maximum wait-for edges can exist in a wait-for graph?",
        options: ["n", "n²", "n(n-1)", "2n"],
        answerIndex: 2,
        explanation:
            "Each process can wait for (n-1) others. Maximum edges = n(n-1).",
        references: [
            { label: "Wait-for Graph", url: "https://en.wikipedia.org/wiki/Wait-for_graph" },
        ],
    },
    {
        id: "os-num-13",
        topic: "os",
        prompt: "In paging, internal fragmentation occurs because:",
        options: [
            "Pages are variable size",
            "Processes are too large",
            "Last page may not be fully used",
            "Disk is slow",
        ],
        answerIndex: 2,
        explanation:
            "The last page of a process may not be completely filled, causing unused space inside the page.",
        references: [
            { label: "Internal Fragmentation", url: "https://en.wikipedia.org/wiki/Fragmentation_(computing)" },
        ],
    },
    {
        id: "os-num-14",
        topic: "os",
        prompt: "A system uses LRU page replacement. Which page is replaced?",
        options: [
            "Most recently used",
            "Least recently used",
            "First loaded",
            "Largest page",
        ],
        answerIndex: 1,
        explanation:
            "LRU replaces the page that has not been used for the longest time.",
        references: [
            { label: "LRU Algorithm", url: "https://en.wikipedia.org/wiki/Page_replacement_algorithm#Least_recently_used_(LRU)" },
        ],
    },
    {
        id: "os-num-15",
        topic: "os",
        prompt: "Deadlock avoidance requires prior knowledge of:",
        options: [
            "CPU speed",
            "Memory size",
            "Maximum resource requirement",
            "Disk latency",
        ],
        answerIndex: 2,
        explanation:
            "Algorithms like Banker's need to know maximum resource demands in advance.",
        references: [
            { label: "Banker's Algorithm", url: "https://en.wikipedia.org/wiki/Banker%27s_algorithm" },
        ],
    },
    {
        id: "os-num-26",
        topic: "os",
        prompt: "A process has a CPU burst time of 24 ms. If the time quantum is 6 ms, how many times will the process be scheduled in Round Robin?",
        options: ["3", "4", "5", "6"],
        answerIndex: 1,
        explanation:
            "Number of schedules = 24 / 6 = 4 time quanta.",
        references: [
            { label: "Round Robin Scheduling", url: "https://en.wikipedia.org/wiki/Round-robin_scheduling" },
        ],
    },
    {
        id: "os-num-27",
        topic: "os",
        prompt: "If page size is 1 KB and logical address is 2048, what is the page number?",
        options: ["1", "2", "3", "4"],
        answerIndex: 1,
        explanation:
            "Page number = Logical address / Page size = 2048 / 1024 = 2.",
        references: [
            { label: "Paging", url: "https://en.wikipedia.org/wiki/Paging" },
        ],
    },
    {
        id: "os-num-28",
        topic: "os",
        prompt: "A disk head is at track 120 and moves to track 30. What is the total head movement?",
        options: ["60", "90", "120", "150"],
        answerIndex: 1,
        explanation:
            "Total head movement = |120 - 30| = 90 tracks.",
        references: [
            { label: "Disk Scheduling", url: "https://en.wikipedia.org/wiki/Disk_scheduling" },
        ],
    },
    {
        id: "os-num-29",
        topic: "os",
        prompt: "In SJF scheduling, if all processes arrive at the same time, the waiting time of the shortest job is:",
        options: ["Maximum", "Minimum", "Average", "Zero"],
        answerIndex: 3,
        explanation:
            "The shortest job executes first, so it does not wait.",
        references: [
            { label: "Shortest Job First", url: "https://en.wikipedia.org/wiki/Shortest_job_next" },
        ],
    },
    {
        id: "os-num-30",
        topic: "os",
        prompt: "If a system has 16 MB RAM and page size is 4 KB, how many pages can be stored in memory?",
        options: ["2048", "4096", "8192", "16384"],
        answerIndex: 1,
        explanation:
            "16 MB = 2^24 bytes, page size = 2^12 bytes -> pages = 2^12 = 4096.",
        references: [
            { label: "Page Frame", url: "https://en.wikipedia.org/wiki/Page_frame" },
        ],
    },
    {
        id: "os-num-31",
        topic: "os",
        prompt: "Which CPU scheduling algorithm may lead to the convoy effect?",
        options: ["SJF", "FCFS", "Round Robin", "Priority"],
        answerIndex: 1,
        explanation:
            "FCFS can cause long processes to delay shorter ones, creating the convoy effect.",
        references: [
            { label: "Convoy Effect", url: "https://en.wikipedia.org/wiki/Convoy_effect" },
        ],
    },
    {
        id: "os-num-32",
        topic: "os",
        prompt: "If a page fault rate increases, system performance generally:",
        options: ["Improves", "Remains same", "Degrades", "Becomes unpredictable"],
        answerIndex: 2,
        explanation:
            "Higher page fault rate increases disk I/O, slowing down execution.",
        references: [
            { label: "Page Fault", url: "https://en.wikipedia.org/wiki/Page_fault" },
        ],
    },
    {
        id: "os-num-33",
        topic: "os",
        prompt: "A process needs 15 ms CPU time. With time quantum 4 ms, how many context switches occur?",
        options: ["2", "3", "4", "5"],
        answerIndex: 1,
        explanation:
            "Execution slices = ceil(15 / 4) = 4. Context switches = 4 - 1 = 3.",
        references: [
            { label: "Context Switch", url: "https://en.wikipedia.org/wiki/Context_switch" },
        ],
    },
    {
        id: "os-num-34",
        topic: "os",
        prompt: "Which page replacement algorithm replaces the page that will not be used for the longest future duration?",
        options: ["LRU", "FIFO", "Optimal", "Clock"],
        answerIndex: 2,
        explanation:
            "The Optimal algorithm uses future knowledge to minimize page faults.",
        references: [
            { label: "Optimal Page Replacement", url: "https://en.wikipedia.org/wiki/Page_replacement_algorithm#Optimal_page_replacement" },
        ],
    },
    {
        id: "os-num-35",
        topic: "os",
        prompt: "If there are 5 processes and each holds one resource while requesting another, which deadlock condition is satisfied?",
        options: ["Mutual exclusion", "Hold and wait", "Circular wait", "Preemption"],
        answerIndex: 1,
        explanation:
            "Holding one resource while waiting for another satisfies the hold-and-wait condition.",
        references: [
            { label: "Deadlock Conditions", url: "https://en.wikipedia.org/wiki/Deadlock" },
        ],
    },
    {
        id: "os-num-36",
        topic: "os",
        prompt: "In paging, which table stores the mapping between logical and physical addresses?",
        options: ["Segment table", "Frame table", "Page table", "TLB"],
        answerIndex: 2,
        explanation:
            "Page tables map virtual page numbers to physical frame numbers.",
        references: [
            { label: "Page Table", url: "https://en.wikipedia.org/wiki/Page_table" },
        ],
    },
    {
        id: "os-num-37",
        topic: "os",
        prompt: "Which scheduling algorithm gives equal CPU share to all processes?",
        options: ["FCFS", "SJF", "Round Robin", "Priority"],
        answerIndex: 2,
        explanation:
            "Round Robin assigns equal time quanta cyclically to all runnable processes.",
        references: [
            { label: "Round Robin Scheduling", url: "https://en.wikipedia.org/wiki/Round-robin_scheduling" },
        ],
    },
    {
        id: "os-num-38",
        topic: "os",
        prompt: "If the offset field of a logical address is 10 bits, what is the page size?",
        options: ["512 B", "1 KB", "2 KB", "4 KB"],
        answerIndex: 1,
        explanation:
            "Page size = 2^offset = 2^10 = 1024 bytes = 1 KB.",
        references: [
            { label: "Paging Basics", url: "https://en.wikipedia.org/wiki/Paging" },
        ],
    },
    {
        id: "os-num-39",
        topic: "os",
        prompt: "Thrashing occurs when:",
        options: [
            "CPU is idle",
            "Too many page faults occur",
            "Disk scheduling is inefficient",
            "Deadlock happens",
        ],
        answerIndex: 1,
        explanation:
            "Thrashing happens when the system spends more time handling page faults than executing processes.",
        references: [
            { label: "Thrashing", url: "https://en.wikipedia.org/wiki/Thrashing_(computer_science)" },
        ],
    },
    {
        id: "os-num-40",
        topic: "os",
        prompt: "If a process has priority 1 (highest) and another has priority 5 (lowest), which executes first?",
        options: [
            "Priority 5",
            "Priority 1",
            "Both simultaneously",
            "Depends on burst time",
        ],
        answerIndex: 1,
        explanation:
            "In priority scheduling, lower numerical value usually indicates higher priority.",
        references: [
            { label: "Priority Scheduling", url: "https://en.wikipedia.org/wiki/Priority_scheduling" },
        ],
    },
    {
        id: "os-num-51",
        topic: "os",
        prompt: "A process requires 30 ms CPU time with time quantum 7 ms. How many CPU bursts are required in Round Robin?",
        options: ["3", "4", "5", "6"],
        answerIndex: 2,
        explanation: "30 / 7 = 4.28, rounded up to 5 CPU bursts.",
        references: [{ label: "Round Robin Scheduling", url: "https://en.wikipedia.org/wiki/Round-robin_scheduling" }],
    },
    {
        id: "os-num-52",
        topic: "os",
        prompt: "If page size is 16 KB, how many bits are required for offset?",
        options: ["10", "12", "14", "16"],
        answerIndex: 2,
        explanation: "16 KB = 2^14 bytes, so offset needs 14 bits.",
        references: [{ label: "Paging", url: "https://en.wikipedia.org/wiki/Paging" }],
    },
    {
        id: "os-num-53",
        topic: "os",
        prompt: "A system with 32-bit logical address and page size 4 KB uses how many bits for page number?",
        options: ["18", "20", "22", "24"],
        answerIndex: 1,
        explanation: "Offset = 12 bits. Page number bits = 32 − 12 = 20.",
        references: [{ label: "Logical Address", url: "https://en.wikipedia.org/wiki/Virtual_memory" }],
    },
    {
        id: "os-num-54",
        topic: "os",
        prompt: "If disk head moves from track 180 to 40, what is the seek time distance?",
        options: ["120", "140", "160", "220"],
        answerIndex: 1,
        explanation: "|180 − 40| = 140 tracks.",
        references: [{ label: "Disk Scheduling", url: "https://en.wikipedia.org/wiki/Disk_scheduling" }],
    },
    {
        id: "os-num-55",
        topic: "os",
        prompt: "Which scheduling algorithm minimizes response time in time-sharing systems?",
        options: ["FCFS", "SJF", "Round Robin", "Priority"],
        answerIndex: 2,
        explanation: "Round Robin provides fast response by time slicing.",
        references: [{ label: "CPU Scheduling", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" }],
    },
    {
        id: "os-num-56",
        topic: "os",
        prompt: "If a process generates 8 page faults per second and each page fault takes 20 ms, how much time per second is wasted?",
        options: ["80 ms", "120 ms", "160 ms", "200 ms"],
        answerIndex: 2,
        explanation: "8 × 20 ms = 160 ms wasted per second.",
        references: [{ label: "Page Fault", url: "https://en.wikipedia.org/wiki/Page_fault" }],
    },
    {
        id: "os-num-57",
        topic: "os",
        prompt: "A deadlock-free system is one where:",
        options: [
            "Deadlock never occurs",
            "Deadlock is detected",
            "Deadlock is avoided by resource ordering",
            "Deadlock is ignored"
        ],
        answerIndex: 0,
        explanation: "A deadlock-free system guarantees that deadlock can never occur — through prevention or avoidance. Option (C) describes one specific avoidance method, not the defining property.",
        references: [{ label: "Deadlock Prevention", url: "https://en.wikipedia.org/wiki/Deadlock" }],
    },
    {
        id: "os-num-58",
        topic: "os",
        prompt: "Which page replacement algorithm is easiest to implement but may suffer from Belady’s anomaly?",
        options: ["LRU", "FIFO", "Optimal", "Clock"],
        answerIndex: 1,
        explanation: "FIFO is simple but can exhibit Belady’s anomaly.",
        references: [{ label: "Belady’s Anomaly", url: "https://en.wikipedia.org/wiki/Belady%27s_anomaly" }],
    },
    {
        id: "os-num-59",
        topic: "os",
        prompt: "If a system has 64 GB RAM and page size is 8 KB, how many frames exist?",
        options: ["2^20", "2^21", "2^22", "2^23"],
        answerIndex: 3,
        explanation: "64 GB = 2^36 bytes, page size = 2^13 bytes → frames = 2^23.",
        references: [{ label: "Page Frame", url: "https://en.wikipedia.org/wiki/Page_frame" }],
    },
    {
        id: "os-num-60",
        topic: "os",
        prompt: "Which scheduling algorithm can cause starvation?",
        options: ["FCFS", "SJF", "Round Robin", "FCFS with aging"],
        answerIndex: 1,
        explanation: "SJF may starve long processes if short jobs keep arriving.",
        references: [{ label: "Starvation", url: "https://en.wikipedia.org/wiki/Starvation_(computer_science)" }],
    },
    {
        id: "os-num-61",
        topic: "os",
        prompt: "If the working set of a process exceeds available frames, the system may enter:",
        options: ["Deadlock", "Thrashing", "Starvation", "Context switching"],
        answerIndex: 1,
        explanation: "Excessive page faults due to insufficient frames lead to thrashing.",
        references: [{ label: "Thrashing", url: "https://en.wikipedia.org/wiki/Thrashing_(computer_science)" }],
    },
    {
        id: "os-num-62",
        topic: "os",
        prompt: "Which CPU scheduling metric measures the time from submission to completion?",
        options: ["Waiting time", "Response time", "Turnaround time", "Burst time"],
        answerIndex: 2,
        explanation: "Turnaround time = completion time − arrival time.",
        references: [{ label: "Scheduling Metrics", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" }],
    },
    {
        id: "os-num-63",
        topic: "os",
        prompt: "If a page table entry contains frame number and valid bit, what does valid bit indicate?",
        options: [
            "Page is modified",
            "Page is in memory",
            "Page is locked",
            "Page is shared"
        ],
        answerIndex: 1,
        explanation: "Valid bit indicates whether the page is currently present in physical memory.",
        references: [{ label: "Page Table Entry", url: "https://en.wikipedia.org/wiki/Page_table" }],
    },
    {
        id: "os-num-64",
        topic: "os",
        prompt: "Which disk scheduling algorithm moves the head in one direction and reverses at the end?",
        options: ["FCFS", "SSTF", "SCAN", "LOOK"],
        answerIndex: 2,
        explanation: "SCAN (elevator) moves in one direction and reverses at disk ends.",
        references: [{ label: "SCAN Algorithm", url: "https://en.wikipedia.org/wiki/Disk_scheduling" }],
    },
    {
        id: "os-num-65",
        topic: "os",
        prompt: "If context switching time increases, CPU utilization generally:",
        options: ["Improves", "Decreases", "Remains same", "Becomes zero"],
        answerIndex: 1,
        explanation: "More time spent switching reduces time available for execution.",
        references: [{ label: "Context Switch", url: "https://en.wikipedia.org/wiki/Context_switch" }],
    },
    {
        id: "os-num-66",
        topic: "os",
        prompt: "A process holding no resources but waiting for one violates which deadlock condition?",
        options: ["Hold and wait", "Mutual exclusion", "Circular wait", "No preemption"],
        answerIndex: 0,
        explanation: "Hold-and-wait requires holding one resource while waiting for another.",
        references: [{ label: "Deadlock Conditions", url: "https://en.wikipedia.org/wiki/Deadlock" }],
    },
    {
        id: "os-num-67",
        topic: "os",
        prompt: "Which memory management technique eliminates external fragmentation?",
        options: ["Segmentation", "Paging", "Swapping", "Contiguous allocation"],
        answerIndex: 1,
        explanation: "Paging uses fixed-size frames, eliminating external fragmentation.",
        references: [{ label: "Fragmentation", url: "https://en.wikipedia.org/wiki/Fragmentation_(computing)" }],
    },
    {
        id: "os-num-68",
        topic: "os",
        prompt: "If arrival times are equal, which scheduling reduces average waiting time?",
        options: ["FCFS", "Round Robin", "SJF", "Priority"],
        answerIndex: 2,
        explanation: "Shortest Job First minimizes average waiting time.",
        references: [{ label: "SJF Scheduling", url: "https://en.wikipedia.org/wiki/Shortest_job_next" }],
    },
    {
        id: "os-num-69",
        topic: "os",
        prompt: "Which replacement algorithm approximates LRU using a reference bit?",
        options: ["FIFO", "Optimal", "Clock", "LFU"],
        answerIndex: 2,
        explanation: "Clock algorithm is an efficient approximation of LRU.",
        references: [{ label: "Clock Algorithm", url: "https://en.wikipedia.org/wiki/Page_replacement_algorithm#Clock" }],
    },
    {
        id: "os-num-70",
        topic: "os",
        prompt: "If CPU burst time increases, turnaround time generally:",
        options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
        answerIndex: 1,
        explanation: "Higher CPU burst time increases execution duration.",
        references: [{ label: "CPU Scheduling", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" }],
    },
    {
        id: "os-num-71",
        topic: "os",
        prompt: "Which scheduling algorithm uses aging to prevent starvation?",
        options: ["FCFS", "SJF", "Priority", "Round Robin"],
        answerIndex: 2,
        explanation: "Priority scheduling with aging gradually increases priority of waiting processes.",
        references: [{ label: "Aging", url: "https://en.wikipedia.org/wiki/Priority_scheduling" }],
    },
    {
        id: "os-num-72",
        topic: "os",
        prompt: "If a system supports multiprogramming degree of 1, it behaves like:",
        options: ["Batch system", "Multiprocessor", "Uniprogramming system", "Time-sharing system"],
        answerIndex: 2,
        explanation: "Degree 1 means only one process in memory at a time.",
        references: [{ label: "Multiprogramming", url: "https://en.wikipedia.org/wiki/Multiprogramming" }],
    },
    {
        id: "os-num-73",
        topic: "os",
        prompt: "Which metric is most affected by time quantum in Round Robin?",
        options: ["Turnaround time", "Waiting time", "Response time", "Throughput"],
        answerIndex: 2,
        explanation: "Smaller quantum improves response time but increases overhead.",
        references: [{ label: "Round Robin Scheduling", url: "https://en.wikipedia.org/wiki/Round-robin_scheduling" }],
    },
    {
        id: "os-num-74",
        topic: "os",
        prompt: "If page fault service time is very high, system performance:",
        options: ["Improves", "Degrades", "Remains constant", "Becomes CPU-bound"],
        answerIndex: 1,
        explanation: "High service time increases waiting and reduces throughput.",
        references: [{ label: "Page Fault", url: "https://en.wikipedia.org/wiki/Page_fault" }],
    },
    {
        id: "os-num-75",
        topic: "os",
        prompt: "Which scheduling algorithm is non-preemptive?",
        options: ["SJF (non-preemptive)", "Round Robin", "Preemptive Priority", "SRTF"],
        answerIndex: 0,
        explanation: "Non-preemptive SJF runs a job to completion once started.",
        references: [{ label: "Non-preemptive Scheduling", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" }],
    },
    {
        id: "os-num-76",
        topic: "os",
        prompt: "If logical address = page number + offset, which part decides frame selection?",
        options: ["Offset", "Page number", "Segment number", "Base register"],
        answerIndex: 1,
        explanation: "Page number indexes the page table to select frame.",
        references: [{ label: "Paging", url: "https://en.wikipedia.org/wiki/Paging" }],
    },
    {
        id: "os-num-77",
        topic: "os",
        prompt: "Which scheduling algorithm favors short processes but may cause starvation?",
        options: ["FCFS", "SJF", "Round Robin", "Multilevel Queue"],
        answerIndex: 1,
        explanation: "SJF prioritizes short jobs and may starve longer ones.",
        references: [{ label: "SJF Scheduling", url: "https://en.wikipedia.org/wiki/Shortest_job_next" }],
    },
    {
        id: "os-num-78",
        topic: "os",
        prompt: "If a process makes frequent I/O requests, it is classified as:",
        options: ["CPU-bound", "I/O-bound", "Memory-bound", "Deadlocked"],
        answerIndex: 1,
        explanation: "I/O-bound processes spend more time waiting for I/O than CPU.",
        references: [{ label: "CPU-bound vs I/O-bound", url: "https://en.wikipedia.org/wiki/I/O_bound" }],
    },
    {
        id: "os-num-79",
        topic: "os",
        prompt: "Which page replacement algorithm is optimal but impractical?",
        options: ["LRU", "FIFO", "Optimal", "Clock"],
        answerIndex: 2,
        explanation: "Optimal requires future knowledge of page references.",
        references: [{ label: "Optimal Replacement", url: "https://en.wikipedia.org/wiki/Page_replacement_algorithm" }],
    },
    {
        id: "os-num-80",
        topic: "os",
        prompt: "If CPU utilization is low and page fault rate is high, system is likely:",
        options: ["Overloaded", "Thrashing", "Underutilized", "Deadlocked"],
        answerIndex: 1,
        explanation: "High page faults reduce CPU utilization, indicating thrashing.",
        references: [{ label: "Thrashing", url: "https://en.wikipedia.org/wiki/Thrashing_(computer_science)" }],
    },
    {
        id: "os-num-81",
        topic: "os",
        prompt: "Which memory allocation strategy uses best fit?",
        options: ["Paging", "Segmentation", "Contiguous allocation", "Virtual memory"],
        answerIndex: 2,
        explanation: "Best fit chooses the smallest sufficient contiguous block.",
        references: [{ label: "Best Fit Allocation", url: "https://en.wikipedia.org/wiki/Memory_management" }],
    },
    {
        id: "os-num-82",
        topic: "os",
        prompt: "If average waiting time increases, user experience generally:",
        options: ["Improves", "Degrades", "Remains same", "Becomes deterministic"],
        answerIndex: 1,
        explanation: "Longer waiting reduces responsiveness.",
        references: [{ label: "Scheduling Metrics", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" }],
    },
    {
        id: "os-num-83",
        topic: "os",
        prompt: "Which OS component handles interrupts?",
        options: ["File system", "Scheduler", "Kernel", "Shell"],
        answerIndex: 2,
        explanation: "The kernel handles hardware and software interrupts.",
        references: [{ label: "Kernel", url: "https://en.wikipedia.org/wiki/Kernel_(operating_system)" }],
    },
    {
        id: "os-num-84",
        topic: "os",
        prompt: "If page size increases, internal fragmentation generally:",
        options: ["Decreases", "Increases", "Remains same", "Becomes zero"],
        answerIndex: 1,
        explanation: "Larger pages cause more unused space in last page.",
        references: [{ label: "Internal Fragmentation", url: "https://en.wikipedia.org/wiki/Fragmentation_(computing)" }],
    },
    {
        id: "os-num-85",
        topic: "os",
        prompt: "Which scheduling algorithm is best for real-time systems?",
        options: ["FCFS", "SJF", "Priority", "FIFO"],
        answerIndex: 2,
        explanation: "Priority scheduling ensures time-critical tasks execute first.",
        references: [{ label: "Real-Time Scheduling", url: "https://en.wikipedia.org/wiki/Real-time_operating_system" }],
    },
    {
        id: "os-num-86",
        topic: "os",
        prompt: "Which resource allocation strategy prevents circular wait?",
        options: [
            "Request all at once",
            "Resource ordering",
            "Preemption",
            "Banker’s algorithm"
        ],
        answerIndex: 1,
        explanation: "Ordering resources breaks circular wait condition.",
        references: [{ label: "Deadlock Prevention", url: "https://en.wikipedia.org/wiki/Deadlock" }],
    },
    {
        id: "os-num-87",
        topic: "os",
        prompt: "Which scheduling metric measures first response delay?",
        options: ["Waiting time", "Turnaround time", "Response time", "CPU burst"],
        answerIndex: 2,
        explanation: "Response time measures delay until first CPU allocation.",
        references: [{ label: "Scheduling Metrics", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" }],
    },
    {
        id: "os-num-88",
        topic: "os",
        prompt: "Which memory technique allows non-contiguous allocation?",
        options: ["Contiguous allocation", "Paging", "Best fit", "First fit"],
        answerIndex: 1,
        explanation: "Paging breaks memory into fixed-size blocks enabling non-contiguous allocation.",
        references: [{ label: "Paging", url: "https://en.wikipedia.org/wiki/Paging" }],
    },
    {
        id: "os-num-89",
        topic: "os",
        prompt: "Which algorithm may cause starvation without aging?",
        options: ["Round Robin", "FCFS", "Priority Scheduling", "SCAN"],
        answerIndex: 2,
        explanation: "Low-priority processes may never execute without aging.",
        references: [{ label: "Starvation", url: "https://en.wikipedia.org/wiki/Starvation_(computer_science)" }],
    },
    {
        id: "os-num-90",
        topic: "os",
        prompt: "If arrival rate of processes exceeds completion rate, the ready queue will:",
        options: ["Shrink", "Remain same", "Grow indefinitely", "Disappear"],
        answerIndex: 2,
        explanation: "Processes accumulate faster than they finish.",
        references: [{ label: "CPU Scheduling", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" }],
    },
    {
        id: "os-num-91",
        topic: "os",
        prompt: "Which disk scheduling algorithm avoids starvation?",
        options: ["SSTF", "FCFS", "SCAN", "FIFO"],
        answerIndex: 2,
        explanation: "SCAN services requests in order of head movement, preventing starvation.",
        references: [{ label: "SCAN Scheduling", url: "https://en.wikipedia.org/wiki/Disk_scheduling" }],
    },
    {
        id: "os-num-92",
        topic: "os",
        prompt: "Which OS structure provides fast system calls?",
        options: ["Monolithic kernel", "Microkernel", "Hybrid kernel", "Shell"],
        answerIndex: 0,
        explanation: "Monolithic kernels avoid inter-process messaging overhead.",
        references: [{ label: "Kernel Architecture", url: "https://en.wikipedia.org/wiki/Kernel_(operating_system)" }],
    },
    {
        id: "os-num-93",
        topic: "os",
        prompt: "If number of processes increases, context switch overhead generally:",
        options: ["Decreases", "Increases", "Remains same", "Becomes zero"],
        answerIndex: 1,
        explanation: "More processes cause more frequent switching.",
        references: [{ label: "Context Switch", url: "https://en.wikipedia.org/wiki/Context_switch" }],
    },
    {
        id: "os-num-94",
        topic: "os",
        prompt: "Which metric measures jobs completed per unit time?",
        options: ["Throughput", "Waiting time", "Response time", "Turnaround time"],
        answerIndex: 0,
        explanation: "Throughput measures completed processes per time unit.",
        references: [{ label: "Throughput", url: "https://en.wikipedia.org/wiki/Throughput" }],
    },
    {
        id: "os-num-95",
        topic: "os",
        prompt: "Which OS technique improves memory utilization by loading pages on demand?",
        options: ["Swapping", "Paging", "Demand paging", "Segmentation"],
        answerIndex: 2,
        explanation: "Demand paging loads pages only when referenced.",
        references: [{ label: "Demand Paging", url: "https://en.wikipedia.org/wiki/Demand_paging" }],
    },
    {
        id: "os-num-96",
        topic: "os",
        prompt: "Which scheduling algorithm is best for batch systems?",
        options: ["Round Robin", "FCFS", "Preemptive Priority", "Multilevel Feedback"],
        answerIndex: 1,
        explanation: "FCFS is simple and suitable for batch workloads.",
        references: [{ label: "Batch Scheduling", url: "https://en.wikipedia.org/wiki/Batch_processing" }],
    },
    {
        id: "os-num-97",
        topic: "os",
        prompt: "If a page is frequently accessed, which replacement algorithm keeps it longer?",
        options: ["FIFO", "LRU", "Optimal", "Random"],
        answerIndex: 1,
        explanation: "LRU retains recently used pages.",
        references: [{ label: "LRU Algorithm", url: "https://en.wikipedia.org/wiki/Page_replacement_algorithm" }],
    },
    {
        id: "os-num-98",
        topic: "os",
        prompt: "Which memory unit is fastest?",
        options: ["Disk", "RAM", "Cache", "Virtual memory"],
        answerIndex: 2,
        explanation: "Cache memory is closest to CPU and fastest.",
        references: [{ label: "Memory Hierarchy", url: "https://en.wikipedia.org/wiki/Memory_hierarchy" }],
    },
    {
        id: "os-num-99",
        topic: "os",
        prompt: "Which OS service ensures mutual exclusion?",
        options: ["Semaphore", "Paging", "Scheduling", "Swapping"],
        answerIndex: 0,
        explanation: "Semaphores control access to critical sections.",
        references: [{ label: "Semaphore", url: "https://en.wikipedia.org/wiki/Semaphore_(programming)" }],
    },
    {
        id: "os-num-100",
        topic: "os",
        prompt: "Which condition must hold for deadlock to occur?",
        options: ["Preemption", "Mutual exclusion", "Resource sharing", "Paging"],
        answerIndex: 1,
        explanation: "Mutual exclusion is one of the four necessary deadlock conditions.",
        references: [{ label: "Deadlock Conditions", url: "https://en.wikipedia.org/wiki/Deadlock" }],
    },
    {
    id: "os-extra-1",
    topic: "os",
    prompt: "What else is a command interpreter called?",
    options: ["Prompt", "Kernel", "Shell", "Command"],
    answerIndex: 2,
    explanation:
        "The shell acts as the command interpreter between the user and the operating system.",
    references: [
        {
            label: "Wikipedia: Shell",
            url: "https://en.wikipedia.org/wiki/Shell_(computing)",
        },
    ],
},

{
    id: "os-extra-2",
    topic: "os",
    prompt: "Which of the following memory units can the processor access most rapidly?",
    options: ["Main memory", "Virtual memory", "Cache memory", "ROM"],
    answerIndex: 2,
    explanation:
        "Cache memory is placed close to the CPU and provides very fast access to frequently used data.",
    references: [
        {
            label: "Wikipedia: CPU Cache",
            url: "https://en.wikipedia.org/wiki/CPU_cache",
        },
    ],
},

{
    id: "os-extra-3",
    topic: "os",
    prompt: "A file control block contains information about:",
    options: [
        "File ownership",
        "File permissions",
        "Location of file contents",
        "All of the above",
    ],
    answerIndex: 3,
    explanation:
        "A file control block stores metadata such as ownership, permissions, and disk location details.",
    references: [
        {
            label: "Wikipedia: File Control Block",
            url: "https://en.wikipedia.org/wiki/File_control_block",
        },
    ],
},

{
    id: "os-extra-4",
    topic: "os",
    prompt: "Which of the following is not an operating system?",
    options: ["Windows", "Linux", "Oracle", "DOS"],
    answerIndex: 2,
    explanation:
        "Oracle is primarily a database management company/product, not an operating system.",
    references: [
        {
            label: "Wikipedia: Oracle Corporation",
            url: "https://en.wikipedia.org/wiki/Oracle_Corporation",
        },
    ],
},

{
    id: "os-extra-5",
    topic: "os",
    prompt: "The child process completes execution while the parent continues executing. The child process becomes:",
    options: ["Orphan", "Zombie", "Body", "Dead"],
    answerIndex: 1,
    explanation:
        "A zombie process has completed execution but still has an entry in the process table until the parent collects its exit status.",
    references: [
        {
            label: "Wikipedia: Zombie Process",
            url: "https://en.wikipedia.org/wiki/Zombie_process",
        },
    ],
},

{
    id: "os-extra-6",
    topic: "os",
    prompt: "Which of the following is not shared between threads of the same process?",
    options: ["Global variables", "Stack", "Address space", "Heap"],
    answerIndex: 1,
    explanation:
        "Each thread maintains its own stack, while address space, global variables, and heap are shared.",
    references: [
        {
            label: "Wikipedia: Thread",
            url: "https://en.wikipedia.org/wiki/Thread_(computing)",
        },
    ],
},

{
    id: "os-extra-7",
    topic: "os",
    prompt: "What is POST in computer systems?",
    options: [
        "Power on self test",
        "Power on start test",
        "Power off self test",
        "Power off start test",
    ],
    answerIndex: 0,
    explanation:
        "POST is a diagnostic testing sequence executed during system startup.",
    references: [
        {
            label: "Wikipedia: Power-on self-test",
            url: "https://en.wikipedia.org/wiki/Power-on_self-test",
        },
    ],
},

{
    id: "os-extra-8",
    topic: "os",
    prompt: "Logical memory is broken into blocks of the same size called:",
    options: ["Frames", "Pages", "Backing store", "Segments"],
    answerIndex: 1,
    explanation:
        "Paging divides logical memory into fixed-size blocks called pages.",
    references: [
        {
            label: "Wikipedia: Paging",
            url: "https://en.wikipedia.org/wiki/Paging",
        },
    ],
},

{
    id: "os-extra-9",
    topic: "os",
    prompt: "What is a Translation Lookaside Buffer miss?",
    options: [
        "The page is found in cache",
        "The page number is not found in the TLB",
        "The disk head misses the sector",
        "The page is corrupted",
    ],
    answerIndex: 1,
    explanation:
        "A TLB miss occurs when the required virtual-to-physical mapping is not present in the Translation Lookaside Buffer.",
    references: [
        {
            label: "Wikipedia: Translation Lookaside Buffer",
            url: "https://en.wikipedia.org/wiki/Translation_lookaside_buffer",
        },
    ],
},

{
    id: "os-extra-10",
    topic: "os",
    prompt: "The degree of multiprogramming refers to:",
    options: [
        "Processes executed per unit time",
        "Processes in the ready queue",
        "Processes in the I/O queue",
        "Processes in memory",
    ],
    answerIndex: 3,
    explanation:
        "Degree of multiprogramming is the number of processes kept in main memory simultaneously.",
    references: [
        {
            label: "Wikipedia: Multiprogramming",
            url: "https://en.wikipedia.org/wiki/Multiprogramming",
        },
    ],
},

{
    id: "os-extra-11",
    topic: "os",
    prompt: "What is the maximum filename length in DOS?",
    options: ["8", "16", "32", "255"],
    answerIndex: 0,
    explanation:
        "Classic DOS follows the 8.3 filename convention, allowing 8-character filenames.",
    references: [
        {
            label: "Wikipedia: 8.3 Filename",
            url: "https://en.wikipedia.org/wiki/8.3_filename",
        },
    ],
},

{
    id: "os-extra-12",
    topic: "os",
    prompt: "Which scheduler selects processes to be brought into the ready queue?",
    options: [
        "Short-term scheduler",
        "Long-term scheduler",
        "Medium-term scheduler",
        "Dispatcher",
    ],
    answerIndex: 1,
    explanation:
        "The long-term scheduler controls the degree of multiprogramming by selecting processes to admit into memory.",
    references: [
        {
            label: "Wikipedia: Long-term Scheduler",
            url: "https://en.wikipedia.org/wiki/Scheduling_(computing)",
        },
    ],
},

{
    id: "os-extra-13",
    topic: "os",
    prompt: "Dirty bit in memory management indicates that:",
    options: [
        "A page is corrupted",
        "A page has been modified after loading",
        "A page is invalid",
        "A page is locked",
    ],
    answerIndex: 1,
    explanation:
        "Dirty bit shows whether a page has been modified and must be written back to disk before replacement.",
    references: [
        {
            label: "Wikipedia: Dirty Bit",
            url: "https://en.wikipedia.org/wiki/Dirty_bit",
        },
    ],
},

{
    id: "os-extra-14",
    topic: "os",
    prompt: "What is bootstrapping commonly called?",
    options: ["Cold boot", "Warm boot", "Hybrid boot", "Soft reset"],
    answerIndex: 0,
    explanation:
        "Bootstrapping or cold boot refers to starting the computer from a powered-off state.",
    references: [
        {
            label: "Wikipedia: Booting",
            url: "https://en.wikipedia.org/wiki/Booting",
        },
    ],
},

{
    id: "os-extra-15",
    topic: "os",
    prompt: "Which OS queue stores processes waiting to execute?",
    options: ["Job queue", "Ready queue", "Execution queue", "Device queue"],
    answerIndex: 1,
    explanation:
        "Processes that are ready to run and waiting for CPU allocation are kept in the ready queue.",
    references: [
        {
            label: "Wikipedia: Ready Queue",
            url: "https://en.wikipedia.org/wiki/Scheduling_(computing)",
        },
    ],
},

    // CCW 2024 PYQs —— OS (questions ccw24-1 to ccw24-10)
    {
        id: "ccw24-1",
        topic: "os",
        prompt: "In a timesharing OS, when the time slot assigned to a process is completed, the process switches to which state?",
        options: ["Suspended state", "Terminated state", "Ready state", "Blocked state"],
        answerIndex: 2,
        explanation:
            "When a time quantum expires, the running process is preempted and moved back to the Ready queue to wait for its next turn on the CPU.",
        references: [
            { label: "Wikipedia: Preemption (Computing)", url: "https://en.wikipedia.org/wiki/Preemption_(computing)" },
        ],
    },
    {
        id: "ccw24-2",
        topic: "os",
        prompt: "The dirty bit is used to indicate which of the following?",
        options: [
            "A page fault has occurred",
            "A page has corrupted data",
            "A page has been modified after being loaded into cache",
            "An illegal access of page",
        ],
        answerIndex: 2,
        explanation:
            "The dirty bit (modified bit) is set when a page or cache block has been written to, indicating it must be written back to memory before eviction.",
        references: [
            { label: "Wikipedia: Dirty Bit", url: "https://en.wikipedia.org/wiki/Dirty_bit" },
        ],
    },
    {
        id: "ccw24-3",
        topic: "os",
        prompt: "What is a short-term scheduler?",
        options: [
            "It selects which process has to be brought into the ready queue",
            "It selects which process has to be executed next and allocates CPU",
            "It selects which process to remove from memory by swapping",
            "None of the mentioned",
        ],
        answerIndex: 1,
        explanation:
            "The short-term (CPU) scheduler picks the next process from the ready queue and dispatches it to the CPU for execution.",
        references: [
            { label: "Wikipedia: Scheduling (Computing)", url: "https://en.wikipedia.org/wiki/Scheduling_(computing)" },
        ],
    },
    {
        id: "ccw24-4",
        topic: "os",
        prompt: "If a process fails, most operating systems write the error information to a:",
        options: ["New file", "Another running process", "Log file", "None of the mentioned"],
        answerIndex: 2,
        explanation:
            "Operating systems write error and crash information to a log file so administrators can diagnose failures after the fact.",
        references: [
            { label: "Wikipedia: System Log", url: "https://en.wikipedia.org/wiki/Syslog" },
        ],
    },
    {
        id: "ccw24-5",
        topic: "os",
        prompt: "If a process is executing in its critical section, no other processes can execute in their critical section. What is this condition called?",
        options: ["Mutual exclusion", "Critical exclusion", "Synchronous exclusion", "Asynchronous exclusion"],
        answerIndex: 0,
        explanation:
            "Mutual exclusion guarantees that only one process at a time can be inside its critical section, preventing race conditions.",
        references: [
            { label: "Wikipedia: Mutual Exclusion", url: "https://en.wikipedia.org/wiki/Mutual_exclusion" },
        ],
    },
    {
        id: "ccw24-6",
        topic: "os",
        prompt: "When are the register context and stack of a thread deallocated?",
        options: [
            "When the thread terminates",
            "When the thread blocks",
            "When the thread unblocks",
            "When the thread spawns",
        ],
        answerIndex: 0,
        explanation:
            "A thread's register context and stack are only freed when the thread terminates, as they are needed throughout the thread's lifetime.",
        references: [
            { label: "Wikipedia: Thread (Computing)", url: "https://en.wikipedia.org/wiki/Thread_(computing)" },
        ],
    },
    {
        id: "ccw24-7",
        topic: "os",
        prompt: "Out of these page replacement algorithms, which one suffers from Belady's anomaly?",
        options: ["LRU", "FIFO", "Both LRU and FIFO", "Optimal Page Replacement"],
        answerIndex: 1,
        explanation:
            "Belady's anomaly affects FIFO: increasing the number of page frames can paradoxically increase the number of page faults.",
        references: [
            { label: "Wikipedia: Belady's Anomaly", url: "https://en.wikipedia.org/wiki/B%C3%A9l%C3%A1dy%27s_anomaly" },
        ],
    },
    {
        id: "ccw24-8",
        topic: "os",
        prompt: "Which one of these is NOT shared by threads of the same process?",
        options: ["Address Space", "Stack", "Message Queue", "File Descriptor Table"],
        answerIndex: 1,
        explanation:
            "Each thread has its own private stack and register context. Address space, message queues, and file descriptor tables are shared among threads of the same process.",
        references: [
            { label: "Wikipedia: Thread (Computing)", url: "https://en.wikipedia.org/wiki/Thread_(computing)" },
        ],
    },
    {
        id: "ccw24-9",
        topic: "os",
        prompt: "Which disk scheduling policy results in minimum head movement?",
        options: ["Circular scan", "Elevator (SCAN)", "FCFS", "None of the above"],
        answerIndex: 1,
        explanation:
            "The Elevator (SCAN) algorithm moves the disk head in one direction servicing all requests, then reverses, minimising total head movement.",
        references: [
            { label: "Wikipedia: Elevator Algorithm", url: "https://en.wikipedia.org/wiki/Elevator_algorithm" },
        ],
    },
    {
        id: "ccw24-10",
        topic: "os",
        prompt: "In a system with n CPUs, the maximum number of processes that can exist in the Ready state is:",
        options: ["Independent of n", "2n", "n²", "n"],
        answerIndex: 0,
        explanation:
            "The Ready queue holds processes waiting for CPU allocation. Its size is limited only by system memory/process table capacity, not by the number of CPUs. Only the Running state is bounded by n (one process per CPU at any instant).",
        references: [
            { label: "Wikipedia: Process State", url: "https://en.wikipedia.org/wiki/Process_state" },
        ],
    },
];