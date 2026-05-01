import { CodeBlock } from "@/components/CodeBlock";
import { PlatformTabs } from "@/components/PlatformTabs";
import { Callout } from "@/components/Callout";
import { TopNav } from "@/components/TopNav";
import type { ReactNode } from "react";

/* ────────────────────────────────────────────
   작은 UI 헬퍼들
   ──────────────────────────────────────────── */

function StepBadge({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-background text-sm font-bold shrink-0">
      {n}
    </span>
  );
}

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-20 text-2xl md:text-3xl font-bold tracking-tight mt-20 mb-6 pt-8 border-t border-border"
    >
      {children}
    </h2>
  );
}

function Card({
  emoji,
  title,
  desc,
  sub,
}: {
  emoji: string;
  title: string;
  desc: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-border p-5 bg-white flex flex-col gap-2">
      <span className="text-2xl">{emoji}</span>
      <p className="font-semibold text-base">{title}</p>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
      {sub && (
        <p className="text-xs text-accent font-medium mt-1">→ {sub}</p>
      )}
    </div>
  );
}

function ToolRow({
  emoji,
  name,
  role,
  what,
}: {
  emoji: string;
  name: string;
  role: string;
  what: string;
}) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-border last:border-0">
      <span className="text-2xl w-8 shrink-0">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm">
          {name}{" "}
          <span className="text-xs font-normal text-accent bg-accent-soft px-2 py-0.5 rounded-full">
            {role}
          </span>
        </p>
        <p className="text-sm text-muted mt-0.5">{what}</p>
      </div>
    </div>
  );
}

