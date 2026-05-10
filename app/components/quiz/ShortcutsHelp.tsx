"use client";

import { FiX, FiKey } from "react-icons/fi";
import { ShortcutHint } from "./ShortcutHint";

const SYMBOL_MAP: Record<string, string> = {
  "Ctrl": "\u2303",
  "Enter": "\u23CE",
  "Backspace": "\u232B",
  "Tab": "\u21E5",
  "Escape": "\u238B",
  "Shift": "\u21E7",
  "ArrowLeft": "\u2190",
  "ArrowRight": "\u2192",
  "ArrowUp": "\u2191",
  "ArrowDown": "\u2193",
};

function formatKey(key: string): string {
  if (key.startsWith("Numpad")) return key.replace("Numpad", "");
  return SYMBOL_MAP[key] ?? key;
}

export function ShortcutsHelp({
  visible,
  onClose,
  shortcuts,
}: {
  visible: boolean;
  onClose: () => void;
  shortcuts: Record<string, { label: string }>;
}) {
  if (!visible) return null;

  const entries = Object.entries(shortcuts);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm rounded-t-2xl border border-border bg-card p-5 shadow-2xl sm:rounded-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <FiKey size={16} />
            Keyboard Shortcuts
          </div>
          <button type="button" onClick={onClose} className="text-muted hover:text-foreground transition">
            <FiX size={18} />
          </button>
        </div>
        <div className="space-y-2">
          {entries.length === 0 && (
            <p className="text-sm text-muted">No shortcuts available for this screen.</p>
          )}
          {entries.map(([keys, shortcut]) => (
            <div key={keys} className="flex items-center justify-between gap-3">
              <span className="text-sm text-foreground">{shortcut.label}</span>
              <div className="flex items-center gap-0.5">
                {keys.split("+").map((k, i) => (
                  <kbd
                    key={`${k}-${i}`}
                    className="flex h-5 min-w-[20px] items-center justify-center rounded-[3px] border-2 border-current/30 px-1.5 font-mono text-[11px] leading-none text-muted/60"
                  >
                    {formatKey(k)}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-border pt-3 text-center text-xs text-muted">
          Press <ShortcutHint keys="?" /> to toggle
        </div>
      </div>
    </div>
  );
}
