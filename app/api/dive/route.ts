import { NextRequest, NextResponse } from "next/server";
import { fetchDeepDive } from "@/lib/llm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { hook, depth } = body as { hook: string; depth: number };

    if (!hook || depth === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: hook, depth" },
        { status: 400 }
      );
    }

    const result = await fetchDeepDive(hook, depth);
    return NextResponse.json(result);
  } catch (error) {
    console.error("[/api/dive]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
