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
    {
        id: "ds-101",
        topic: "ds",
        prompt: "The total number of children of a node in a tree is known as its:",
        options: ["Height", "Scale", "Degree", "Depth"],
        answerIndex: 2,
        explanation:
            "The degree of a node is defined as the total number of children (subtrees) it has.",
        references: [
            { label: "Wikipedia: Tree (Data Structure)", url: "https://en.wikipedia.org/wiki/Tree_(data_structure)" },
        ],
    },
    {
        id: "ds-102",
        topic: "ds",
        prompt: "Which data structure is required to convert infix notation to prefix notation?",
        options: ["Stack", "Linked List", "Binary Tree", "Queue"],
        answerIndex: 0,
        explanation:
            "A stack is used to hold operators during infix-to-prefix conversion, processing the expression from right to left.",
        references: [
            { label: "Wikipedia: Stack (Data Structure)", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-103",
        topic: "ds",
        prompt: "Which of the following correctly initializes an array in C?",
        options: ["int arr[2]=(10,20)", "int arr(2)=(10,20)", "int arr[2]={10,20}", "int arr(2)={10,20}"],
        answerIndex: 2,
        explanation:
            "In C, arrays are declared with square brackets and initialized using curly braces: int arr[2]={10,20};",
        references: [
            { label: "Wikipedia: Array Data Structure", url: "https://en.wikipedia.org/wiki/Array_data_structure" },
        ],
    },
    {
        id: "ds-104",
        topic: "ds",
        prompt: "Which of the following is a non-linear data structure?",
        options: ["Trees", "Stacks", "Strings", "Queues"],
        answerIndex: 0,
        explanation:
            "Trees are non-linear because elements are arranged hierarchically rather than sequentially.",
        references: [
            { label: "Wikipedia: Tree (Data Structure)", url: "https://en.wikipedia.org/wiki/Tree_(data_structure)" },
        ],
    },
    {
        id: "ds-105",
        topic: "ds",
        prompt: "What is the prefix form of the expression A+B*C?",
        options: ["A+(BC*)", "+AB*C", "ABC+*", "+A*BC"],
        answerIndex: 3,
        explanation:
            "Applying standard operator precedence (* before +), A+B*C converts to prefix as +A*BC.",
        references: [
            { label: "Wikipedia: Polish Notation", url: "https://en.wikipedia.org/wiki/Polish_notation" },
        ],
    },
    {
        id: "ds-106",
        topic: "ds",
        prompt: "What is the asymptotic time complexity of: for i=1 to n { for j=1 to i { print } }?",
        options: ["O(n²)", "O(n log n)", "O(n³)", "O(n)"],
        answerIndex: 0,
        explanation:
            "The total iterations are 1+2+...+n = n(n+1)/2, which is O(n²).",
        references: [
            { label: "Wikipedia: Big O Notation", url: "https://en.wikipedia.org/wiki/Big_O_notation" },
        ],
    },
    {
        id: "ds-107",
        topic: "ds",
        prompt: "Using the division method with a hash table of size 157, at which position is key 172 placed?",
        options: ["19", "72", "15", "17"],
        answerIndex: 2,
        explanation:
            "172 mod 157 = 15. The division-method hash function h(k) = k mod m places key 172 at index 15.",
        references: [
            { label: "Wikipedia: Hash Function", url: "https://en.wikipedia.org/wiki/Hash_function" },
        ],
    },
    {
        id: "ds-108",
        topic: "ds",
        prompt: "Which of the following is NOT a divide-and-conquer approach?",
        options: ["Insertion Sort", "Merge Sort", "Shell Sort", "Heap Sort"],
        answerIndex: 0,
        explanation:
            "Insertion sort is an incremental algorithm, not divide and conquer. Merge sort and heap sort follow divide-and-conquer.",
        references: [
            { label: "Wikipedia: Insertion Sort", url: "https://en.wikipedia.org/wiki/Insertion_sort" },
        ],
    },
    {
        id: "ds-109",
        topic: "ds",
        prompt: "A pile in which items are added at one end and removed from the other is called a:",
        options: ["List", "Queue", "Stack", "Array"],
        answerIndex: 1,
        explanation:
            "A queue follows FIFO: elements are enqueued at the rear and dequeued from the front.",
        references: [
            { label: "Wikipedia: Queue", url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-110",
        topic: "ds",
        prompt: "A linear collection of data elements where each node is linked by means of a pointer is called:",
        options: ["Linked list", "Node list", "Primitive list", "Unordered list"],
        answerIndex: 0,
        explanation:
            "A linked list stores elements in nodes connected via pointers rather than contiguous memory.",
        references: [
            { label: "Wikipedia: Linked List", url: "https://en.wikipedia.org/wiki/Linked_list" },
        ],
    },
    {
        id: "ds-111",
        topic: "ds",
        prompt: "Which of the following is NOT a disadvantage of arrays?",
        options: ["Fixed size", "Possible memory wastage if usage is less than allocated size", "Position-based insertion", "Accessing elements at specified positions"],
        answerIndex: 3,
        explanation:
            "Accessing elements by index is an advantage of arrays, not a disadvantage. Fixed size and memory wastage are disadvantages.",
        references: [
            { label: "Wikipedia: Array Data Structure", url: "https://en.wikipedia.org/wiki/Array_data_structure" },
        ],
    },
    {
        id: "ds-112",
        topic: "ds",
        prompt: "The postfix expression for the infix expression A+B*(C+D)/F+D*E is:",
        options: ["AB+CD+*F/D+E*", "ABCD+*F/DE*++", "A*B+CD/F*DE++", "A+*BCD/F*DE++"],
        answerIndex: 1,
        explanation:
            "Applying standard precedence and left-to-right associativity, A+B*(C+D)/F+D*E converts to ABCD+*F/DE*++.",
        references: [
            { label: "Wikipedia: Reverse Polish Notation", url: "https://en.wikipedia.org/wiki/Reverse_Polish_notation" },
        ],
    },
    {
        id: "ds-113",
        topic: "ds",
        prompt: "If a stack's capacity is 10 and we try to push an 11th element, the condition is called:",
        options: ["Underflow", "Garbage collection", "Overflow", "None of the above"],
        answerIndex: 2,
        explanation:
            "Stack overflow occurs when a push is attempted on a full stack.",
        references: [
            { label: "Wikipedia: Stack Overflow", url: "https://en.wikipedia.org/wiki/Stack_overflow" },
        ],
    },
    {
        id: "ds-114",
        topic: "ds",
        prompt: "Among the following tree structures, which is most efficient considering both space and time complexities?",
        options: ["Incomplete binary tree", "Complete binary tree", "Full binary tree", "Degenerate tree"],
        answerIndex: 1,
        explanation:
            "A complete binary tree is efficiently stored as an array and provides good time/space balance for heap operations.",
        references: [
            { label: "Wikipedia: Binary Tree", url: "https://en.wikipedia.org/wiki/Binary_tree" },
        ],
    },
    {
        id: "ds-115",
        topic: "ds",
        prompt: "What is the minimum number of fields required in each node of a doubly linked list?",
        options: ["2", "3", "4", "None of the above"],
        answerIndex: 1,
        explanation:
            "Each node in a doubly linked list requires 3 fields: data, a pointer to the next node, and a pointer to the previous node.",
        references: [
            { label: "Wikipedia: Doubly Linked List", url: "https://en.wikipedia.org/wiki/Doubly_linked_list" },
        ],
    },
    {
        id: "ds-116",
        topic: "ds",
        prompt: "If an array is already sorted, which algorithm exhibits the best performance?",
        options: ["Merge Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
        answerIndex: 1,
        explanation:
            "Insertion sort runs in O(n) on an already-sorted array because each element requires no shifting.",
        references: [
            { label: "Wikipedia: Insertion Sort", url: "https://en.wikipedia.org/wiki/Insertion_sort" },
        ],
    },
    {
        id: "ds-117",
        topic: "ds",
        prompt: "What is the output of: int arr[5]={10,20,30,40,50}; printf(\"%d\", arr[5]);",
        options: ["Garbage value", "10", "50", "Compile error"],
        answerIndex: 0,
        explanation:
            "arr[5] is out of bounds (valid indices are 0–4). Accessing it is undefined behavior, typically producing a garbage value.",
        references: [
            { label: "Wikipedia: Buffer Overflow", url: "https://en.wikipedia.org/wiki/Buffer_overflow" },
        ],
    },
    {
        id: "ds-118",
        topic: "ds",
        prompt: "Which of the following is NOT a standard operation that can be performed on a queue?",
        options: ["Insertion", "Deletion", "Retrieval", "Traversal"],
        answerIndex: 3,
        explanation:
            "Standard queue operations are enqueue (insert), dequeue (delete), and peek/retrieval. Traversal is not a standard queue operation.",
        references: [
            { label: "Wikipedia: Queue", url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-119",
        topic: "ds",
        prompt: "What is the primary reason for using a circular queue?",
        options: ["Avoid wastage of memory", "Access the queue using priority", "Follow the FIFO principle", "None of the above"],
        answerIndex: 0,
        explanation:
            "Circular queues reuse freed front slots, avoiding the wasted space seen in a standard linear queue.",
        references: [
            { label: "Wikipedia: Circular Buffer", url: "https://en.wikipedia.org/wiki/Circular_buffer" },
        ],
    },
    {
        id: "ds-120",
        topic: "ds",
        prompt: "Which of the following sorting algorithms is NOT stable?",
        options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
        answerIndex: 1,
        explanation:
            "Quick sort is not stable because partitioning can change the relative order of equal elements.",
        references: [
            { label: "Wikipedia: Sorting Algorithm Stability", url: "https://en.wikipedia.org/wiki/Sorting_algorithm#Stability" },
        ],
    },
    {
        id: "ds-121",
        topic: "ds",
        prompt: "Which method(s) can determine if there is a path between two vertices in a graph?",
        options: ["Depth First Search only", "Breadth First Search only", "Both DFS and BFS", "Neither DFS nor BFS"],
        answerIndex: 2,
        explanation:
            "Both DFS and BFS can determine reachability between any two vertices.",
        references: [
            { label: "Wikipedia: Graph Traversal", url: "https://en.wikipedia.org/wiki/Graph_traversal" },
        ],
    },
    {
        id: "ds-122",
        topic: "ds",
        prompt: "What is the time complexity of concatenating two doubly linked lists (without a tail pointer)?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answerIndex: 2,
        explanation:
            "Without a tail pointer, we must traverse to the last node first, which takes O(n).",
        references: [
            { label: "Wikipedia: Doubly Linked List", url: "https://en.wikipedia.org/wiki/Doubly_linked_list" },
        ],
    },
    {
        id: "ds-123",
        topic: "ds",
        prompt: "Which of the following is FALSE about a doubly linked list?",
        options: [
            "We can navigate in both directions",
            "It requires more space than a singly linked list",
            "Insertion and deletion take a bit longer than in singly linked list",
            "Implementing a doubly linked list is easier than a singly linked list",
        ],
        answerIndex: 3,
        explanation:
            "A doubly linked list is more complex to implement because the extra prev pointer must be maintained on every operation.",
        references: [
            { label: "Wikipedia: Doubly Linked List", url: "https://en.wikipedia.org/wiki/Doubly_linked_list" },
        ],
    },
    {
        id: "ds-124",
        topic: "ds",
        prompt: "Which data structure is optimal for solving the Tower of Hanoi problem?",
        options: ["Queue", "Stack", "Heap", "Array"],
        answerIndex: 1,
        explanation:
            "The Tower of Hanoi is a recursive problem that maps naturally to a stack.",
        references: [
            { label: "Wikipedia: Tower of Hanoi", url: "https://en.wikipedia.org/wiki/Tower_of_Hanoi" },
        ],
    },
    {
        id: "ds-125",
        topic: "ds",
        prompt: "Why are B+ trees preferred over binary trees in database systems?",
        options: [
            "Disk capacity is greater than memory capacity",
            "Disk access is much slower than memory access",
            "Disk data transfer rates are much less than memory transfer rates",
            "Disks are more reliable than memory",
        ],
        answerIndex: 1,
        explanation:
            "B+ trees minimize disk accesses. Since disk I/O is orders of magnitude slower than memory access, fewer reads are crucial for database performance.",
        references: [
            { label: "Wikipedia: B+ Tree", url: "https://en.wikipedia.org/wiki/B%2B_tree" },
        ],
    },
    {
        id: "ds-126",
        topic: "ds",
        prompt: "In a min-heap, which statement is true about parent nodes relative to their children?",
        options: [
            "Parent nodes have values greater than or equal to their children",
            "Parent nodes have values less than or equal to their children",
            "Both statements are true",
            "Both statements are false",
        ],
        answerIndex: 1,
        explanation:
            "In a min-heap every parent is less than or equal to its children, ensuring the minimum value is always at the root.",
        references: [
            { label: "Wikipedia: Heap Data Structure", url: "https://en.wikipedia.org/wiki/Heap_(data_structure)" },
        ],
    },
    {
        id: "ds-127",
        topic: "ds",
        prompt: "The postfix form of the expression (A+B)*(C*D−E)*F/G is:",
        options: ["AB+ CD*E− FG /**", "AB+ CD* E− F **G /", "AB+ CD* E− *F *G /", "AB+ CDE *− * F *G /"],
        answerIndex: 2,
        explanation:
            "Converting (A+B)*(C*D−E)*F/G step by step yields the postfix: AB+ CD* E− *F *G /",
        references: [
            { label: "Wikipedia: Reverse Polish Notation", url: "https://en.wikipedia.org/wiki/Reverse_Polish_notation" },
        ],
    },
    {
        id: "ds-128",
        topic: "ds",
        prompt: "When multiple elements compete for the same bucket in a hash table, what is this called?",
        options: ["Overflow", "Underflow", "Collision", "Probing"],
        answerIndex: 2,
        explanation:
            "A collision occurs when two or more keys hash to the same bucket index in a hash table.",
        references: [
            { label: "Wikipedia: Hash Collision", url: "https://en.wikipedia.org/wiki/Hash_collision" },
        ],
    },
    {
        id: "ds-129",
        topic: "ds",
        prompt: "When a pop operation is called on an empty stack, the condition is known as:",
        options: ["Overflow", "Underflow", "Null pointer exception", "Garbage collection"],
        answerIndex: 1,
        explanation:
            "Stack underflow occurs when pop or peek is attempted on an empty stack.",
        references: [
            { label: "Wikipedia: Stack Underflow", url: "https://en.wikipedia.org/wiki/Stack_overflow#Stack_underflow" },
        ],
    },
    {
        id: "ds-130",
        topic: "ds",
        prompt: "Which type of linked list has its last node pointing back to the first node?",
        options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Skip list"],
        answerIndex: 2,
        explanation:
            "In a circular linked list, the tail node's next pointer points to the head, forming a closed loop.",
        references: [
            { label: "Wikipedia: Circular Linked List", url: "https://en.wikipedia.org/wiki/Linked_list#Circular_linked_list" },
        ],
    },
    {
        id: "ds-131",
        topic: "ds",
        prompt: "What is the time complexity of Depth First Search (DFS) traversal?",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"],
        answerIndex: 2,
        explanation:
            "DFS visits every vertex once and examines every edge once, yielding O(V + E) time complexity.",
        references: [
            { label: "Wikipedia: Depth-First Search", url: "https://en.wikipedia.org/wiki/Depth-first_search" },
        ],
    },
    {
        id: "ds-132",
        topic: "ds",
        prompt: "What is the number of edges in a complete graph with n vertices?",
        options: ["n", "n²", "n(n−1)/2", "2n"],
        answerIndex: 2,
        explanation:
            "In a complete graph every vertex connects to every other, giving n(n−1)/2 undirected edges.",
        references: [
            { label: "Wikipedia: Complete Graph", url: "https://en.wikipedia.org/wiki/Complete_graph" },
        ],
    },
    {
        id: "ds-133",
        topic: "ds",
        prompt: "Which data structure is used to store undo history in a web browser?",
        options: ["Queue", "Stack", "Heap", "Graph"],
        answerIndex: 1,
        explanation:
            "Browser back-navigation uses a stack so the most recently visited page is returned first (LIFO).",
        references: [
            { label: "Wikipedia: Stack (Data Structure)", url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)" },
        ],
    },
    {
        id: "ds-134",
        topic: "ds",
        prompt: "Which sorting algorithm guarantees O(n log n) in both average and worst case?",
        options: ["Quick sort", "Bubble sort", "Insertion sort", "Merge sort"],
        answerIndex: 3,
        explanation:
            "Merge sort consistently runs in O(n log n) for all inputs; quick sort's worst case degrades to O(n²).",
        references: [
            { label: "Wikipedia: Merge Sort", url: "https://en.wikipedia.org/wiki/Merge_sort" },
        ],
    },
    {
        id: "ds-135",
        topic: "ds",
        prompt: "Which algorithmic technique uses memoization to avoid redundant computations?",
        options: ["Greedy approach", "Divide and conquer", "Dynamic programming", "Backtracking"],
        answerIndex: 2,
        explanation:
            "Dynamic programming stores results of overlapping subproblems (memoization) to avoid recomputing them.",
        references: [
            { label: "Wikipedia: Memoization", url: "https://en.wikipedia.org/wiki/Memoization" },
        ],
    },
    {
        id: "ds-136",
        topic: "ds",
        prompt: "In the worst case, how many comparisons are needed to search a singly linked list of length n?",
        options: ["1", "log n", "n/2", "n"],
        answerIndex: 3,
        explanation:
            "In the worst case the target is the last element or absent, requiring n comparisons.",
        references: [
            { label: "Wikipedia: Linked List", url: "https://en.wikipedia.org/wiki/Linked_list" },
        ],
    },
    {
        id: "ds-137",
        topic: "ds",
        prompt: "What is the minimum number of queues needed to implement a priority queue?",
        options: ["1", "2", "3", "4"],
        answerIndex: 1,
        explanation:
            "A priority queue can be implemented using 2 queues — one for elements and one for priority ordering.",
        references: [
            { label: "Wikipedia: Priority Queue", url: "https://en.wikipedia.org/wiki/Priority_queue" },
        ],
    },
    {
        id: "ds-138",
        topic: "ds",
        prompt: "How many bubble-sort swaps are needed to sort [5, 1, 6, 2, 4] in ascending order?",
        options: ["3", "4", "5", "6"],
        answerIndex: 2,
        explanation:
            "Tracing bubble sort on [5,1,6,2,4] requires exactly 5 adjacent swaps to fully sort the array.",
        references: [
            { label: "Wikipedia: Bubble Sort", url: "https://en.wikipedia.org/wiki/Bubble_sort" },
        ],
    },
    {
        id: "ds-139",
        topic: "ds",
        prompt: "Which is the correct way to declare an array in C?",
        options: ["int javatpoint[10];", "int javatpoint;", "javatpoint{20};", "array javatpoint[10];"],
        answerIndex: 0,
        explanation:
            "In C, arrays are declared as: type name[size]; — e.g., int javatpoint[10];",
        references: [
            { label: "Wikipedia: C (Programming Language)", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        ],
    },
    {
        id: "ds-140",
        topic: "ds",
        prompt: "What is the time complexity of the enqueue operation in a queue?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answerIndex: 0,
        explanation:
            "Enqueue adds an element to the rear of the queue in constant time O(1).",
        references: [
            { label: "Wikipedia: Queue Operations", url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)" },
        ],
    },
];