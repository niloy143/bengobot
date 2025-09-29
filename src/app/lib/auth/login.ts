import { t } from "@/utils/i18n";
import { User } from "@/app/db/user";
import { session } from "@/app/lib/auth/session";
import { token } from "./cookie";

export async function login(email?: string, password?: string) {
	if (!email || !password) {
		throw { message: t("Email and password are required"), status: 400 };
	}

	const user = await User.findByEmail(email);
	const isValidPassword = user?.password === password;

	if (!user || !isValidPassword) {
		throw { message: t("Invalid email or password"), status: 400 };
	}

	const userWithoutPassword = { id: user.id, email: user.email };
	const authToken = await session.auth.create(user.id);

	await token.auth.set(authToken);

	return { user: userWithoutPassword, token: authToken };
}
