import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { email, password } = body;

	// Thực hiện xác thực ở đây (ví dụ: kiểm tra database)
	// Giả sử xác thực thành công và trả về dữ liệu người dùng
	const user = {
		id: 1,
		username: "Đặng Tiến Hưng",
		email: email,
		img: "https://example.com/avatar.jpg",
		total_request: 1,
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	};
	console.log("🚀 ~ POST ~ user:", user);

	// Đặt cookie
	cookies().set("user", JSON.stringify(user), {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24 * 7, // 1 tuần
		path: "/",
	});

	return NextResponse.json(user);
}
