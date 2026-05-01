const items = [
  { id: "saas", label: "SaaS란?" },
  { id: "tools", label: "도구" },
  { id: "prep", label: "준비물" },
  { id: "setup", label: "세팅" },
  { id: "build", label: "만들기" },
  { id: "deploy", label: "배포" },
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
