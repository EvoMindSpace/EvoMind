import axios, { AxiosInstance } from "axios";

// import { refreshTokenApi } from '@/features/(auth)/api/auth.api';

class Http {
	instance: AxiosInstance;
	constructor(url: string) {
		this.instance = axios.create({
			baseURL: url,
			headers: {
				"Content-Type": "application/json",
			},
		});

		// this.requestInterceptor();
		// this.responseInterceptor();
	}

	// interceptors request refresh token
	// requestInterceptor() {
	// 	this.instance.interceptors.request.use(
	// 		async (config) => {
	// 			// lấy token từ header xem có không nếu không cso thì chuyển qua trang login
	// 			const token = config.headers.Authorization;
	// 			// cắt chuỗi để lấy token
	// 			const accessToken = (token as string)?.split(" ")[1];
	// 			if (!accessToken) {
	// 				// chuyển qua trang login
	// 				window.location.href = "/en/login";
	// 			}

	// 			return config;
	// 		},
	// 		(error) => {
	// 			return Promise.reject(error);
	// 		}
	// 	);
	// }

	// interceptors response
	responseInterceptor() {
		this.instance.interceptors.response.use(
			async (response) => {
				return response;
			},
			(error) => {
				return Promise.reject(error);
			}
		);
	}
}

export const instances = (url: string) => {
	const http = new Http(url);

	return http.instance;
};
