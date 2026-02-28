import type { QuizQuestion } from "./types";

export const dsQuestions: QuizQuestion[] = [
    {
        id: "ds-1",
        topic: "ds",
        prompt: "Which data structure gives FIFO order?",
        options: ["Stack", "Queue", "Heap", "Tree"],
        answerIndex: 1,
        explanation:
            "A queue removes elements in the same order they were inserted. Enqueue adds to the rear and dequeue removes from the front.",
        references: [
            { label: "Wikipedia: Queue (Abstract Data Type)", url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-2",
        topic: "ds",
        prompt: "Average-case time complexity of binary search on sorted array is:",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        answerIndex: 1,
        explanation:
            "Binary search compares with the middle element and halves the remaining space each step, producing logarithmic complexity.",
        references: [
            { label: "Wikipedia: Binary Search Algorithm", url: "https://en.wikipedia.org/wiki/Binary_search_algorithm" },
        ],
    },
    {
        id: "ds-3",
        topic: "ds",
        prompt: "Which traversal visits root, then left subtree, then right subtree?",
        options: ["Inorder", "Postorder", "Preorder", "Level-order"],
        answerIndex: 2,
        explanation:
            "Preorder traversal processes the root before recursively traversing left and right subtrees, often used for tree serialization.",
        references: [{ label: "Wikipedia: Tree Traversal", url: "https://en.wikipedia.org/wiki/Tree_traversal" }],
    },
    {
        id: "ds-4",
        topic: "ds",
        prompt: "Which structure is typically used to implement DFS iteratively?",
        options: ["Queue", "Stack", "Hash table", "Binary heap"],
        answerIndex: 1,
        explanation:
            "Depth-First Search uses a stack to process the most recently discovered node first, matching LIFO behavior.",
        references: [{ label: "Wikipedia: Depth-First Search", url: "https://en.wikipedia.org/wiki/Depth-first_search" }],
    },
    {
        id: "ds-5",
        topic: "ds",
        prompt: "In a max-heap, the root node contains:",
        options: ["Smallest key", "Median key", "Largest key", "Random key"],
        answerIndex: 2,
        explanation:
            "Heap order property in a max-heap ensures each parent is greater than or equal to its children, so the root is maximum.",
        references: [{ label: "Wikipedia: Heap (Data Structure)", url: "https://en.wikipedia.org/wiki/Heap_(data_structure)" }],
    },
    {
        id: "ds-6",
        topic: "ds",
        prompt: "Average-case lookup complexity for hash table is typically:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 0,
        explanation:
            "With good hashing and load factor control, hash table operations are near-constant on average, though worst-case can degrade.",
        references: [{ label: "Wikipedia: Hash Table", url: "https://en.wikipedia.org/wiki/Hash_table" }],
    },
    {
        id: "ds-7",
        topic: "ds",
        prompt: "What is the worst-case time complexity of searching an element in a balanced binary search tree?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 1,
        explanation:
            "A balanced BST maintains height as log n, so search operations take logarithmic time in the worst case.",
        references: [
            { label: "Binary Search Tree", url: "https://en.wikipedia.org/wiki/Binary_search_tree" },
        ],
    },
    {
        id: "ds-8",
        topic: "ds",
        prompt: "How many nodes are present at level 3 of a perfect binary tree?",
        options: ["4", "6", "8", "16"],
        answerIndex: 2,
        explanation:
            "Number of nodes at level L in a perfect binary tree is 2^L. At level 3: 2^3 = 8 nodes.",
        references: [
            { label: "Binary Tree Properties", url: "https://en.wikipedia.org/wiki/Binary_tree" },
        ],
    },
    {
        id: "ds-9",
        topic: "ds",
        prompt: "What is the time complexity of inserting an element into a max-heap?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 1,
        explanation:
            "Insertion may require heapify-up along the height of the heap, which is log n.",
        references: [
            { label: "Heap Insertion", url: "https://en.wikipedia.org/wiki/Heap_(data_structure)" },
        ],
    },
    {
        id: "ds-10",
        topic: "ds",
        prompt: "If a stack contains n elements, what is the maximum number of pop operations possible?",
        options: ["n - 1", "n", "2n", "n / 2"],
        answerIndex: 1,
        explanation:
            "Each element in the stack can be popped exactly once, so the maximum number of pop operations is n.",
        references: [
            { label: "Stack ADT", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-26",
        topic: "ds",
        prompt: "Which data structure follows the LIFO principle?",
        options: ["Queue", "Stack", "Deque", "Heap"],
        answerIndex: 1,
        explanation:
            "A stack follows Last-In-First-Out order where the last inserted element is removed first.",
        references: [
            { label: "Stack ADT", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-27",
        topic: "ds",
        prompt: "What is the time complexity of accessing an element in an array using index?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        answerIndex: 2,
        explanation:
            "Arrays allow direct indexed access, so retrieval takes constant time.",
        references: [
            { label: "Array Data Structure", url: "https://en.wikipedia.org/wiki/Array_data_structure" },
        ],
    },
    {
        id: "ds-28",
        topic: "ds",
        prompt: "If a stack has n elements, what is the maximum number of pop operations possible?",
        options: ["n − 1", "n", "2n", "n/2"],
        answerIndex: 1,
        explanation:
            "Each element can be popped once, so maximum pop operations equal n.",
        references: [
            { label: "Stack Operations", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-29",
        topic: "ds",
        prompt: "Which data structure is most suitable for implementing recursion?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        answerIndex: 1,
        explanation:
            "Recursion uses a call stack to store function calls and return addresses.",
        references: [
            { label: "Call Stack", url: "https://en.wikipedia.org/wiki/Call_stack" },
        ],
    },
    {
        id: "ds-30",
        topic: "ds",
        prompt: "What is the worst-case time complexity of linear search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 2,
        explanation:
            "In the worst case, linear search checks all elements.",
        references: [
            { label: "Linear Search", url: "https://en.wikipedia.org/wiki/Linear_search" },
        ],
    },
    {
        id: "ds-31",
        topic: "ds",
        prompt: "Which traversal of a BST gives sorted output?",
        options: ["Preorder", "Postorder", "Inorder", "Level order"],
        answerIndex: 2,
        explanation:
            "Inorder traversal of a Binary Search Tree visits nodes in ascending order.",
        references: [
            { label: "BST Traversal", url: "https://en.wikipedia.org/wiki/Binary_search_tree" },
        ],
    },
    {
        id: "ds-32",
        topic: "ds",
        prompt: "How many children can a binary tree node have at most?",
        options: ["1", "2", "3", "Unlimited"],
        answerIndex: 1,
        explanation:
            "A binary tree node can have at most two children.",
        references: [
            { label: "Binary Tree", url: "https://en.wikipedia.org/wiki/Binary_tree" },
        ],
    },
    {
        id: "ds-33",
        topic: "ds",
        prompt: "What is the maximum number of nodes in a binary tree of height 3?",
        options: ["7", "8", "15", "16"],
        answerIndex: 2,
        explanation:
            "Maximum nodes = 2^(h+1) − 1 = 2^4 − 1 = 15.",
        references: [
            { label: "Binary Tree Properties", url: "https://en.wikipedia.org/wiki/Binary_tree" },
        ],
    },
    {
        id: "ds-34",
        topic: "ds",
        prompt: "Which data structure is used for BFS traversal of a graph?",
        options: ["Stack", "Queue", "Heap", "Set"],
        answerIndex: 1,
        explanation:
            "Breadth-First Search uses a queue to explore nodes level by level.",
        references: [
            { label: "BFS", url: "https://en.wikipedia.org/wiki/Breadth-first_search" },
        ],
    },
    {
        id: "ds-35",
        topic: "ds",
        prompt: "What is the average-case time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        answerIndex: 1,
        explanation:
            "Binary search halves the search space at each step, resulting in logarithmic time.",
        references: [
            { label: "Binary Search", url: "https://en.wikipedia.org/wiki/Binary_search_algorithm" },
        ],
    },
    {
        id: "ds-36",
        topic: "ds",
        prompt: "Which data structure is best suited to implement a priority queue?",
        options: ["Stack", "Queue", "Heap", "Linked List"],
        answerIndex: 2,
        explanation:
            "Heaps efficiently support insertion and deletion of the highest-priority element.",
        references: [
            { label: "Heap", url: "https://en.wikipedia.org/wiki/Heap_(data_structure)" },
        ],
    },
    {
        id: "ds-37",
        topic: "ds",
        prompt: "What is the worst-case time complexity of quicksort?",
        options: ["O(n log n)", "O(log n)", "O(n²)", "O(n)"],
        answerIndex: 2,
        explanation:
            "Worst case occurs when partitioning is highly unbalanced.",
        references: [
            { label: "Quicksort", url: "https://en.wikipedia.org/wiki/Quicksort" },
        ],
    },
    {
        id: "ds-38",
        topic: "ds",
        prompt: "Which sorting algorithm is stable?",
        options: ["Quick sort", "Heap sort", "Merge sort", "Selection sort"],
        answerIndex: 2,
        explanation:
            "Merge sort preserves the relative order of equal elements.",
        references: [
            { label: "Sorting Stability", url: "https://en.wikipedia.org/wiki/Sorting_algorithm#Stability" },
        ],
    },
    {
        id: "ds-39",
        topic: "ds",
        prompt: "Which hashing technique handles collisions using linked lists?",
        options: ["Open addressing", "Linear probing", "Chaining", "Double hashing"],
        answerIndex: 2,
        explanation:
            "Separate chaining stores collided elements in linked lists.",
        references: [
            { label: "Hashing", url: "https://en.wikipedia.org/wiki/Hash_table" },
        ],
    },
    {
        id: "ds-40",
        topic: "ds",
        prompt: "What is the average-case time complexity of lookup in a hash table?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        answerIndex: 2,
        explanation:
            "With good hashing and load factor, lookup is constant on average.",
        references: [
            { label: "Hash Table Complexity", url: "https://en.wikipedia.org/wiki/Hash_table" },
        ],
    },
    {
        id: "ds-41",
        topic: "ds",
        prompt: "Which data structure is used to detect cycles in a graph using DFS?",
        options: ["Queue", "Stack", "Priority queue", "Heap"],
        answerIndex: 1,
        explanation:
            "DFS uses a stack (explicit or implicit) to track visited nodes.",
        references: [
            { label: "DFS", url: "https://en.wikipedia.org/wiki/Depth-first_search" },
        ],
    },
    {
        id: "ds-42",
        topic: "ds",
        prompt: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        answerIndex: 2,
        explanation:
            "Insertion at the head requires constant time.",
        references: [
            { label: "Linked List", url: "https://en.wikipedia.org/wiki/Linked_list" },
        ],
    },
    {
        id: "ds-43",
        topic: "ds",
        prompt: "Which data structure is used in topological sorting?",
        options: ["Queue", "Stack", "Heap", "Array"],
        answerIndex: 0,
        explanation:
            "Kahn’s algorithm for topological sorting uses a queue.",
        references: [
            { label: "Topological Sort", url: "https://en.wikipedia.org/wiki/Topological_sorting" },
        ],
    },
    {
        id: "ds-44",
        topic: "ds",
        prompt: "What is the maximum number of edges in a simple undirected graph with n vertices?",
        options: ["n", "n²", "n(n−1)/2", "2n"],
        answerIndex: 2,
        explanation:
            "Maximum edges = n(n − 1) / 2 for an undirected graph.",
        references: [
            { label: "Graph Theory", url: "https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)" },
        ],
    },
    {
        id: "ds-45",
        topic: "ds",
        prompt: "Which tree has all internal nodes with exactly two children?",
        options: ["Complete binary tree", "Binary search tree", "Full binary tree", "AVL tree"],
        answerIndex: 2,
        explanation:
            "A full binary tree has either 0 or 2 children for every node.",
        references: [
            { label: "Full Binary Tree", url: "https://en.wikipedia.org/wiki/Binary_tree" },
        ],
    },
    {
        id: "ds-46",
        topic: "ds",
        prompt: "Which algorithm is used to find shortest paths in a weighted graph?",
        options: ["DFS", "BFS", "Dijkstra’s algorithm", "Kruskal’s algorithm"],
        answerIndex: 2,
        explanation:
            "Dijkstra’s algorithm finds shortest paths from a source to all vertices.",
        references: [
            { label: "Dijkstra Algorithm", url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" },
        ],
    },
    {
        id: "ds-47",
        topic: "ds",
        prompt: "What is the time complexity of heapify operation?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 1,
        explanation:
            "Heapify adjusts a node down the height of the heap, which is logarithmic.",
        references: [
            { label: "Heapify", url: "https://en.wikipedia.org/wiki/Heap_(data_structure)" },
        ],
    },
    {
        id: "ds-48",
        topic: "ds",
        prompt: "Which data structure is best suited for implementing undo/redo operations?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        answerIndex: 1,
        explanation:
            "Stacks support reversing operations using LIFO order.",
        references: [
            { label: "Undo Stack", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-49",
        topic: "ds",
        prompt: "Which case gives best performance for insertion sort?",
        options: ["Reverse sorted", "Random order", "Nearly sorted", "All equal"],
        answerIndex: 2,
        explanation:
            "Insertion sort performs best when the array is already or nearly sorted.",
        references: [
            { label: "Insertion Sort", url: "https://en.wikipedia.org/wiki/Insertion_sort" },
        ],
    },
    {
        id: "ds-50",
        topic: "ds",
        prompt: "Which data structure uses key–value pairs?",
        options: ["Array", "Stack", "Hash table", "Tree"],
        answerIndex: 2,
        explanation:
            "Hash tables store data as key–value pairs for fast lookup.",
        references: [
            { label: "Hash Table", url: "https://en.wikipedia.org/wiki/Hash_table" },
        ],
    },
    {
        id: "ds-51",
        topic: "ds",
        prompt: "What is the maximum number of children a node can have in a k-ary tree?",
        options: ["k − 1", "k", "2k", "Unlimited"],
        answerIndex: 1,
        explanation:
            "In a k-ary tree, each node can have at most k children.",
        references: [
            { label: "K-ary Tree", url: "https://en.wikipedia.org/wiki/K-ary_tree" },
        ],
    },
    {
        id: "ds-52",
        topic: "ds",
        prompt: "Which data structure is used to implement function calls internally?",
        options: ["Queue", "Stack", "Deque", "Heap"],
        answerIndex: 1,
        explanation:
            "Function calls are managed using the call stack.",
        references: [
            { label: "Call Stack", url: "https://en.wikipedia.org/wiki/Call_stack" },
        ],
    },
    {
        id: "ds-53",
        topic: "ds",
        prompt: "What is the time complexity of deleting the last element from an array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 0,
        explanation:
            "Deleting the last element does not require shifting, so it takes constant time.",
        references: [
            { label: "Array Operations", url: "https://en.wikipedia.org/wiki/Array_data_structure" },
        ],
    },
    {
        id: "ds-54",
        topic: "ds",
        prompt: "Which tree structure guarantees height balance?",
        options: ["Binary Tree", "BST", "AVL Tree", "Heap"],
        answerIndex: 2,
        explanation:
            "AVL trees automatically rebalance to maintain logarithmic height.",
        references: [
            { label: "AVL Tree", url: "https://en.wikipedia.org/wiki/AVL_tree" },
        ],
    },
    {
        id: "ds-55",
        topic: "ds",
        prompt: "What is the worst-case time complexity of searching in a linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 2,
        explanation:
            "In the worst case, every node must be traversed.",
        references: [
            { label: "Linked List", url: "https://en.wikipedia.org/wiki/Linked_list" },
        ],
    },
    {
        id: "ds-56",
        topic: "ds",
        prompt: "Which traversal is used to delete a tree?",
        options: ["Inorder", "Preorder", "Postorder", "Level order"],
        answerIndex: 2,
        explanation:
            "Postorder traversal deletes children before the parent node.",
        references: [
            { label: "Tree Traversal", url: "https://en.wikipedia.org/wiki/Tree_traversal" },
        ],
    },
    {
        id: "ds-57",
        topic: "ds",
        prompt: "How many edges are present in a tree with n nodes?",
        options: ["n", "n − 1", "n + 1", "2n"],
        answerIndex: 1,
        explanation:
            "A tree with n nodes always has n − 1 edges.",
        references: [
            { label: "Tree Properties", url: "https://en.wikipedia.org/wiki/Tree_(data_structure)" },
        ],
    },
    {
        id: "ds-58",
        topic: "ds",
        prompt: "Which sorting algorithm is best suited for linked lists?",
        options: ["Quick sort", "Heap sort", "Merge sort", "Selection sort"],
        answerIndex: 2,
        explanation:
            "Merge sort does not require random access and works efficiently on linked lists.",
        references: [
            { label: "Merge Sort", url: "https://en.wikipedia.org/wiki/Merge_sort" },
        ],
    },
    {
        id: "ds-59",
        topic: "ds",
        prompt: "Which graph traversal guarantees shortest path in an unweighted graph?",
        options: ["DFS", "BFS", "Dijkstra", "Bellman-Ford"],
        answerIndex: 1,
        explanation:
            "BFS explores nodes level by level, ensuring shortest path in unweighted graphs.",
        references: [
            { label: "Breadth-First Search", url: "https://en.wikipedia.org/wiki/Breadth-first_search" },
        ],
    },
    {
        id: "ds-60",
        topic: "ds",
        prompt: "What is the space complexity of BFS using adjacency list?",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V²)"],
        answerIndex: 2,
        explanation:
            "BFS stores vertices and adjacency lists, leading to O(V + E) space.",
        references: [
            { label: "Graph Complexity", url: "https://en.wikipedia.org/wiki/Graph_traversal" },
        ],
    },
    {
        id: "ds-61",
        topic: "ds",
        prompt: "Which data structure supports efficient minimum element extraction?",
        options: ["Stack", "Queue", "Min Heap", "Deque"],
        answerIndex: 2,
        explanation:
            "Min heap allows extraction of the smallest element in O(log n).",
        references: [
            { label: "Min Heap", url: "https://en.wikipedia.org/wiki/Heap_(data_structure)" },
        ],
    },
    {
        id: "ds-62",
        topic: "ds",
        prompt: "What is the time complexity of building a heap from an array?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
        answerIndex: 0,
        explanation:
            "Heap construction using bottom-up heapify runs in linear time.",
        references: [
            { label: "Heap Construction", url: "https://en.wikipedia.org/wiki/Heap_(data_structure)" },
        ],
    },
    {
        id: "ds-63",
        topic: "ds",
        prompt: "Which hashing collision resolution technique probes sequentially?",
        options: ["Chaining", "Double hashing", "Linear probing", "Quadratic probing"],
        answerIndex: 2,
        explanation:
            "Linear probing checks the next available slot sequentially.",
        references: [
            { label: "Linear Probing", url: "https://en.wikipedia.org/wiki/Hash_table" },
        ],
    },
    {
        id: "ds-64",
        topic: "ds",
        prompt: "Which data structure is used in Kruskal’s algorithm?",
        options: ["Stack", "Queue", "Disjoint Set", "Heap"],
        answerIndex: 2,
        explanation:
            "Disjoint sets track connected components efficiently.",
        references: [
            { label: "Disjoint Set", url: "https://en.wikipedia.org/wiki/Disjoint-set_data_structure" },
        ],
    },
    {
        id: "ds-65",
        topic: "ds",
        prompt: "Which traversal uses a queue internally?",
        options: ["DFS", "Inorder", "BFS", "Postorder"],
        answerIndex: 2,
        explanation:
            "BFS uses a queue to visit nodes level by level.",
        references: [
            { label: "BFS", url: "https://en.wikipedia.org/wiki/Breadth-first_search" },
        ],
    },
    {
        id: "ds-66",
        topic: "ds",
        prompt: "Which sorting algorithm has the best average-case time complexity?",
        options: ["Bubble sort", "Insertion sort", "Merge sort", "Selection sort"],
        answerIndex: 2,
        explanation:
            "Merge sort consistently performs in O(n log n).",
        references: [
            { label: "Sorting Algorithms", url: "https://en.wikipedia.org/wiki/Sorting_algorithm" },
        ],
    },
    {
        id: "ds-67",
        topic: "ds",
        prompt: "Which data structure can be used to reverse a string?",
        options: ["Queue", "Stack", "Linked list", "Heap"],
        answerIndex: 1,
        explanation:
            "Stack reverses order due to LIFO nature.",
        references: [
            { label: "Stack Usage", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-68",
        topic: "ds",
        prompt: "What is the worst-case time complexity of AVL tree insertion?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 1,
        explanation:
            "AVL trees rebalance in logarithmic time.",
        references: [
            { label: "AVL Insertion", url: "https://en.wikipedia.org/wiki/AVL_tree" },
        ],
    },
    {
        id: "ds-69",
        topic: "ds",
        prompt: "Which algorithm is used to detect cycles in a graph?",
        options: ["BFS", "DFS", "Dijkstra", "Prim"],
        answerIndex: 1,
        explanation:
            "DFS can detect back edges indicating cycles.",
        references: [
            { label: "Cycle Detection", url: "https://en.wikipedia.org/wiki/Depth-first_search" },
        ],
    },
    {
        id: "ds-70",
        topic: "ds",
        prompt: "Which case gives worst performance for quicksort?",
        options: ["Random data", "Balanced partition", "Already sorted data", "Small input"],
        answerIndex: 2,
        explanation:
            "Already sorted input can lead to highly unbalanced partitions.",
        references: [
            { label: "Quicksort Worst Case", url: "https://en.wikipedia.org/wiki/Quicksort" },
        ],
    },
    {
        id: "ds-71",
        topic: "ds",
        prompt: "Which data structure stores elements in contiguous memory?",
        options: ["Linked list", "Tree", "Array", "Graph"],
        answerIndex: 2,
        explanation:
            "Arrays allocate contiguous memory blocks.",
        references: [
            { label: "Array", url: "https://en.wikipedia.org/wiki/Array_data_structure" },
        ],
    },
    {
        id: "ds-72",
        topic: "ds",
        prompt: "Which operation is NOT O(1) in a stack?",
        options: ["Push", "Pop", "Peek", "Search"],
        answerIndex: 3,
        explanation:
            "Searching a stack requires traversing elements.",
        references: [
            { label: "Stack Operations", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-73",
        topic: "ds",
        prompt: "Which algorithm is used to find Minimum Spanning Tree?",
        options: ["DFS", "BFS", "Prim’s", "Dijkstra’s"],
        answerIndex: 2,
        explanation:
            "Prim’s algorithm builds MST by expanding the nearest edge.",
        references: [
            { label: "Prim’s Algorithm", url: "https://en.wikipedia.org/wiki/Prim%27s_algorithm" },
        ],
    },
    {
        id: "ds-74",
        topic: "ds",
        prompt: "What is the load factor in hashing?",
        options: ["Keys / Buckets", "Buckets / Keys", "Keys × Buckets", "Keys − Buckets"],
        answerIndex: 0,
        explanation:
            "Load factor = number of keys divided by number of buckets.",
        references: [
            { label: "Load Factor", url: "https://en.wikipedia.org/wiki/Hash_table" },
        ],
    },
    {
        id: "ds-75",
        topic: "ds",
        prompt: "Which data structure supports double-ended operations?",
        options: ["Queue", "Stack", "Deque", "Heap"],
        answerIndex: 2,
        explanation:
            "Deque allows insertion and deletion from both ends.",
        references: [
            { label: "Deque", url: "https://en.wikipedia.org/wiki/Double-ended_queue" },
        ],
    },
    {
        id: "ds-76",
        topic: "ds",
        prompt: "Which tree traversal uses recursion implicitly?",
        options: ["Level order", "DFS", "BFS", "Hashing"],
        answerIndex: 1,
        explanation:
            "DFS naturally uses recursion.",
        references: [
            { label: "DFS Traversal", url: "https://en.wikipedia.org/wiki/Depth-first_search" },
        ],
    },
    {
        id: "ds-77",
        topic: "ds",
        prompt: "Which case gives best performance for merge sort?",
        options: ["Sorted", "Reverse sorted", "Random", "All cases"],
        answerIndex: 3,
        explanation:
            "Merge sort always runs in O(n log n) regardless of input.",
        references: [
            { label: "Merge Sort", url: "https://en.wikipedia.org/wiki/Merge_sort" },
        ],
    },
    {
        id: "ds-78",
        topic: "ds",
        prompt: "Which data structure is most suitable for LRU cache implementation?",
        options: ["Queue", "Stack", "Hash map + Doubly Linked List", "Heap"],
        answerIndex: 2,
        explanation:
            "Combining hash map and doubly linked list enables O(1) access and updates.",
        references: [
            { label: "LRU Cache", url: "https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)" },
        ],
    },
    {
        id: "ds-79",
        topic: "ds",
        prompt: "Which tree allows fast search, insert, and delete operations?",
        options: ["Binary Tree", "AVL Tree", "Heap", "Trie"],
        answerIndex: 1,
        explanation:
            "AVL trees maintain balance for logarithmic operations.",
        references: [
            { label: "AVL Tree", url: "https://en.wikipedia.org/wiki/AVL_tree" },
        ],
    },
    {
        id: "ds-80",
        topic: "ds",
        prompt: "Which data structure is used in expression evaluation?",
        options: ["Queue", "Stack", "Tree", "Heap"],
        answerIndex: 1,
        explanation:
            "Stacks are used to evaluate postfix and prefix expressions.",
        references: [
            { label: "Expression Evaluation", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-81",
        topic: "ds",
        prompt: "Which traversal prints nodes level by level?",
        options: ["Inorder", "Preorder", "Postorder", "Level order"],
        answerIndex: 3,
        explanation:
            "Level-order traversal visits nodes level by level using a queue.",
        references: [
            { label: "Level Order Traversal", url: "https://en.wikipedia.org/wiki/Tree_traversal" },
        ],
    },
    {
        id: "ds-82",
        topic: "ds",
        prompt: "Which data structure provides amortized O(1) insertion at end?",
        options: ["Linked list", "Dynamic array", "Stack", "Tree"],
        answerIndex: 1,
        explanation:
            "Dynamic arrays resize occasionally, giving amortized constant insertion time.",
        references: [
            { label: "Dynamic Array", url: "https://en.wikipedia.org/wiki/Dynamic_array" },
        ],
    },
    {
        id: "ds-83",
        topic: "ds",
        prompt: "Which algorithm sorts by repeatedly selecting the minimum element?",
        options: ["Insertion sort", "Selection sort", "Bubble sort", "Merge sort"],
        answerIndex: 1,
        explanation:
            "Selection sort picks the smallest element in each iteration.",
        references: [
            { label: "Selection Sort", url: "https://en.wikipedia.org/wiki/Selection_sort" },
        ],
    },
    {
        id: "ds-84",
        topic: "ds",
        prompt: "Which data structure is used for adjacency list representation?",
        options: ["Matrix", "Array of lists", "Tree", "Stack"],
        answerIndex: 1,
        explanation:
            "Adjacency lists store neighbors in lists for each vertex.",
        references: [
            { label: "Adjacency List", url: "https://en.wikipedia.org/wiki/Adjacency_list" },
        ],
    },
    {
        id: "ds-85",
        topic: "ds",
        prompt: "What is the worst-case space complexity of recursive DFS?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answerIndex: 2,
        explanation:
            "Recursive DFS can use stack space proportional to number of vertices.",
        references: [
            { label: "DFS Space Complexity", url: "https://en.wikipedia.org/wiki/Depth-first_search" },
        ],
    },
    {
        id: "ds-86",
        topic: "ds",
        prompt: "Which data structure supports efficient prefix searching?",
        options: ["BST", "Heap", "Trie", "Graph"],
        answerIndex: 2,
        explanation:
            "Tries are optimized for prefix-based searches.",
        references: [
            { label: "Trie", url: "https://en.wikipedia.org/wiki/Trie" },
        ],
    },
    {
        id: "ds-87",
        topic: "ds",
        prompt: "Which algorithm is used to detect negative weight cycles?",
        options: ["Dijkstra", "Prim", "Kruskal", "Bellman-Ford"],
        answerIndex: 3,
        explanation:
            "Bellman-Ford can detect negative cycles.",
        references: [
            { label: "Bellman-Ford", url: "https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm" },
        ],
    },
    {
        id: "ds-88",
        topic: "ds",
        prompt: "Which operation dominates the time complexity of quicksort?",
        options: ["Partitioning", "Recursion", "Comparison", "Swapping"],
        answerIndex: 0,
        explanation:
            "Partitioning divides the array around the pivot.",
        references: [
            { label: "Quicksort", url: "https://en.wikipedia.org/wiki/Quicksort" },
        ],
    },
    {
        id: "ds-89",
        topic: "ds",
        prompt: "Which data structure is best for implementing symbol tables?",
        options: ["Array", "Stack", "Hash table", "Queue"],
        answerIndex: 2,
        explanation:
            "Hash tables provide fast lookup for key–value pairs.",
        references: [
            { label: "Symbol Table", url: "https://en.wikipedia.org/wiki/Symbol_table" },
        ],
    },
    {
        id: "ds-90",
        topic: "ds",
        prompt: "Which graph representation is space efficient for sparse graphs?",
        options: ["Adjacency matrix", "Adjacency list", "Incidence matrix", "Edge list"],
        answerIndex: 1,
        explanation:
            "Adjacency lists store only existing edges.",
        references: [
            { label: "Sparse Graph", url: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-91",
        topic: "ds",
        prompt: "Which data structure supports efficient median finding?",
        options: ["Single heap", "Two heaps", "Stack", "Queue"],
        answerIndex: 1,
        explanation:
            "Two heaps (min and max) allow median in logarithmic time.",
        references: [
            { label: "Median Maintenance", url: "https://en.wikipedia.org/wiki/Median" },
        ],
    },
    {
        id: "ds-92",
        topic: "ds",
        prompt: "Which operation is O(n) in an array?",
        options: ["Access", "Insert at end", "Insert at beginning", "Update"],
        answerIndex: 2,
        explanation:
            "Insertion at beginning requires shifting all elements.",
        references: [
            { label: "Array Insertion", url: "https://en.wikipedia.org/wiki/Array_data_structure" },
        ],
    },
    {
        id: "ds-93",
        topic: "ds",
        prompt: "Which data structure is ideal for BFS-based shortest path?",
        options: ["Stack", "Queue", "Heap", "Tree"],
        answerIndex: 1,
        explanation:
            "BFS uses a queue to explore shortest paths.",
        references: [
            { label: "BFS Shortest Path", url: "https://en.wikipedia.org/wiki/Breadth-first_search" },
        ],
    },
    {
        id: "ds-94",
        topic: "ds",
        prompt: "Which sorting algorithm repeatedly swaps adjacent elements?",
        options: ["Insertion sort", "Bubble sort", "Selection sort", "Merge sort"],
        answerIndex: 1,
        explanation:
            "Bubble sort compares and swaps adjacent elements.",
        references: [
            { label: "Bubble Sort", url: "https://en.wikipedia.org/wiki/Bubble_sort" },
        ],
    },
    {
        id: "ds-95",
        topic: "ds",
        prompt: "Which data structure is used in backtracking algorithms?",
        options: ["Queue", "Stack", "Heap", "Array"],
        answerIndex: 1,
        explanation:
            "Backtracking relies on stack behavior.",
        references: [
            { label: "Backtracking", url: "https://en.wikipedia.org/wiki/Backtracking" },
        ],
    },
    {
        id: "ds-96",
        topic: "ds",
        prompt: "Which algorithm finds strongly connected components?",
        options: ["Prim’s", "Kruskal’s", "Kosaraju’s", "Dijkstra’s"],
        answerIndex: 2,
        explanation:
            "Kosaraju’s algorithm identifies strongly connected components.",
        references: [
            { label: "SCC", url: "https://en.wikipedia.org/wiki/Strongly_connected_component" },
        ],
    },
    {
        id: "ds-97",
        topic: "ds",
        prompt: "Which data structure stores hierarchical data?",
        options: ["Array", "Tree", "Queue", "Graph"],
        answerIndex: 1,
        explanation:
            "Trees represent hierarchical relationships naturally.",
        references: [
            { label: "Tree Structure", url: "https://en.wikipedia.org/wiki/Tree_(data_structure)" },
        ],
    },
    {
        id: "ds-98",
        topic: "ds",
        prompt: "Which operation is most expensive in a singly linked list?",
        options: ["Insert at head", "Delete at head", "Search", "Access by index"],
        answerIndex: 3,
        explanation:
            "Access by index requires traversal from the head.",
        references: [
            { label: "Linked List Access", url: "https://en.wikipedia.org/wiki/Linked_list" },
        ],
    },
    {
        id: "ds-99",
        topic: "ds",
        prompt: "Which data structure uses parent–child relationships?",
        options: ["Graph", "Tree", "Array", "Hash table"],
        answerIndex: 1,
        explanation:
            "Trees explicitly model parent–child relationships.",
        references: [
            { label: "Tree", url: "https://en.wikipedia.org/wiki/Tree_(data_structure)" },
        ],
    },
    {
        id: "ds-100",
        topic: "ds",
        prompt: "Which algorithm is used for topological sorting?",
        options: ["DFS", "BFS", "Kahn’s algorithm", "Prim’s algorithm"],
        answerIndex: 2,
        explanation:
            "Kahn’s algorithm uses indegree counting and a queue.",
        references: [
            { label: "Topological Sorting", url: "https://en.wikipedia.org/wiki/Topological_sorting" },
        ],
    },
];