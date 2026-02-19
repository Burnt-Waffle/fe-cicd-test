/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🐳 Docker 배포를 위해 필수!
  // 빌드 시 .next/standalone 폴더에 필요한 파일만 모아줌
  output: "standalone",

  // 이미지 최적화 (Docker Alpine 사용 시 libc6-compat 필요)
  images: {
    unoptimized: true, // 테스트용으로 최적화 꺼두면 sharp 설치 문제 회피 가능 (선택사항)
  },
};

module.exports = nextConfig;