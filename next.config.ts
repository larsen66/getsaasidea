import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Оптимизация производительности
  compress: true,
  poweredByHeader: false,
  
  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Экспериментальные оптимизации
  experimental: {
    optimizeCss: true,
  },
  
  // Оптимизация сборки
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
