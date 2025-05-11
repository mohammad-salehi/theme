/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: false,
  // experimental: {
  //   esmExternals: false,
  // },
  env: {
    CUSTOM_VAR: process.env.NODE_ENV === 'production' 
      ? 'Production Value' 
      : 'Development Value',
  },
  webpack(config, { isServer }) {
    // مثال: اضافه کردن rule جدید برای پردازش فایل‌های SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // برای استفاده از SVG به عنوان کامپوننت React
    });

    // مثال: تغییرات برای حالت کلاینت (هنگام بیلد برای مرورگر)
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // اگر از fs در کد کلاینت استفاده می‌کنید
        path: false, // اگر از path در کد کلاینت استفاده می‌کنید
        os: false, // اگر از os در کد کلاینت استفاده می‌کنید
      };
    }

    return config;
  },
};

module.exports = nextConfig;