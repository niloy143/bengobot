import { getLoggedInUser } from "@/app/lib/logged-in-user";
import { redirect } from "next/navigation";

export default async function Authenticated({ children }: { children: React.ReactNode }) {
	const user = await getLoggedInUser();

	if (!user) {
		return redirect("/login/");
	}

	return children;
}
