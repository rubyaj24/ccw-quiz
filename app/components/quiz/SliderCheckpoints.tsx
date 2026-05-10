"use client";

export function SliderCheckpoints({
  options,
  value,
  onChange,
  formatLabel,
}: {
  options: number[];
  value: number;
  onChange: (value: number) => void;
  formatLabel?: (value: number) => string;
}) {
  const currentIndex = options.indexOf(value);
  const sliderIndex = currentIndex >= 0 ? currentIndex : 0;
  const maxIndex = options.length - 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idx = Math.round(Number(e.target.value));
    const clamped = Math.max(0, Math.min(maxIndex, idx));
    onChange(options[clamped]);
  };

  const pct = maxIndex > 0 ? (sliderIndex / maxIndex) * 100 : 0;

  return (
    <div className="w-full">
      <div className="relative h-8">
        <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#2a2a2a]" />
        <div
          className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#f5f5f5] transition-[width] duration-200 ease-out"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={0}
          max={maxIndex}
          step={1}
          value={sliderIndex}
          onChange={handleChange}
          className="relative h-full w-full appearance-none bg-transparent"
          style={{ accentColor: "#f5f5f5" }}
        />
      </div>
      <div className="relative mt-1 flex justify-between px-0">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`flex flex-col items-center transition-all duration-200 ${
              opt === value
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            <span
              className={`mb-1 h-2 w-2 rounded-full transition-all duration-200 ${
                opt === value ? "bg-foreground scale-125" : "bg-border scale-100"
              }`}
            />
            <span className="text-xs font-medium">
              {formatLabel ? formatLabel(opt) : opt}
            </span>
          </button>
        ))}
      </div>
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #f5f5f5;
          border: 2px solid #2a2a2a;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.3);
          box-shadow: 0 0 0 6px rgba(245, 245, 245, 0.12);
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #f5f5f5;
          border: 2px solid #2a2a2a;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        input[type='range']::-moz-range-thumb:hover {
          transform: scale(1.3);
          box-shadow: 0 0 0 6px rgba(245, 245, 245, 0.12);
        }
        input[type='range']::-moz-range-track {
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
}
