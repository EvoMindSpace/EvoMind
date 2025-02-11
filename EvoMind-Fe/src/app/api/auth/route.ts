import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();

	// Đặt cookie
	cookies().set("user", JSON.stringify(body), {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24 * 7, // 1 tuần
		path: "/",
	});

	return NextResponse.json(body);
}
