/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // Anyone hitting /phase on the brand hub bounces to the product site
      { source: "/phase", destination: "https://thisisphase.co", permanent: true },
      { source: "/the-phase", destination: "https://thisisphase.co", permanent: true },
      // Canonical hub redirects
      { source: "/about", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
