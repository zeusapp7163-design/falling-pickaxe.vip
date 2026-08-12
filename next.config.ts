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
      {
        source: "/:path*",
        has: [{ type: "host", value: "falling-pickaxe-vip.vercel.app" }],
        destination: "https://falling-pickaxe.vip/:path*",
        permanent: true,
      },
      { source: "/ru", destination: "/", permanent: false },
      { source: "/ru/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
