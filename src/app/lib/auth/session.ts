import jwt from "jsonwebtoken";
import { token } from "./cookie";

type JwtPayload = { userId: string };
const secret = process.env.JWT_SECRET || "";

export const session = {
	auth: {
		async create(userId: string) {
			const authToken = jwt.sign({ userId }, secret, { expiresIn: "1h" });
			await token.auth.set(authToken);

			return authToken;
		},
		async get() {
			const authToken = await token.auth.get();
			const decoded = jwt.verify(authToken, secret);

			return decoded as JwtPayload;
		},
	},
};
