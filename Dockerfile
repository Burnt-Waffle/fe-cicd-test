# Frontend Dockerfile
FROM node:24-alpine

WORKDIR /app

# Alpine(musl) 환경에서 Ubuntu(glibc) 호환성을 위해 필요
RUN apk add --no-cache libc6-compat

# Standalone 빌드 복사 (CI에서 빌드됨)
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public

# 비루트 사용자로 실행
RUN chown -R nobody:nobody /app
USER nobody

# 포트 노출 (기본값)
EXPOSE 3000

# 런타임 환경변수
ENV NODE_ENV=production

# 애플리케이션 실행
CMD ["node", "server.js"]