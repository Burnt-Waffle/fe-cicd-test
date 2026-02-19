/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 이 줄이 없으면 Docker 배포용 폴더(.next/standalone)가 안 생김!
  output: "standalone",

  // (선택 사항) 이미지 최적화 끄기 (Alpine Linux 호환성 위해)
  // images: { unoptimized: true } 
};

module.exports = nextConfig;