function PrepItem({
  done,
  title,
  desc,
  link,
  linkLabel,
}: {
  done?: boolean;
  title: string;
  desc: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0">
      <span className="text-lg mt-0.5">{done ? "☑️" : "☐"}</span>
      <div className="flex-1">
        <p className="font-medium text-sm">{title}</p>
        <p className="text-sm text-muted mt-0.5">{desc}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent underline underline-offset-2 mt-1 inline-block"
          >
            {linkLabel ?? link} ↗
          </a>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   페이지
   ──────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <TopNav />

      <main id="top" className="max-w-3xl mx-auto px-5 md:px-8 pb-32">

        {/* ── Hero ── */}
        <section className="pt-16 md:pt-24 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-accent-soft text-accent border border-accent/20">
            <span>🟠</span>
            <span>Claude Code 워크숍 · 비개발자용</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            아이디어를{" "}
            <span className="bg-gradient-to-r from-accent to-amber-600 bg-clip-text text-transparent">
              붙여넣기
            </span>{" "}
            한 번으로
            <br />
            진짜 서비스로 만들어봅니다.
          </h1>

          <p className="mt-6 text-base text-muted leading-relaxed max-w-xl">
            코딩 경험이 없어도 됩니다. 오늘 이 가이드를 따라가면
            실제로 인터넷에 올라가는 내 SaaS를 갖게 됩니다.
          </p>

          <div className="mt-4 flex items-center gap-3 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <span className="text-base">⏱</span> 2–3시간
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="text-base">💻</span> 직접 쓰는 코드 0줄
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="text-base">🌐</span> 실제 URL 1개
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#saas"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition"
            >
              시작하기 →
            </a>
          </div>
        </section>

        {/* ── SaaS란? ── */}
        <H2 id="saas">SaaS가 뭐예요?</H2>

        <p className="text-muted text-sm mb-6 leading-relaxed">
          SaaS = Software as a Service. 쉽게 말해{" "}
          <strong className="text-foreground">인터넷에서 쓰는 소프트웨어</strong>입니다.
          Notion, Figma, Gmail — 전부 SaaS예요. 설치 필요 없고, 링크 하나로 누구든 쓸 수 있어요.
        </p>

        <p className="text-sm text-muted mb-4">
          어떤 SaaS든 아래 4가지 블록으로 이루어져 있습니다:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Card
            emoji="🖥️"
            title="프론트엔드 — 얼굴"
            desc="사용자가 보는 화면. 버튼, 폼, 대시보드 전부 여기에 속해요."
            sub="오늘 쓸 도구: Next.js"
          />
          <Card
            emoji="🗄️"
            title="데이터베이스 — 창고"
            desc="사용자 정보, 게시글, 결제 내역 등 데이터를 저장하는 곳."
            sub="오늘 쓸 도구: Supabase"
          />
          <Card
            emoji="🔐"
            title="인증 — 열쇠"
            desc="회원가입·로그인. 누가 들어올 수 있고 누가 못 들어오는지 관리."
            sub="오늘 쓸 도구: Supabase Auth"
          />
          <Card
            emoji="🌍"
            title="배포 — 집"
            desc="만든 코드를 인터넷에 올려서 실제 URL이 생기게 하는 것."
            sub="오늘 쓸 도구: Vercel"
          />
        </div>

        <Callout variant="tip">
          <strong>핵심:</strong> 이 4개를 혼자 다 코딩하면 보통 몇 달 걸립니다.
          오늘은 Claude Code가 다 만들어주고, 여러분은 "어떤 서비스를 만들지"만 결정하면 됩니다.
        </Callout>

        {/* ── 도구 ── */}
        <H2 id="tools">오늘 쓸 도구들</H2>

        <p className="text-sm text-muted mb-4">
          6개처럼 보이지만 직접 다루는 건 딱 2개 — Claude Code와 Supabase뿐입니다.
          나머지는 Claude Code가 알아서 사용합니다.
        </p>

        <div className="rounded-xl border border-border bg-white divide-y divide-border mb-4">
          <ToolRow
            emoji="🤖"
            name="Claude Code"
            role="뇌"
            what="여러분이 말하면 코드를 짜줍니다. 오늘의 핵심 도구."
          />
          <ToolRow
            emoji="⚡"
            name="Next.js"
            role="프론트엔드"
            what="화면(페이지)을 만드는 프레임워크. Claude Code가 자동 설치합니다."
          />
          <ToolRow
            emoji="🟢"
            name="Supabase"
            role="데이터베이스 + 인증"
            what="데이터 저장소 + 로그인 시스템. 무료로 시작 가능."
          />
          <ToolRow
            emoji="🔌"
            name="Supabase MCP"
            role="연결 플러그인"
            what="Claude Code가 Supabase에 직접 접근해서 테이블을 만들 수 있게 해줍니다."
          />
          <ToolRow
            emoji="🐱"
            name="GitHub"
            role="코드 저장소"
            what="코드를 저장하는 곳. 배포 시에만 씁니다."
          />
          <ToolRow
            emoji="▲"
            name="Vercel"
            role="배포"
            what="GitHub에 올린 코드를 자동으로 인터넷에 올려줍니다. 무료."
          />
        </div>

        {/* ── 준비물 ── */}
        <H2 id="prep">준비물 체크리스트</H2>

        <p className="text-sm text-muted mb-4">
          워크숍 시작 전날까지 아래를 완료해오세요. 당일 세션은 기획부터 시작합니다.
        </p>

        <div className="rounded-xl border border-border bg-white divide-y divide-border mb-6">
          <PrepItem
            title="Node.js 설치"
            desc="터미널에서 node -v 를 쳤을 때 v20 이상이면 OK"
            link="https://nodejs.org"
            linkLabel="nodejs.org에서 LTS 버전 다운로드"
          />
          <PrepItem
            title="GitHub 계정"
            desc="코드를 저장하는 곳. 계정만 만들어오면 됩니다."
            link="https://github.com"
            linkLabel="github.com에서 무료 가입"
          />
          <PrepItem
            title="Supabase 계정 + 프로젝트 생성"
            desc="데이터베이스. 프로젝트를 하나 만들고 아래 3가지 값을 복사해두세요."
            link="https://supabase.com"
            linkLabel="supabase.com에서 무료 가입"
          />
          <PrepItem
            title="Vercel 계정"
            desc="배포용. GitHub 계정으로 바로 가입하면 됩니다."
            link="https://vercel.com"
            linkLabel="vercel.com에서 GitHub 계정으로 가입"
          />
          <PrepItem
            title="Claude Code 설치"
            desc="터미널에 아래 명령어를 붙여넣고 실행하세요."
          />
        </div>

        <p className="text-xs text-muted mb-2 font-medium">Claude Code 설치 명령어</p>
        <CodeBlock lang="bash">{`npm install -g @anthropic-ai/claude-code`}</CodeBlock>

        <p className="text-xs text-muted mb-2 mt-4 font-medium">설치 후 로그인</p>
        <CodeBlock lang="bash">{`claude`}</CodeBlock>

        <Callout variant="warn">
          <strong>Supabase에서 꼭 복사해둘 3가지</strong><br />
          Settings → API 에서:<br />
          1. <strong>Project URL</strong> (https://xxx.supabase.co)<br />
          2. <strong>anon (public) key</strong><br />
          3. <strong>service_role key</strong> (Settings → Access Tokens에 있는 Personal Access Token)
        </Callout>

        {/* ── 세팅 ── */}
        <H2 id="setup">프로젝트 세팅</H2>

        <p className="text-sm text-muted mb-6 leading-relaxed">
          터미널을 열고 아래 스크립트를 그대로 붙여넣으세요.
          Next.js 프로젝트 생성 + Supabase 패키지 설치 + 파일 구조 셋업이 한 번에 됩니다.
        </p>

        <div className="flex items-center gap-2 mb-2">
          <StepBadge n={1} />
          <p className="text-sm font-semibold">터미널을 열고 이걸 붙여넣기</p>
        </div>

        <PlatformTabs
          mac={
            <CodeBlock lang="bash">{`cd ~/Desktop && npx create-next-app@latest my-saas \\
  --typescript --tailwind --eslint --app \\
  --src-dir --import-alias "@/*" --use-npm --yes \\
  && cd my-saas \\
  && npm install @supabase/supabase-js @supabase/ssr \\
  && code .`}</CodeBlock>
          }
          windows={
            <CodeBlock lang="bash">{`cd %USERPROFILE%\\Desktop && npx create-next-app@latest my-saas ^
  --typescript --tailwind --eslint --app ^
  --src-dir --import-alias "@/*" --use-npm --yes ^
  && cd my-saas ^
  && npm install @supabase/supabase-js @supabase/ssr ^
  && code .`}</CodeBlock>
          }
        />

        <Callout>
          명령어가 끝나면 VSCode가 자동으로 열립니다. 열린 폴더가 <strong>내 SaaS 프로젝트</strong>입니다.
        </Callout>

        <div className="flex items-center gap-2 mt-8 mb-2">
          <StepBadge n={2} />
          <p className="text-sm font-semibold">
            VSCode에서 새 파일 <code className="text-accent">.env.local</code> 만들고 아래 붙여넣기
          </p>
        </div>

        <CodeBlock lang="bash">{`NEXT_PUBLIC_SUPABASE_URL=여기에_Project_URL_붙여넣기
NEXT_PUBLIC_SUPABASE_ANON_KEY=여기에_anon_key_붙여넣기`}</CodeBlock>

        <Callout variant="warn">
          <strong>.env.local 은 비밀 파일</strong>입니다. GitHub에 올리지 마세요.
          (create-next-app이 자동으로 .gitignore에 추가해줍니다)
        </Callout>

        <div className="flex items-center gap-2 mt-8 mb-2">
          <StepBadge n={3} />
          <p className="text-sm font-semibold">Supabase MCP 연결</p>
        </div>

        <p className="text-sm text-muted mb-3">
          Claude Code가 여러분의 Supabase에 직접 접근할 수 있도록 플러그인을 연결합니다.
          아래 경로의 파일을 열어서 내용을 붙여넣으세요.
        </p>

        <PlatformTabs
          mac={
            <CodeBlock lang="bash">{`# 터미널에서 파일 열기
open -a TextEdit ~/.config/claude-code/claude_mcp_config.json 2>/dev/null || \\
  mkdir -p ~/.config/claude-code && \\
  open -a TextEdit ~/.config/claude-code/claude_mcp_config.json`}</CodeBlock>
          }
          windows={
            <CodeBlock lang="bash">{`# PowerShell에서 파일 열기
notepad $env:APPDATA\\claude-code\\claude_mcp_config.json`}</CodeBlock>
          }
        />

        <p className="text-xs text-muted mb-2 mt-4 font-medium">
          파일 내용 (service_role key를 아래에 넣으세요)
        </p>
        <CodeBlock lang="json">{`{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase@latest",
        "--access-token",
        "여기에_service_role_key_붙여넣기"
      ]
    }
  }
}`}</CodeBlock>

        <Callout variant="tip">
          저장 후 Claude Code를 재시작하면 연결 완료입니다.
          터미널에서 <code>claude</code> 를 다시 입력해보세요.
        </Callout>

        {/* ── 만들기 ── */}
        <H2 id="build">이제 Claude Code에게 만들라고 합니다</H2>

        <p className="text-sm text-muted mb-6 leading-relaxed">
          세팅이 끝났으면, 이제 Claude Code가 SaaS를 만들어줄 차례입니다.
          VSCode 터미널에서 <code className="text-accent font-mono">claude</code> 를 실행하고,
          아래 <strong>마스터 프롬프트</strong>를 붙여넣으세요.
        </p>

        <div className="flex items-center gap-2 mb-3">
          <StepBadge n={4} />
          <p className="text-sm font-semibold">VSCode 터미널에서 Claude Code 실행</p>
        </div>
        <CodeBlock lang="bash">{`claude`}</CodeBlock>

        <div className="flex items-center gap-2 mt-8 mb-3">
          <StepBadge n={5} />
          <p className="text-sm font-semibold">
            마스터 프롬프트 — 대괄호 안만 바꿔서 붙여넣기
          </p>
        </div>

        <Callout>
          아래는 <strong>템플릿</strong>입니다. <code>[대괄호]</code> 부분을 내 아이디어로 바꾸세요.
          나머지는 그대로 복붙해도 됩니다.
        </Callout>

        <CodeBlock lang="text">{`나는 [어떤 서비스인지 한 줄로 설명] SaaS를 만들려고 해.

## 내 서비스 설명
- 서비스 이름: [이름]
- 핵심 기능: [사용자가 무엇을 할 수 있는지]
- 타깃 사용자: [누가 쓰는지]

## Supabase 정보
- Project URL: [.env.local에 넣은 URL]
- Anon Key: [.env.local에 넣은 키]
- MCP로 Supabase에 직접 접근 가능 (이미 연결됨)

## 만들어야 할 것들 (순서대로)
1. Supabase에 필요한 테이블 생성 (MCP 사용)
2. 랜딩 페이지 (/, 서비스 소개 + 시작하기 버튼)
3. 회원가입 / 로그인 페이지 (/login)
4. 로그인 후 대시보드 (/dashboard, 핵심 기능)
5. 로그아웃 버튼

## 기술 스택 (바꾸지 말 것)
- Next.js App Router + TypeScript + Tailwind CSS
- Supabase Auth + Supabase Database
- 한국어 UI

이 순서대로 하나씩 만들어줘. 각 단계가 끝나면 알려줘.`}</CodeBlock>

        <Callout variant="tip">
          <strong>예시:</strong> "[어떤 서비스인지]" 자리에 "포트폴리오 리뷰 요청을 받고 피드백을 주는" 이라고 쓰면,
          Claude Code가 그에 맞는 테이블, 페이지, 기능을 전부 만들어줍니다.
        </Callout>

        <div className="mt-8 rounded-xl border border-border bg-white p-5">
          <p className="text-sm font-semibold mb-3">
            채워진 예시 — 포트폴리오 리뷰 SaaS
          </p>
          <CodeBlock lang="text">{`나는 포트폴리오 리뷰 요청을 받고 피드백을 주는 SaaS를 만들려고 해.

## 내 서비스 설명
- 서비스 이름: ReviewDeck
- 핵심 기능: 사용자가 포트폴리오 링크를 올리면 전문가가 피드백을 남길 수 있음
- 타깃 사용자: 취업 준비생, 프리랜서 디자이너

## Supabase 정보
- Project URL: https://abcdefgh.supabase.co
- Anon Key: eyJhbGciOiJIUzI1NiJ9...
- MCP로 Supabase에 직접 접근 가능 (이미 연결됨)

## 만들어야 할 것들 (순서대로)
1. Supabase에 필요한 테이블 생성 (reviews, feedbacks)
2. 랜딩 페이지 (/, 서비스 소개 + 시작하기 버튼)
3. 회원가입 / 로그인 페이지 (/login)
4. 로그인 후 대시보드 (/dashboard, 리뷰 요청 목록 + 새 요청 버튼)
5. 로그아웃 버튼

## 기술 스택 (바꾸지 말 것)
- Next.js App Router + TypeScript + Tailwind CSS
- Supabase Auth + Supabase Database
- 한국어 UI

이 순서대로 하나씩 만들어줘. 각 단계가 끝나면 알려줘.`}</CodeBlock>
        </div>

        {/* ── 배포 ── */}
        <H2 id="deploy">배포 — 세상에 내보내기</H2>

        <p className="text-sm text-muted mb-6 leading-relaxed">
          Claude Code가 코드를 다 만들었으면, 이제 실제 URL이 생기도록 배포합니다.
          2단계면 끝납니다.
        </p>

        <div className="flex items-center gap-2 mb-2">
          <StepBadge n={6} />
          <p className="text-sm font-semibold">GitHub에 코드 올리기</p>
        </div>

        <p className="text-sm text-muted mb-3">
          먼저 <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">github.com/new</a> 에서
          새 레포지토리를 만드세요. (이름: my-saas, Public 또는 Private)
          그리고 아래를 터미널에 붙여넣으세요.
        </p>

        <CodeBlock lang="bash">{`git init
git add .
git commit -m "첫 커밋"
git remote add origin https://github.com/[내_깃헙_아이디]/my-saas.git
git push -u origin main`}</CodeBlock>

        <div className="flex items-center gap-2 mt-8 mb-2">
          <StepBadge n={7} />
          <p className="text-sm font-semibold">Vercel에서 배포</p>
        </div>

        <ol className="text-sm text-muted space-y-3 list-none">
          <li className="flex gap-3">
            <span className="text-accent font-mono font-bold shrink-0">01</span>
            <span>
              <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">vercel.com/new</a> 접속 →
              GitHub 연결 → my-saas 레포 선택
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-mono font-bold shrink-0">02</span>
            <span>
              <strong className="text-foreground">Environment Variables</strong> 섹션에서
              .env.local 에 있던 값 2개를 그대로 입력
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-mono font-bold shrink-0">03</span>
            <span>
              <strong className="text-foreground">Deploy</strong> 버튼 클릭 → 1-2분 후 URL이 생깁니다 🎉
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-mono font-bold shrink-0">04</span>
            <span>
              Supabase → Authentication → URL Configuration → Site URL 에
              Vercel이 준 URL 붙여넣기
            </span>
          </li>
        </ol>

        <Callout variant="tip">
          이제 그 URL을 누구한테나 보내면 로그인하고 실제로 쓸 수 있습니다.
          <strong className="block mt-1">이게 내 첫 SaaS입니다.</strong>
        </Callout>

        {/* ── Footer ── */}
        <footer className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">
            이 페이지도 Next.js + Tailwind + Supabase 스택으로 만들어졌습니다.
          </p>
          <p className="text-xs text-muted/60 mt-1">
            오늘 여러분이 만들 것과 똑같은 방법으로요.
          </p>
        </footer>
      </main>
    </>
  );
}
