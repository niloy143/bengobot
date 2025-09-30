import { t } from "@/utils/i18n";
import { User } from "@/app/db/user";
import { session } from "@/app/lib/auth/session";
import { token } from "./cookie";

export async function login(email?: string, password?: string) {
	if (!email || !password) {
		throw new Error(t("Email and password are required"));
	}

	const user = await User.findByEmail(email);
	const isValidPassword = user?.password === password;

	if (!user || !isValidPassword) {
		throw new Error(t("Invalid email or password"));
	}

	const userWithoutPassword = { id: user.id, email: user.email };
	const authToken = await session.auth.create(user.id);

	await token.auth.set(authToken);

	return { user: userWithoutPassword, token: authToken };
}
