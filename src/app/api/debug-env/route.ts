import { NextResponse } from "next/server";

// TEMPORARY debug endpoint – remove after fixing Railway env vars
export async function GET() {
  const dbRelatedKeys = Object.keys(process.env).filter(
    (k) =>
      k.includes("DATABASE") ||
      k.includes("POSTGRES") ||
      k.includes("RAILWAY") ||
      k.includes("DB") ||
      k.includes("NEXTAUTH") ||
      k.includes("NODE_ENV")
  );

  // Show keys and first/last 4 chars of values (safe partial reveal)
  const info: Record<string, string> = {};
  for (const key of dbRelatedKeys) {
    const val = process.env[key] || "";
    if (val.length > 10) {
      info[key] = `${val.slice(0, 4)}...${val.slice(-4)} (len=${val.length})`;
    } else {
      info[key] = val ? `[set, len=${val.length}]` : "[empty]";
    }
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    nodeEnv: process.env.NODE_ENV,
    totalEnvKeys: Object.keys(process.env).length,
    dbRelatedKeys: info,
  });
}
