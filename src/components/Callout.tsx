import type { ReactNode } from "react";

type Props = {
  variant?: "info" | "warn" | "tip";
  children: ReactNode;
};

const styles = {
  info: "bg-accent-soft/60 border-accent/30 text-foreground",
  warn: "bg-amber-50 border-amber-200 text-amber-900",
  tip: "bg-emerald-50 border-emerald-200 text-emerald-900",
};

const icons = {
  info: "💡",
  warn: "⚠️",
  tip: "✨",
};

export function Callout({ variant = "info", children }: Props) {
  return (
    <div
      className={`my-4 flex gap-3 rounded-lg border px-4 py-3 text-sm ${styles[variant]}`}
    >
      <span className="select-none" aria-hidden>
        {icons[variant]}
      </span>
      <div className="flex-1 leading-relaxed">{children}</div>
    </div>
  );
}
