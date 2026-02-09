import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure server-side env vars are available at runtime (not inlined at build)
  serverExternalPackages: ["@prisma/client", "bcryptjs"],
};

export default nextConfig;
