import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 등 정적 호스팅을 위한 설정
  output: "export",
  trailingSlash: true,
  images: {
    // 정적 배포에서는 Next.js 이미지 최적화 서버가 없으므로 비활성화
    unoptimized: true,
  },
};

export default nextConfig;
