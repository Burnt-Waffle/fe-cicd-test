export const dynamic = "force-dynamic"; // 정적 생성 방지 (항상 최신 Env 확인)

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>🚀 CI/CD Pipeline Verification</h1>
      <hr />
      
      <div style={{ marginTop: "1rem", lineHeight: "1.8" }}>
        <h3>1. Environment Check</h3>
        <ul>
          {/* Node 환경 (production 이어야 함) */}
          <li>
            <strong>NODE_ENV:</strong> {process.env.NODE_ENV}
          </li>
          
          {/* CI/CD에서 주입한 환경 (dev / staging / production) */}
          {/* 주의: 이 변수는 NEXT_PUBLIC_이 없으므로 서버 컴포넌트에서만 보임 */}
          <li>
            <strong>APP_ENV (Server Side):</strong>{" "}
            {process.env.APP_ENV || "❌ Not Injected"}
          </li>
        </ul>

        <h3>2. Release Version (Baked-in)</h3>
        <ul>
          {/* CI 빌드 시점에 박제된 릴리즈 태그 */}
          <li>
            <strong>NEXT_PUBLIC_RELEASE:</strong>{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              {process.env.NEXT_PUBLIC_RELEASE || "❌ Not Baked"}
            </span>
          </li>
        </ul>

        <h3>3. Secret Injection Check</h3>
        <ul>
           {/* GitHub Secrets에서 잘 넘어왔는지 확인 */}
          <li>
             <strong>API URL:</strong> {process.env.NEXT_PUBLIC_API_URL || "Empty"}
          </li>
        </ul>
      </div>

      <footer style={{ marginTop: "3rem", color: "#666" }}>
        <p>This page is rendered at: {new Date().toISOString()}</p>
      </footer>
    </main>
  );
}