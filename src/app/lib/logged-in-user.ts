import { User } from "../db/user";
import { session } from "./auth/session";

export async function getLoggedInUser() {
	"use server";

	try {
		const payload = await session.auth.get();

		if (!payload?.userId) return null;

		const user = await User.findById(payload?.userId);

		if (!user) return null;

		const userWithoutPassword = { id: user.id, email: user.email };

		return userWithoutPassword;
	} catch {
		return null;
	}
}
