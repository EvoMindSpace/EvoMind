import { NextRequest, NextResponse } from "next/server";

// ... existing code ...
export function middleware(request: NextRequest) {
	const user = request.cookies.get("user");
	// const isLoginOAuthPage = request.nextUrl.pathname === "/login/oauth";

	// // Cho phép truy cập trang login/oauth mà không cần kiểm tra user
	// if (isLoginOAuthPage) {
	// 	return NextResponse.next();
	// }

	if (Boolean(user) && request.nextUrl.pathname === "/") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	// if (!user && request.nextUrl.pathname.startsWith("/dashboard")) {
	// 	return NextResponse.redirect(new URL("/", request.url));
	// }

	return NextResponse.next();
}

export const config = {
	// matcher: ["/", "/dashboard/:path*", "/login/oauth"],
	matcher: ["/api/:path*"],
};
