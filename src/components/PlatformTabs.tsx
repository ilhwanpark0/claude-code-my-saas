"use client";

import { useState, type ReactNode } from "react";

type Props = {
  mac: ReactNode;
  windows: ReactNode;
};

export function PlatformTabs({ mac, windows }: Props) {
  const [tab, setTab] = useState<"mac" | "windows">("mac");

  return (
    <div className="my-3">
      <div className="inline-flex rounded-md border border-border bg-white p-0.5 mb-2">
        <button
          type="button"
          onClick={() => setTab("mac")}
          className={`px-3 py-1 text-xs font-medium rounded ${
            tab === "mac"
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          Mac
        </button>
        <button
          type="button"
          onClick={() => setTab("windows")}
          className={`px-3 py-1 text-xs font-medium rounded ${
            tab === "windows"
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          Windows
        </button>
      </div>
      <div>{tab === "mac" ? mac : windows}</div>
    </div>
  );
}
