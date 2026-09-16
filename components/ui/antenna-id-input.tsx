"use client";

import { useRef } from "react";

type AntennaIdInputProps = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export function AntennaIdInput({
  value,
  onChange,
  disabled = false,
}: AntennaIdInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  function focusInput(index: number) {
    inputRefs.current[index]?.focus();
  }

  function updateDigit(index: number, digit: string) {
    const digits = value.padEnd(6, " ").split("");
    digits[index] = digit;

    const nextValue = digits.join("").replace(/ /g, "");
    onChange(nextValue);

    if (digit && index < 5) {
      focusInput(index + 1);
    }
  }

  function handleKeyDown(
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (
      event.key === "Backspace" &&
      !value[index] &&
      index > 0
    ) {
      focusInput(index - 1);
    }

    if (event.key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    }

    if (event.key === "ArrowRight" && index < 5) {
      focusInput(index + 1);
    }
  }

  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();

    const pastedValue = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    onChange(pastedValue);

    if (pastedValue.length > 0) {
      focusInput(Math.min(pastedValue.length, 5));
    }
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {[0, 1].map((groupIndex) => (
        <div
          key={groupIndex}
          className="flex items-center gap-2 rounded-2xl border border-border bg-muted/40 px-2 py-2"
        >
          {[0, 1, 2].map((groupOffset) => {
            const inputIndex = groupIndex * 3 + groupOffset;

            return (
              <input
                key={inputIndex}
                ref={(element) => {
                  inputRefs.current[inputIndex] = element;
                }}
                value={value[inputIndex] ?? ""}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                disabled={disabled}
                aria-label={`アンテナ接続ID ${inputIndex + 1}桁目`}
                className="h-12 w-9 rounded-lg border border-border bg-background text-center text-lg font-semibold text-foreground shadow-sm outline-none transition-all focus:border-foreground focus:ring-2 focus:ring-ring/40 disabled:opacity-50"
                onChange={(event) => {
                  const digit = event.target.value
                    .replace(/\D/g, "")
                    .slice(-1);

                  updateDigit(inputIndex, digit);
                }}
                onKeyDown={(event) => {
                  handleKeyDown(inputIndex, event);
                }}
                onPaste={handlePaste}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}