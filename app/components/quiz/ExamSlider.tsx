"use client";

export function ExamSlider({
  total,
  current,
  answeredMap,
  onNavigate,
}: {
  total: number;
  current: number;
  answeredMap: Record<string, number | undefined>;
  onNavigate: (index: number) => void;
}) {
  const getQuestionId = (index: number) => `q-${index}`;

  return (
    <div className="w-full">
      <input
        type="range"
        min={0}
        max={total - 1}
        value={current}
        onChange={(e) => onNavigate(Number(e.target.value))}
        className="w-full h-1.5 appearance-none cursor-pointer rounded-full"
        style={{
          background: `linear-gradient(to right, #22c55e ${(Object.keys(answeredMap).length / total) * 100}%, #2a2a2a ${(Object.keys(answeredMap).length / total) * 100}%)`,
          accentColor: "#22c55e",
        }}
      />
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #f5f5f5;
          border: 2px solid #2a2a2a;
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        input[type='range']::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #f5f5f5;
          border: 2px solid #2a2a2a;
          cursor: pointer;
        }
      `}</style>
      <div className="mt-2 flex items-center justify-between text-xs text-muted">
        <span>Question {current + 1} of {total}</span>
        <span>{Object.keys(answeredMap).length} answered</span>
      </div>
    </div>
  );
}
