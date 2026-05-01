const items = [
  { id: "prep", label: "사전 준비" },
  { id: "setup", label: "프로젝트" },
  { id: "mcp", label: "Supabase MCP" },
  { id: "plan", label: "기획" },
  { id: "design", label: "디자인" },
  { id: "deploy", label: "배포" },
  { id: "ai", label: "AI 추가" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/80 border-b border-border">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="text-sm font-bold tracking-tight whitespace-nowrap"
        >
          🚀 내 첫 SaaS
        </a>
        <nav className="hidden md:flex gap-1 text-xs text-muted overflow-x-auto">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="px-2 py-1 hover:text-foreground transition whitespace-nowrap"
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
