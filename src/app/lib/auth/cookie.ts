import { cookies } from "next/headers";

export const AUTH_COOKIE_NAME = "auth_token";

export const token = {
	auth: {
		async get(): Promise<string> {
			const cookie = await cookies();
			const authCookie = cookie.get(AUTH_COOKIE_NAME);

			return authCookie?.value || "";
		},
		async set(token: string) {
			"use server";

			const cookie = await cookies();

			cookie.set({
				name: AUTH_COOKIE_NAME,
				value: token,
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 60 * 60 * 24 * 7,
				path: "/",
			});
		},
		async clear() {
			"use server";

			const cookie = await cookies();
			cookie.delete(AUTH_COOKIE_NAME);
		},
	},
};
