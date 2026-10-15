import React, { useState, useEffect } from 'react';

export interface NumberStepperInputProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  decimals?: number;
  icon?: React.ReactNode;
  onChange: (val: number) => void;
  title?: string;
}

export function NumberStepperInput({
  label,
  value,
  min = 0,
  max,
  step = 1,
  unit = '',
  decimals = 0,
  icon,
  onChange,
  title
}: NumberStepperInputProps) {
  const [localVal, setLocalVal] = useState<string>(
    decimals > 0 ? value.toFixed(decimals) : String(value)
  );

  useEffect(() => {
    setLocalVal(decimals > 0 ? value.toFixed(decimals) : String(value));
  }, [value, decimals]);

  const minVal = min !== undefined ? min : -Infinity;
  const maxVal = max !== undefined ? max : Infinity;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setLocalVal(raw);
    const num = parseFloat(raw);
    if (!isNaN(num) && num >= minVal && num <= maxVal) {
      onChange(decimals > 0 ? Math.round(num * 100) / 100 : Math.round(num));
    }
  };

  const handleBlur = () => {
    let num = parseFloat(localVal);
    if (isNaN(num)) num = value;
    num = Math.max(minVal, Math.min(maxVal, num));
    const rounded = decimals > 0 ? Math.round(num * 100) / 100 : Math.round(num);
    onChange(rounded);
    setLocalVal(decimals > 0 ? rounded.toFixed(decimals) : String(rounded));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBlur();
      (e.target as HTMLInputElement).blur();
    }
  };

  const decrement = () => {
    const next = Math.max(minVal, decimals > 0 ? Math.round((value - step) * 100) / 100 : value - step);
    onChange(next);
  };

  const increment = () => {
    const next = Math.min(maxVal, decimals > 0 ? Math.round((value + step) * 100) / 100 : value + step);
    onChange(next);
  };

  return (
    <div
      className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200 shadow-2xs"
      title={title}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="text-[10px] font-semibold text-slate-600 select-none whitespace-nowrap">{label}</span>
      <button
        type="button"
        onClick={decrement}
        className="w-4 h-4 flex items-center justify-center font-bold text-[10px] rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer transition-colors shadow-2xs"
        title={`Decrease ${label}`}
      >
        -
      </button>
      <div className="flex items-center bg-white border border-slate-300 rounded px-1 focus-within:ring-1 focus-within:ring-emerald-700 focus-within:border-emerald-700">
        <input
          type="number"
          step={step}
          min={min}
          max={max}
          value={localVal}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-10 sm:w-12 h-5 text-center font-mono text-[10.5px] font-bold text-slate-900 bg-transparent outline-hidden p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {unit && <span className="text-[9.5px] font-mono text-slate-400 font-semibold select-none pl-0.5">{unit}</span>}
      </div>
      <button
        type="button"
        onClick={increment}
        className="w-4 h-4 flex items-center justify-center font-bold text-[10px] rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer transition-colors shadow-2xs"
        title={`Increase ${label}`}
      >
        +
      </button>
    </div>
  );
}
