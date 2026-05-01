import { CodeBlock } from "@/components/CodeBlock";
import { PlatformTabs } from "@/components/PlatformTabs";
import { Section } from "@/components/Section";
import { Callout } from "@/components/Callout";
import { TopNav } from "@/components/TopNav";

export default function Home() {
  return (
    <>
      <TopNav />

      <main id="top" className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-accent-soft text-accent border border-accent/20">
            <span>🟠</span>
            <span>Claude Code 워크숍 · 비개발자용</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            오늘,{" "}
            <span className="bg-gradient-to-r from-accent to-amber-600 bg-clip-text text-transparent">
              내 첫 SaaS
            </span>
            를<br />
            세상에 띄웁니다.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            코딩을 한 번도 안 해봐도 괜찮아요.
            <br />
            이 페이지를 따라하면 2-3시간 안에 진짜 동작하는 SaaS가 나옵니다.
            <br />
            <span className="text-foreground font-medium">
              이 페이지조차도 똑같은 방법으로 만들어졌어요.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#prep"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition"
            >
              지금 시작하기 →
            </a>
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full border border-border hover:border-foreground/30 transition"
            >
              뭘 쓸까?
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <Stat n="2-3h" l="총 소요시간" />
            <Stat n="0줄" l="직접 쓰는 코드" />
            <Stat n="1개" l="배포된 URL" />
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="scroll-mt-20 py-12 border-t border-border">
          <h2 className="text-xl font-bold mb-2">우리가 쓸 도구</h2>
          <p className="text-sm text-muted mb-6">
            바이브 코딩에 필요한 것들만. 그 이상은 없습니다.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <Tool emoji="🟢" name="Node.js" desc="모든 게 돌아가는 런타임" />
            <Tool emoji="🤖" name="Claude Code" desc="당신의 페어 프로그래머" />
            <Tool emoji="⚡" name="Next.js" desc="웹 프레임워크" />
            <Tool emoji="🎨" name="Tailwind CSS" desc="디자인 시스템" />
            <Tool emoji="🗄️" name="Supabase" desc="DB + 로그인" />
            <Tool emoji="🔌" name="Supabase MCP" desc="Claude가 DB 직접 제어" />
            <Tool emoji="🐙" name="GitHub" desc="코드 저장소" />
            <Tool emoji="▲" name="Vercel" desc="배포 (1클릭)" />
          </ul>
        </section>

        {/* Phase 1: Prep */}
        <Section
          id="prep"
          step="STEP 1"
          time="20분 (수업 전날 권장)"
          title="사전 준비"
          subtitle="설치 1개, 계정 3개. 한 번만 하면 평생 씁니다."
        >
          <h3 className="text-base font-semibold mt-6 mb-2">1. Node.js 설치</h3>
          <p className="text-sm leading-relaxed">
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:no-underline"
            >
              nodejs.org
            </a>{" "}
            접속 → <strong>LTS</strong> 버전 다운로드 → 다운받은 파일 실행 →
            모든 화면에서 그냥 다음 클릭.
          </p>
          <p className="text-sm text-muted mt-2">설치 후 터미널 열기:</p>
          <PlatformTabs
            mac={
              <div className="text-sm">
                <span className="text-muted">Spotlight</span>{" "}
                <kbd className="px-1.5 py-0.5 text-xs rounded border border-border bg-white font-mono">
                  ⌘ Space
                </kbd>{" "}
                <span className="text-muted">→ &quot;터미널&quot; 검색 → 실행</span>
              </div>
            }
            windows={
              <div className="text-sm">
                <span className="text-muted">시작 메뉴 → &quot;cmd&quot; 검색 → 실행</span>
              </div>
            }
          />
          <p className="text-sm text-muted mt-3">설치 확인:</p>
          <CodeBlock code="node --version" />
          <Callout variant="tip">
            <code>v22.x.x</code> 같은 숫자가 나오면 성공. 안 되면 컴퓨터 재시작 후 다시.
          </Callout>

          <h3 className="text-base font-semibold mt-8 mb-2">2. 계정 만들기 (무료)</h3>
          <ul className="space-y-2 text-sm">
            <AccountItem href="https://github.com" name="GitHub" desc="코드 저장소" />
            <AccountItem href="https://supabase.com" name="Supabase" desc="DB + 로그인 기능" />
            <AccountItem
              href="https://vercel.com"
              name="Vercel"
              desc="배포 (GitHub 계정으로 가입 권장)"
            />
          </ul>

          <h3 className="text-base font-semibold mt-8 mb-2">3. Claude Code 설치</h3>
          <p className="text-sm">터미널에 복붙:</p>
          <CodeBlock code="npm install -g @anthropic-ai/claude-code" />
          <p className="text-sm">로그인 (브라우저 자동 열림):</p>
          <CodeBlock code="claude login" />
          <Callout variant="info">
            Claude Pro 구독 ($20/월)이 필요합니다. 없으면{" "}
            <a
              className="underline"
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              claude.ai
            </a>
            에서 먼저 가입하세요.
          </Callout>

          <h3 className="text-base font-semibold mt-8 mb-2">
            4. Supabase 프로젝트 만들기
          </h3>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>
              <a
                className="text-accent underline"
                href="https://supabase.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                supabase.com
              </a>{" "}
              로그인 → <strong>New project</strong>
            </li>
            <li>이름: <code>my-saas</code></li>
            <li>비밀번호 설정 (꼭 메모)</li>
            <li>Region: <strong>Northeast Asia (Tokyo)</strong></li>
            <li>1-2분 대기</li>
          </ol>
          <p className="text-sm mt-3">
            완료 후 <strong>Settings → API</strong> 에서 3가지 값 복사:
          </p>
          <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
            <li>
              <code>Project URL</code> → 환경변수에 사용
            </li>
            <li>
              <code>anon public</code> key → 환경변수에 사용
            </li>
            <li>
              <code>service_role</code> key → MCP 설정에서만 사용 (절대 외부 공개 X)
            </li>
          </ul>
        </Section>

        {/* Phase 2: Setup */}
        <Section
          id="setup"
          step="STEP 2"
          time="20분"
          title="프로젝트 만들기"
          subtitle="Next.js + Tailwind + Supabase 셋업. 명령어 4개면 끝."
        >
          <p className="text-sm">바탕화면으로 이동:</p>
          <CodeBlock code="cd ~/Desktop" />

          <p className="text-sm mt-3">Next.js 프로젝트 생성:</p>
          <CodeBlock code='npx create-next-app@latest my-saas --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"' />
          <Callout variant="tip">
            설치 중 질문이 나오면 전부{" "}
            <kbd className="px-1.5 py-0.5 text-xs rounded border border-border bg-white font-mono">
              엔터
            </kbd>{" "}
            (기본값 사용)
          </Callout>

          <p className="text-sm mt-3">폴더로 이동 + 개발 서버 실행:</p>
          <CodeBlock code={`cd my-saas\nnpm run dev`} />
          <p className="text-sm">
            브라우저에서{" "}
            <a
              className="text-accent underline"
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:3000
            </a>{" "}
            열기 → Next.js 시작 화면이 보이면 성공! 🎉
          </p>

          <Callout variant="warn">
            개발 서버가 터미널을 차지합니다. 다음 명령어부터는{" "}
            <strong>새 터미널 탭</strong>에서 실행하세요.
            <br />
            Mac:{" "}
            <kbd className="px-1.5 py-0.5 text-xs rounded border border-amber-300 bg-white font-mono">
              ⌘T
            </kbd>{" "}
            · Windows: 새 창 열기
          </Callout>

          <p className="text-sm mt-4">새 탭에서 Supabase 패키지 설치:</p>
          <CodeBlock
            code={`cd ~/Desktop/my-saas\nnpm install @supabase/supabase-js @supabase/ssr`}
          />

          <h3 className="text-base font-semibold mt-8 mb-2">환경변수 설정</h3>
          <p className="text-sm mb-2">
            <code>.env.local</code> 파일을 만들고 편집:
          </p>
          <PlatformTabs
            mac={<CodeBlock code="nano .env.local" />}
            windows={<CodeBlock code="notepad .env.local" />}
          />
          <p className="text-sm mt-2">
            파일에 아래 내용 입력 (값은 사전 준비에서 메모한 것):
          </p>
          <CodeBlock
            code={`NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co\nNEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...`}
          />
          <Callout variant="warn">
            <code>service_role</code> key는 여기에 넣지 마세요. 다음 단계(MCP 설정)에서만
            씁니다.
          </Callout>
          <p className="text-sm mt-2">저장:</p>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>
              Mac (nano):{" "}
              <kbd className="px-1.5 py-0.5 text-xs rounded border border-border bg-white font-mono">
                Ctrl+O
              </kbd>{" "}
              →{" "}
              <kbd className="px-1.5 py-0.5 text-xs rounded border border-border bg-white font-mono">
                Enter
              </kbd>{" "}
              →{" "}
              <kbd className="px-1.5 py-0.5 text-xs rounded border border-border bg-white font-mono">
                Ctrl+X
              </kbd>
            </li>
            <li>
              Windows (notepad):{" "}
              <kbd className="px-1.5 py-0.5 text-xs rounded border border-border bg-white font-mono">
                Ctrl+S
              </kbd>{" "}
              → 닫기
            </li>
          </ul>
        </Section>

        {/* Phase 3: MCP */}
        <Section
          id="mcp"
          step="STEP 3"
          time="15분"
          title="Supabase MCP 연결"
          subtitle='Claude가 DB를 직접 만지게 만들기. "users 테이블 만들어줘" 한 마디면 됩니다.'
        >
          <p className="text-sm">Claude Code 설정 파일 열기:</p>
          <PlatformTabs
            mac={<CodeBlock code="nano ~/.config/claude-code/config.json" />}
            windows={
              <CodeBlock code={`notepad %APPDATA%\\claude-code\\config.json`} />
            }
          />
          <Callout variant="warn">
            이 파일에는 <code>service_role</code> key가 들어갑니다. 화면 공유 중에는 열지
            마세요.
          </Callout>

          <p className="text-sm mt-3">아래 내용 그대로 붙여넣기:</p>
          <CodeBlock
            code={`{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase@latest",
        "--supabase-url",
        "여기에_Project_URL",
        "--service-role-key",
        "여기에_service_role_key"
      ]
    }
  }
}`}
          />

          <p className="text-sm mt-3">저장 후 새 터미널 탭에서:</p>
          <CodeBlock code={`cd ~/Desktop/my-saas\nclaude`} />
          <p className="text-sm">Claude가 시작되면 입력:</p>
          <CodeBlock
            label="claude 프롬프트"
            code="Supabase MCP가 연결됐는지 확인해줘. 현재 테이블 목록을 보여줘."
          />

          <Callout variant="info">
            <strong>안 되면?</strong> 터미널 종료 후 다시 <code>claude</code>. 그래도 안
            되면 MCP 없이 진행 가능 — Supabase 웹의 Table Editor를 직접 쓰면 됩니다.
          </Callout>
        </Section>

        {/* Phase 4: Plan */}
        <Section
          id="plan"
          step="STEP 4"
          time="30분"
          title="기획 (PRD)"
          subtitle="아이디어를 Claude에게 던지면, 사용자 정의·기능·DB 구조까지 한 번에 정리됩니다."
        >
          <p className="text-sm mb-2">
            아래 프롬프트를 Claude에 입력하세요. <code>[대괄호]</code>는 본인 내용으로:
          </p>
          <CodeBlock
            label="기획 프롬프트"
            code={`나는 [서비스 이름 또는 아이디어]를 만들고 싶어.

이 서비스가 필요한 이유:
[왜 이게 필요한가? 어떤 문제를 해결하는가?]

주요 사용자:
[누가 쓸 것인가? 구체적으로.]

지금 사람들이 이 문제를 어떻게 해결하고 있나:
[기존 방법, 불편한 점]

아래 형식으로 PRD를 만들어줘:
1. 제품 이름 및 한 줄 설명
2. 핵심 사용자 페르소나 (이름, 역할, 목표, 고통)
3. 핵심 기능 3가지
4. 성공 지표 3가지 (측정 가능한 것)
5. Supabase 테이블 구조 (최소 3개, 컬럼 포함)`}
          />

          <details className="mt-4 text-sm">
            <summary className="cursor-pointer text-accent font-medium">
              📝 채워진 예시 보기 (포트폴리오 리뷰 SaaS)
            </summary>
            <div className="mt-2">
              <CodeBlock
                code={`나는 포트폴리오 리뷰 플랫폼을 만들고 싶어.

이 서비스가 필요한 이유:
취준생이 이력서/포트폴리오 피드백을 받으려면 지인에게 부탁하거나
비싼 멘토링을 써야 해. 빠르고 실용적인 채널이 없어.

주요 사용자:
디자인/개발 직군 취준생, 경력 1-3년차 이직 준비자

지금 사람들이 이 문제를 어떻게 해결하고 있나:
SNS나 오픈카톡방에서 무료 피드백 요청. 시간 오래 걸리고 품질이 들쭉날쭉.

아래 형식으로 PRD를 만들어줘: (위와 동일)`}
              />
            </div>
          </details>

          <p className="text-sm mt-4">PRD가 나오면 마음에 드는지 확인하고:</p>
          <CodeBlock code="좋아. 이 PRD를 기반으로 Supabase MCP를 사용해서 테이블을 실제로 만들어줘. RLS도 설정해줘." />
        </Section>

        {/* Phase 5: Design */}
        <Section
          id="design"
          step="STEP 5"
          time="45분"
          title="페이지 디자인"
          subtitle="랜딩 → 로그인 → 대시보드. 한 단계씩 Claude에게 부탁하세요."
        >
          <h3 className="text-base font-semibold mt-2 mb-2">랜딩 페이지</h3>
          <CodeBlock
            label="claude 프롬프트"
            code={`내 SaaS의 랜딩 페이지를 만들어줘.
- Tailwind CSS 사용
- 한국어
- 섹션: 네비, 히어로, 기능 3가지 카드, 하단 CTA, 푸터
- 깔끔하고 모던하게
- src/app/page.tsx 수정`}
          />

          <h3 className="text-base font-semibold mt-6 mb-2">로그인 + 회원가입</h3>
          <CodeBlock
            code={`Supabase Auth로 이메일 로그인/회원가입 페이지를 만들어줘.
- /login, /signup 라우트
- Tailwind 스타일링
- 로그인 후 /dashboard로 이동
- 에러 메시지는 한국어로`}
          />

          <h3 className="text-base font-semibold mt-6 mb-2">대시보드</h3>
          <CodeBlock
            code={`로그인한 사용자만 접근 가능한 대시보드를 만들어줘.
- /dashboard 라우트
- PRD에서 정한 핵심 기능을 보여주는 UI
- 실제 Supabase 데이터와 연결
- 로그아웃 안 하면 /login으로 리다이렉트`}
          />

          <Callout variant="tip">
            <code>http://localhost:3000</code>에서 실시간으로 확인하면서 진행하세요. 마음에
            안 들면 &quot;더 모던하게&quot;, &quot;더 심플하게&quot; 같이 부탁하면 됩니다.
          </Callout>
        </Section>

        {/* Phase 6: Deploy */}
        <Section
          id="deploy"
          step="STEP 6"
          time="20분"
          title="배포 — 세상에 띄우기"
          subtitle="GitHub에 올리고, Vercel에 연결. 5분 후 진짜 URL이 나옵니다."
        >
          <h3 className="text-base font-semibold mt-2 mb-2">1. 비밀 파일 보호 확인</h3>
          <CodeBlock code="cat .gitignore | grep env" />
          <p className="text-sm">
            <code>.env.local</code>이 출력되면 안전합니다 (Next.js 기본 설정).
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">2. GitHub 저장소</h3>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>
              <a
                className="text-accent underline"
                href="https://github.com/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/new
              </a>{" "}
              → 저장소 이름 <code>my-saas</code> → <strong>Private</strong> 권장
            </li>
            <li>Create repository</li>
          </ol>

          <p className="text-sm mt-3">
            코드 올리기 (<code>[GitHub_아이디]</code>를 본인 아이디로):
          </p>
          <CodeBlock
            code={`git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/[GitHub_아이디]/my-saas.git
git push -u origin main`}
          />

          <h3 className="text-base font-semibold mt-6 mb-2">3. Vercel 배포</h3>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>
              <a
                className="text-accent underline"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/new
              </a>{" "}
              → GitHub 저장소 <code>my-saas</code> 선택
            </li>
            <li>
              <strong>Environment Variables</strong>에{" "}
              <code>NEXT_PUBLIC_SUPABASE_URL</code>,{" "}
              <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> 입력
            </li>
            <li>
              <strong>Deploy</strong> 클릭 → 5-10분 대기
            </li>
            <li>
              <code>https://my-saas-xxx.vercel.app</code> 형태의 URL 획득 🎉
            </li>
          </ol>

          <Callout variant="info">
            <strong>Supabase 허용 URL 추가</strong>: Supabase → Authentication → URL
            Configuration → Site URL에 배포된 URL 입력.
          </Callout>
        </Section>

        {/* Phase 7: AI */}
        <Section
          id="ai"
          step="STEP 7"
          time="선택 (30분~)"
          title="AI 기능 추가 (선택)"
          subtitle="단순 SaaS를 진짜 AI SaaS로. 이게 제품의 차별점이 됩니다."
        >
          <p className="text-sm">
            <a
              className="text-accent underline"
              href="https://console.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              console.anthropic.com
            </a>{" "}
            에서 API 키 발급 → <code>.env.local</code>에 추가:
          </p>
          <CodeBlock code="ANTHROPIC_API_KEY=sk-ant-..." />

          <p className="text-sm mt-3">SDK 설치:</p>
          <CodeBlock code="npm install @anthropic-ai/sdk" />

          <p className="text-sm mt-3">Claude에게 부탁:</p>
          <CodeBlock
            code={`내 SaaS의 [기능 이름]에 AI를 추가하고 싶어.

현재: 사용자가 [현재 플로우]를 함
개선: [AI가 어떤 역할을 할지]

Claude API (claude-sonnet-4-5)를 써서 구현해줘.
스트리밍으로 응답이 실시간으로 보이게 해줘.`}
          />

          <Callout variant="tip">
            예시 — 콘텐츠 생성, 분석/피드백, 채팅 어시스턴트, 자동화 에이전트. PRD의 핵심
            기능 중 하나를 골라 AI로 강화하는 게 가장 임팩트 큽니다.
          </Callout>
        </Section>

        {/* Final */}
        <section className="border-t border-border pt-16 pb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">축하해요. 🎉</h2>
          <p className="mt-4 text-muted text-base leading-relaxed">
            방금 처음으로 SaaS를 세상에 띄웠어요.
            <br />
            이제 친구한테 URL을 보내고, 첫 사용자를 받을 시간이에요.
          </p>
          <div className="mt-8 inline-flex flex-col gap-3 text-sm text-muted">
            <p>다음에 할 만한 것:</p>
            <ul className="text-left space-y-1.5">
              <li>· 결제 추가 (Stripe)</li>
              <li>· 커스텀 도메인 연결</li>
              <li>· 분석 대시보드 (Mixpanel, Vercel Analytics)</li>
              <li>· 첫 사용자 10명 모집</li>
            </ul>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-border text-xs text-muted text-center">
          <p>이 페이지는 Next.js + Tailwind + Supabase로 만들어졌습니다. 똑같은 스택으로요.</p>
          <p className="mt-1">© 2026 · 바이브 코딩 워크숍</p>
        </footer>
      </main>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-white px-3 py-4">
      <div className="text-xl md:text-2xl font-bold tracking-tight">{n}</div>
      <div className="text-xs text-muted mt-1">{l}</div>
    </div>
  );
}

function Tool({ emoji, name, desc }: { emoji: string; name: string; desc: string }) {
  return (
    <li className="flex items-start gap-3 rounded-lg border border-border bg-white px-4 py-3">
      <span className="text-xl shrink-0" aria-hidden>
        {emoji}
      </span>
      <div className="min-w-0">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-muted truncate">{desc}</div>
      </div>
    </li>
  );
}

function AccountItem({
  href,
  name,
  desc,
}: {
  href: string;
  name: string;
  desc: string;
}) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-lg border border-border bg-white px-4 py-2.5">
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-muted">{desc}</div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs px-3 py-1.5 rounded-md border border-border hover:border-foreground/30 transition"
      >
        가입 →
      </a>
    </li>
  );
}
