import type { QuizQuestion } from "./types";

export const oopQuestions: QuizQuestion[] = [
    {
        id: "oop-1",
        topic: "oop",
        prompt: "Which OOP principle allows one interface with many implementations?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        answerIndex: 2,
        explanation:
            "Polymorphism means the same method signature can trigger different concrete behavior depending on the object type. This improves extensibility and allows client code to depend on abstractions instead of concrete classes.",
        references: [
            { label: "Oracle: Polymorphism", url: "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html" },
        ],
    },
    {
        id: "oop-2",
        topic: "oop",
        prompt: "What is the main goal of encapsulation?",
        options: [
            "Reuse code through class hierarchy",
            "Hide internal state and expose controlled access",
            "Create multiple objects quickly",
            "Convert runtime errors to compile-time errors",
        ],
        answerIndex: 1,
        explanation:
            "Encapsulation bundles state and behavior and limits direct field access. Public methods define safe interaction points, which protects invariants and reduces accidental misuse.",
        references: [
            { label: "Oracle: Encapsulation", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" },
        ],
    },
    {
        id: "oop-3",
        topic: "oop",
        prompt: "In composition vs inheritance, composition is often preferred because it:",
        options: [
            "Eliminates all dependencies",
            "Tightly couples classes",
            "Favors flexible behavior via object collaboration",
            "Disables runtime polymorphism",
        ],
        answerIndex: 2,
        explanation:
            "Composition creates behavior by assembling smaller collaborating objects. This avoids fragile inheritance trees and supports changing behavior at runtime with lower coupling.",
        references: [
            { label: "Refactoring Guru: Composition over Inheritance", url: "https://refactoring.guru/design-patterns/strategy" },
        ],
    },
    {
        id: "oop-4",
        topic: "oop",
        prompt: "Which principle is directly applied when exposing a simple API while hiding complex internals?",
        options: ["Abstraction", "Inheritance", "Aggregation", "Overloading"],
        answerIndex: 0,
        explanation:
            "Abstraction emphasizes what an object does rather than how it does it. A clean API hides implementation details and reduces cognitive load for callers.",
        references: [
            { label: "Oracle: Objects and Classes", url: "https://docs.oracle.com/javase/tutorial/java/concepts/object.html" },
        ],
    },
    {
        id: "oop-5",
        topic: "oop",
        prompt: "Method overriding is associated with:",
        options: ["Compile-time polymorphism", "Runtime polymorphism", "Encapsulation only", "Data hiding only"],
        answerIndex: 1,
        explanation:
            "Overriding resolves method implementation based on the object instance at runtime. This is dynamic dispatch, a core mechanism for runtime polymorphism.",
        references: [
            { label: "Oracle: Overriding and Hiding Methods", url: "https://docs.oracle.com/javase/tutorial/java/IandI/override.html" },
        ],
    },
    {
        id: "oop-6",
        topic: "oop",
        prompt: "A class that cannot be instantiated and is intended to define shared behavior is usually:",
        options: ["A final class", "An abstract class", "A static class", "A utility enum"],
        answerIndex: 1,
        explanation:
            "Abstract classes provide partial implementation and define contracts for subclasses, but they are not instantiated directly.",
        references: [
            { label: "Oracle: Abstract Methods and Classes", url: "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html" },
        ],
    },
    {
        id: "oop-7",
        topic: "oop",
        prompt: "Which OOP concept allows the same method call to behave differently based on the object instance?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        answerIndex: 2,
        explanation:
            "Polymorphism enables dynamic method dispatch where the same interface invokes different implementations depending on the runtime object type.",
        references: [
            { label: "Oracle: Polymorphism", url: "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html" },
        ],
    },
    {
        id: "oop-8",
        topic: "oop",
        prompt: "Which relationship best represents 'Car has an Engine'?",
        options: ["Inheritance", "Polymorphism", "Composition", "Overloading"],
        answerIndex: 2,
        explanation:
            "Composition represents a HAS-A relationship where one object is composed of another and controls its lifecycle.",
        references: [
            { label: "Composition vs Inheritance", url: "https://refactoring.guru/design-patterns/composition" },
        ],
    },
    {
        id: "oop-9",
        topic: "oop",
        prompt: "Which access specifier allows members to be accessible only within the same class?",
        options: ["public", "protected", "default", "private"],
        answerIndex: 3,
        explanation:
            "Private members are accessible only within the declaring class, enforcing strong encapsulation.",
        references: [
            { label: "Java Access Control", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html" },
        ],
    },
    {
        id: "oop-10",
        topic: "oop",
        prompt: "Function overloading is an example of:",
        options: [
            "Runtime polymorphism",
            "Compile-time polymorphism",
            "Inheritance",
            "Encapsulation"
        ],
        answerIndex: 1,
        explanation:
            "Overloading resolves method calls at compile time based on parameter list differences.",
        references: [
            { label: "Method Overloading", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html" },
        ],
    },
    {
        id: "oop-11",
        topic: "oop",
        prompt: "Which OOP principle is violated if internal fields are directly exposed?",
        options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
        answerIndex: 2,
        explanation:
            "Exposing internal fields breaks encapsulation by allowing uncontrolled access to object state.",
        references: [
            { label: "Encapsulation", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" },
        ],
    },
    {
        id: "oop-12",
        topic: "oop",
        prompt: "Which keyword is commonly used to prevent method overriding?",
        options: ["static", "final", "abstract", "private"],
        answerIndex: 1,
        explanation:
            "Final methods cannot be overridden by subclasses, preserving intended behavior.",
        references: [
            { label: "Final Keyword", url: "https://docs.oracle.com/javase/tutorial/java/IandI/final.html" },
        ],
    },
    {
        id: "oop-13",
        topic: "oop",
        prompt: "Which principle suggests depending on abstractions rather than concrete implementations?",
        options: [
            "Single Responsibility",
            "Dependency Inversion",
            "Liskov Substitution",
            "Open–Closed"
        ],
        answerIndex: 1,
        explanation:
            "Dependency Inversion Principle reduces coupling by relying on interfaces or abstract classes.",
        references: [
            { label: "SOLID Principles", url: "https://en.wikipedia.org/wiki/SOLID" },
        ],
    },
    {
        id: "oop-14",
        topic: "oop",
        prompt: "Which scenario best demonstrates runtime polymorphism?",
        options: [
            "Calling overloaded methods",
            "Using templates",
            "Calling overridden methods via base class reference",
            "Using static methods"
        ],
        answerIndex: 2,
        explanation:
            "Runtime polymorphism occurs when overridden methods are resolved at runtime through base references.",
        references: [
            { label: "Dynamic Dispatch", url: "https://en.wikipedia.org/wiki/Dynamic_dispatch" },
        ],
    },
    {
        id: "oop-15",
        topic: "oop",
        prompt: "Which OOP concept reduces code duplication across related classes?",
        options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
        answerIndex: 1,
        explanation:
            "Inheritance allows subclasses to reuse fields and methods of parent classes.",
        references: [
            { label: "Inheritance", url: "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html" },
        ],
    },
    {
        id: "oop-16",
        topic: "oop",
        prompt: "An interface in Java primarily defines:",
        options: [
            "State only",
            "Implementation only",
            "Method contracts",
            "Object instances"
        ],
        answerIndex: 2,
        explanation:
            "Interfaces define method signatures that implementing classes must provide.",
        references: [
            { label: "Java Interfaces", url: "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html" },
        ],
    },
    {
        id: "oop-17",
        topic: "oop",
        prompt: "Which principle ensures that subclasses can replace parent classes without breaking correctness?",
        options: [
            "Open–Closed Principle",
            "Liskov Substitution Principle",
            "Single Responsibility Principle",
            "Dependency Inversion Principle"
        ],
        answerIndex: 1,
        explanation:
            "LSP requires that derived classes honor the behavior contracts of base classes.",
        references: [
            { label: "Liskov Substitution Principle", url: "https://en.wikipedia.org/wiki/Liskov_substitution_principle" },
        ],
    },
    {
        id: "oop-18",
        topic: "oop",
        prompt: "Which keyword is used to refer to the current object in Java?",
        options: ["super", "this", "self", "current"],
        answerIndex: 1,
        explanation:
            "`this` refers to the current object instance and resolves naming conflicts.",
        references: [
            { label: "this Keyword", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/thiskey.html" },
        ],
    },
    {
        id: "oop-19",
        topic: "oop",
        prompt: "Which OOP mechanism supports loose coupling?",
        options: ["Inheritance", "Encapsulation", "Composition", "Global variables"],
        answerIndex: 2,
        explanation:
            "Composition promotes loose coupling by delegating behavior to composed objects.",
        references: [
            { label: "Loose Coupling", url: "https://en.wikipedia.org/wiki/Loose_coupling" },
        ],
    },
    {
        id: "oop-20",
        topic: "oop",
        prompt: "Which type of class cannot have objects instantiated directly?",
        options: ["Final class", "Abstract class", "Concrete class", "Nested class"],
        answerIndex: 1,
        explanation:
            "Abstract classes may contain abstract methods and cannot be instantiated directly.",
        references: [
            { label: "Abstract Classes", url: "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html" },
        ],
    },
    {
        id: "oop-21",
        topic: "oop",
        prompt: "Which concept allows changing behavior without modifying existing code?",
        options: [
            "Encapsulation",
            "Inheritance",
            "Open–Closed Principle",
            "Overloading"
        ],
        answerIndex: 2,
        explanation:
            "The Open–Closed Principle encourages extension without modification.",
        references: [
            { label: "Open–Closed Principle", url: "https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle" },
        ],
    },
    {
        id: "oop-22",
        topic: "oop",
        prompt: "Method overriding requires which of the following?",
        options: [
            "Same method signature",
            "Different return type",
            "Static binding",
            "Same class only"
        ],
        answerIndex: 0,
        explanation:
            "Overriding requires identical method signature in subclass.",
        references: [
            { label: "Method Overriding", url: "https://docs.oracle.com/javase/tutorial/java/IandI/override.html" },
        ],
    },
    {
        id: "oop-23",
        topic: "oop",
        prompt: "Which relationship is represented by 'Student extends Person'?",
        options: ["HAS-A", "USES-A", "IS-A", "PART-OF"],
        answerIndex: 2,
        explanation:
            "Inheritance models an IS-A relationship between subclass and superclass.",
        references: [
            { label: "IS-A Relationship", url: "https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)" },
        ],
    },
    {
        id: "oop-24",
        topic: "oop",
        prompt: "Which OOP concept hides complexity by exposing only essential features?",
        options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
        answerIndex: 2,
        explanation:
            "Abstraction reduces complexity by focusing on what an object does rather than how it does it.",
        references: [
            { label: "Abstraction", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" },
        ],
    },
    {
        id: "oop-25",
        topic: "oop",
        prompt: "Which principle states that a class should have only one reason to change?",
        options: [
            "Single Responsibility Principle",
            "Open–Closed Principle",
            "Liskov Substitution Principle",
            "Interface Segregation Principle"
        ],
        answerIndex: 0,
        explanation:
            "SRP improves maintainability by keeping classes focused on a single responsibility.",
        references: [
            { label: "Single Responsibility Principle", url: "https://en.wikipedia.org/wiki/Single-responsibility_principle" },
        ],
    },
    {
        id: "oop-26",
        topic: "oop",
        prompt: "Which OOP concept binds data and methods together?",
        options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
        answerIndex: 1,
        explanation: "Encapsulation bundles data and the methods that operate on it into a single unit.",
        references: [{ label: "Encapsulation", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" }],
    },
    {
        id: "oop-27",
        topic: "oop",
        prompt: "Which feature allows a subclass to provide a specific implementation of a parent method?",
        options: ["Overloading", "Overriding", "Encapsulation", "Aggregation"],
        answerIndex: 1,
        explanation: "Method overriding allows subclasses to redefine parent class behavior.",
        references: [{ label: "Method Overriding", url: "https://docs.oracle.com/javase/tutorial/java/IandI/override.html" }],
    },
    {
        id: "oop-28",
        topic: "oop",
        prompt: "Which keyword is used to call a superclass constructor in Java?",
        options: ["this", "parent", "base", "super"],
        answerIndex: 3,
        explanation: "`super` invokes the constructor or methods of the parent class.",
        references: [{ label: "super Keyword", url: "https://docs.oracle.com/javase/tutorial/java/IandI/super.html" }],
    },
    {
        id: "oop-29",
        topic: "oop",
        prompt: "Which relationship represents weak ownership between objects?",
        options: ["Composition", "Inheritance", "Aggregation", "Polymorphism"],
        answerIndex: 2,
        explanation: "Aggregation represents a HAS-A relationship with independent object lifetimes.",
        references: [{ label: "Aggregation", url: "https://en.wikipedia.org/wiki/Object_composition" }],
    },
    {
        id: "oop-30",
        topic: "oop",
        prompt: "Which binding occurs at runtime?",
        options: ["Static binding", "Dynamic binding", "Early binding", "Compile-time binding"],
        answerIndex: 1,
        explanation: "Dynamic binding resolves method calls at runtime based on object type.",
        references: [{ label: "Dynamic Binding", url: "https://en.wikipedia.org/wiki/Dynamic_dispatch" }],
    },
    {
        id: "oop-31",
        topic: "oop",
        prompt: "Which class member belongs to the class rather than instances?",
        options: ["Object method", "Instance variable", "Static member", "Virtual function"],
        answerIndex: 2,
        explanation: "Static members are shared across all instances of a class.",
        references: [{ label: "Static Members", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html" }],
    },
    {
        id: "oop-32",
        topic: "oop",
        prompt: "Which principle discourages large interfaces?",
        options: [
            "Single Responsibility",
            "Interface Segregation",
            "Dependency Inversion",
            "Open–Closed"
        ],
        answerIndex: 1,
        explanation: "ISP states that clients should not be forced to depend on methods they do not use.",
        references: [{ label: "Interface Segregation Principle", url: "https://en.wikipedia.org/wiki/Interface_segregation_principle" }],
    },
    {
        id: "oop-33",
        topic: "oop",
        prompt: "Which OOP concept allows behavior reuse without inheritance?",
        options: ["Polymorphism", "Encapsulation", "Composition", "Abstraction"],
        answerIndex: 2,
        explanation: "Composition enables reuse by delegating behavior to contained objects.",
        references: [{ label: "Composition", url: "https://refactoring.guru/design-patterns/composition" }],
    },
    {
        id: "oop-34",
        topic: "oop",
        prompt: "Which of the following supports multiple inheritance in Java?",
        options: ["Abstract classes", "Interfaces", "Concrete classes", "Packages"],
        answerIndex: 1,
        explanation: "Java allows multiple inheritance through interfaces.",
        references: [{ label: "Java Interfaces", url: "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html" }],
    },
    {
        id: "oop-35",
        topic: "oop",
        prompt: "Which OOP feature improves maintainability by localizing change?",
        options: ["Inheritance", "Encapsulation", "Polymorphism", "Overloading"],
        answerIndex: 1,
        explanation: "Encapsulation limits impact of changes by hiding internal details.",
        references: [{ label: "Encapsulation", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" }],
    },
    {
        id: "oop-36",
        topic: "oop",
        prompt: "Which concept allows objects to communicate via method calls?",
        options: ["Message passing", "Encapsulation", "Abstraction", "Inheritance"],
        answerIndex: 0,
        explanation: "Message passing enables interaction between objects through methods.",
        references: [{ label: "Message Passing", url: "https://en.wikipedia.org/wiki/Object-oriented_programming" }],
    },
    {
        id: "oop-37",
        topic: "oop",
        prompt: "Which keyword prevents inheritance of a class in Java?",
        options: ["static", "private", "final", "sealed"],
        answerIndex: 2,
        explanation: "Final classes cannot be extended.",
        references: [{ label: "Final Classes", url: "https://docs.oracle.com/javase/tutorial/java/IandI/final.html" }],
    },
    {
        id: "oop-38",
        topic: "oop",
        prompt: "Which principle focuses on extending behavior without modifying source code?",
        options: ["SRP", "OCP", "LSP", "ISP"],
        answerIndex: 1,
        explanation: "Open–Closed Principle encourages extension over modification.",
        references: [{ label: "Open–Closed Principle", url: "https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle" }],
    },
    {
        id: "oop-39",
        topic: "oop",
        prompt: "Which type of polymorphism is resolved at compile time?",
        options: ["Dynamic", "Runtime", "Static", "Virtual"],
        answerIndex: 2,
        explanation: "Static polymorphism includes method overloading resolved at compile time.",
        references: [{ label: "Polymorphism", url: "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html" }],
    },
    {
        id: "oop-40",
        topic: "oop",
        prompt: "Which UML relationship represents inheritance?",
        options: ["Association", "Aggregation", "Composition", "Generalization"],
        answerIndex: 3,
        explanation: "Generalization represents inheritance in UML.",
        references: [{ label: "UML Generalization", url: "https://en.wikipedia.org/wiki/Class_diagram" }],
    },
    {
        id: "oop-41",
        topic: "oop",
        prompt: "Which concept enables substitutability of objects?",
        options: ["Encapsulation", "Polymorphism", "Abstraction", "Aggregation"],
        answerIndex: 1,
        explanation: "Polymorphism allows objects of different types to be treated uniformly.",
        references: [{ label: "Polymorphism", url: "https://en.wikipedia.org/wiki/Polymorphism_(computer_science)" }],
    },
    {
        id: "oop-42",
        topic: "oop",
        prompt: "Which keyword allows a subclass method to access overridden parent method?",
        options: ["this", "parent", "super", "base"],
        answerIndex: 2,
        explanation: "`super` allows access to parent class methods.",
        references: [{ label: "super Keyword", url: "https://docs.oracle.com/javase/tutorial/java/IandI/super.html" }],
    },
    {
        id: "oop-43",
        topic: "oop",
        prompt: "Which principle promotes smaller, focused classes?",
        options: ["OCP", "LSP", "SRP", "DIP"],
        answerIndex: 2,
        explanation: "Single Responsibility Principle limits classes to one reason to change.",
        references: [{ label: "SRP", url: "https://en.wikipedia.org/wiki/Single-responsibility_principle" }],
    },
    {
        id: "oop-44",
        topic: "oop",
        prompt: "Which OOP feature helps in implementing plug-in architectures?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Overloading"],
        answerIndex: 2,
        explanation: "Polymorphism allows interchangeable implementations via interfaces.",
        references: [{ label: "Polymorphism", url: "https://en.wikipedia.org/wiki/Polymorphism_(computer_science)" }],
    },
    {
        id: "oop-45",
        topic: "oop",
        prompt: "Which type of class is used only for grouping related constants?",
        options: ["Abstract class", "Utility class", "Interface", "Enum"],
        answerIndex: 3,
        explanation: "Enums group fixed constants in a type-safe manner.",
        references: [{ label: "Enum", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html" }],
    },
    {
        id: "oop-46",
        topic: "oop",
        prompt: "Which principle allows high-level modules to be independent of low-level modules?",
        options: ["OCP", "DIP", "LSP", "ISP"],
        answerIndex: 1,
        explanation: "Dependency Inversion decouples high-level logic from implementation details.",
        references: [{ label: "Dependency Inversion", url: "https://en.wikipedia.org/wiki/Dependency_inversion_principle" }],
    },
    {
        id: "oop-47",
        topic: "oop",
        prompt: "Which relationship implies lifecycle dependency?",
        options: ["Aggregation", "Association", "Composition", "Inheritance"],
        answerIndex: 2,
        explanation: "Composition implies that contained objects cannot exist independently.",
        references: [{ label: "Composition", url: "https://en.wikipedia.org/wiki/Object_composition" }],
    },
    {
        id: "oop-48",
        topic: "oop",
        prompt: "Which class member cannot be overridden?",
        options: ["Abstract method", "Virtual method", "Final method", "Public method"],
        answerIndex: 2,
        explanation: "Final methods are not allowed to be overridden.",
        references: [{ label: "Final Methods", url: "https://docs.oracle.com/javase/tutorial/java/IandI/final.html" }],
    },
    {
        id: "oop-49",
        topic: "oop",
        prompt: "Which OOP concept helps achieve code extensibility?",
        options: ["Encapsulation", "Inheritance", "Abstraction", "All of the above"],
        answerIndex: 3,
        explanation: "All core OOP principles contribute to extensible designs.",
        references: [{ label: "OOP Concepts", url: "https://en.wikipedia.org/wiki/Object-oriented_programming" }],
    },
    {
        id: "oop-50",
        topic: "oop",
        prompt: "Which design approach prefers interfaces over implementations?",
        options: ["Procedural", "Functional", "Object-Oriented", "Modular"],
        answerIndex: 2,
        explanation: "OOP emphasizes programming to interfaces, not implementations.",
        references: [{ label: "OOP Design", url: "https://refactoring.guru/design-patterns" }],
    },
];