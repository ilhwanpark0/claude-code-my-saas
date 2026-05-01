"use client";

import { useState } from "react";

type Props = {
  code: string;
  label?: string;
};

export function CodeBlock({ code, label }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="group relative my-3">
      {label && (
        <div className="text-xs text-muted mb-1 font-mono uppercase tracking-wider">
          {label}
        </div>
      )}
      <div className="relative rounded-lg border border-border bg-[#1a1a1a] text-[#f5f5f5]">
        <pre className="overflow-x-auto px-4 py-3 text-sm font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="코드 복사"
          className="absolute top-2 right-2 px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          {copied ? "복사됨!" : "복사"}
        </button>
      </div>
    </div>
  );
}
