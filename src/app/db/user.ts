export class User {
	private static users = [
		{ id: "53b3e63721fe6fc82cbc964c", email: "test@gmail.com", password: "password" },
		{ id: "64ae4814ea175813604b0f18", email: "test1@gmail.com", password: "password" },
		{ id: "bc4212042cfaf649899ce3ee", email: "test2@gmail.com", password: "password" },
		{ id: "9b12467d119f56714021b51c", email: "test3@gmail.com", password: "password" },
		{ id: "680903d5a6499d33ef982f5f", email: "test4@gmail.com", password: "password" },
	];

	constructor() {}

	static async find() {
		return User.users;
	}

	static async findById(userId: string) {
		return User.users.find((u) => u.id === userId);
	}

	static async findByEmail(email: string) {
		return User.users.find((u) => u.email === email);
	}

	static async create(email: string, password: string) {
		const existingUser = await User.findByEmail(email);

		if (existingUser?.email === email) {
			throw new Error("User already exists");
		}

		const newUser = { id: Math.random().toString().split(".").join(""), email, password };
		User.users.push(newUser);

		return newUser;
	}
}
