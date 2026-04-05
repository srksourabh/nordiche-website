export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(1).max(100),
  industry: z.string().min(1),
  description: z.string().min(20).max(2000),
  capacity: z.string().min(1),
  phone: z.string().min(7).max(20),
  email: z.string().email(),
  source: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    if (!rawBody.trim()) {
      return NextResponse.json({ error: "Request body is required." }, { status: 400 });
    }

    const body = JSON.parse(rawBody) as unknown;
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    console.log("New contact submission:", parsed.data);

    return NextResponse.json(
      { success: true, message: "Submission received. We will respond within 24 hours." },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
