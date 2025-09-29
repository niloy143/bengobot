export class User {
	private static users = [
		{ id: "1", email: "test@gmail.com", password: "password" },
		{ id: "2", email: "test1@gmail.com", password: "password" },
		{ id: "3", email: "test2@gmail.com", password: "password" },
		{ id: "4", email: "test3@gmail.com", password: "password" },
		{ id: "5", email: "test4@gmail.com", password: "password" },
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
