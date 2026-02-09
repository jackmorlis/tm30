import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/residences — list user's residences
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const residences = await prisma.residence.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(residences);
  } catch (error) {
    console.error("Error fetching residences:", error);
    return NextResponse.json(
      { error: "Failed to fetch residences" },
      { status: 500 }
    );
  }
}

// POST /api/residences — create a new residence
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, address, subdistrict, district, province, postalCode, phone } =
      body;

    if (!name || !address) {
      return NextResponse.json(
        { error: "Name and address are required" },
        { status: 400 }
      );
    }

    const residence = await prisma.residence.create({
      data: {
        userId: session.user.id,
        name,
        address,
        subdistrict: subdistrict || null,
        district: district || null,
        province: province || null,
        postalCode: postalCode || null,
        phone: phone || null,
      },
    });

    return NextResponse.json(residence, { status: 201 });
  } catch (error) {
    console.error("Error creating residence:", error);
    return NextResponse.json(
      { error: "Failed to create residence" },
      { status: 500 }
    );
  }
}
