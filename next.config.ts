import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.falling-pickaxe.vip" }],
        destination: "https://falling-pickaxe.vip/:path*",
        permanent: true,
      },
      // Keep *.vercel.app reachable in RU — do not force-redirect to the apex
      // (demo.black works the same way; custom-domain IPs are sometimes filtered).
      { source: "/ru", destination: "/", permanent: false },
      { source: "/ru/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
