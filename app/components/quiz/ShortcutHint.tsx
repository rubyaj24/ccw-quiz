"use client";

const SYMBOL_MAP: Record<string, string> = {
  "Ctrl": "\u2303",
  "Cmd": "\u2318",
  "Enter": "\u23CE",
  "Backspace": "\u232B",
  "Tab": "\u21E5",
  "Escape": "\u238B",
  "Shift": "\u21E7",
  "Option": "\u2325",
  "ArrowLeft": "\u2190",
  "ArrowRight": "\u2192",
  "ArrowUp": "\u2191",
  "ArrowDown": "\u2193",
};

function tokenizeShortcut(keys: string): string[] {
  return keys.split("+").map((k) => {
    const trimmed = k.trim();
    if (trimmed.startsWith("Numpad")) return trimmed.replace("Numpad", "");
    return SYMBOL_MAP[trimmed] ?? trimmed;
  });
}

export function ShortcutHint({ keys }: { keys: string }) {
  const tokens = tokenizeShortcut(keys);

  return (
    <span className="ml-1.5 hidden items-center gap-0.5 sm:inline-flex">
      {tokens.map((token, i) => (
        <span
          key={`${token}-${i}`}
          className="flex h-4 min-w-4 items-center justify-center rounded-[3px] border-2 border-current/30 px-1 font-mono text-[10px] leading-none text-muted/60"
        >
          {token}
        </span>
      ))}
    </span>
  );
}
