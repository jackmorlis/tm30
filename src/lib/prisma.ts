import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function getDatabaseUrl(): string {
  // Railway may inject the URL under different variable names
  const url =
    process.env.DATABASE_URL ||
    process.env.DATABASE_PUBLIC_URL ||
    process.env.DATABASE_PRIVATE_URL;

  if (!url) {
    // Log all env var keys (not values) for debugging
    const keys = Object.keys(process.env)
      .filter(
        (k) =>
          k.includes("DATABASE") ||
          k.includes("POSTGRES") ||
          k.includes("RAILWAY") ||
          k.includes("DB")
      )
      .join(", ");
    console.error(
      `[prisma] No DATABASE_URL found. Related env keys: [${keys}]`
    );
    throw new Error(
      `DATABASE_URL is not set. Available DB-related keys: [${keys}]`
    );
  }

  return url;
}

function createPrismaClient() {
  const url = getDatabaseUrl();
  return new PrismaClient({
    datasources: {
      db: { url },
    },
  });
}

export function getPrisma() {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }
  return globalForPrisma.prisma;
}

// Keep backward compat — lazy getter
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrisma();
    return (client as unknown as Record<string | symbol, unknown>)[prop];
  },
});
