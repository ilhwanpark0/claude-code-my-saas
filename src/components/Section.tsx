import type { ReactNode } from "react";

type Props = {
  id: string;
  step: string;
  time: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, step, time, title, subtitle, children }: Props) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-border py-12 md:py-16"
    >
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          {step}
        </span>
        <span className="text-xs text-muted">·</span>
        <span className="text-xs text-muted">⏱ {time}</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
        {title}
      </h2>
      {subtitle && <p className="text-muted mb-6 text-base">{subtitle}</p>}
      <div className="prose prose-neutral max-w-none">{children}</div>
    </section>
  );
}
