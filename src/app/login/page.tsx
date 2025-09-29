import { t } from "@/utils/i18n";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { token } from "@/app/lib/auth/cookie";
import { login } from "../lib/auth/login";
import { getLoggedInUser } from "../lib/logged-in-user";

export const metadata: Metadata = {
	title: t("Login to BengoBot - Access Your AI Chatbot Dashboard"),
	description: t("Login to your BengoBot account to manage your AI chatbot, view analytics, and customize your customer support experience."),
	robots: {
		index: false,
		follow: false,
	},
};

export default async function Login() {
	const user = await getLoggedInUser();

	if (user) {
		return redirect("/admin/");
	}

	async function handleLogin(formData: FormData) {
		"use server";

		try {
			const email = formData.get("email")?.toString() || "";
			const password = formData.get("password")?.toString() || "";

			await login(email, password);

			redirect("/admin/");
		} catch {}
	}

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Link href="/">
					<Image src="/icons/logo.svg" alt="BengoBot Logo" width={90} height={90} />
				</Link>
				<h1>{t("Login to BengoBot")}</h1>
			</header>

			<main className={styles.main}>
				<form className={styles.form} action={handleLogin}>
					<div className={styles.input_group}>
						<label htmlFor="email">{t("Email")}</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div className={styles.input_group}>
						<label htmlFor="password">{t("Password")}</label>
						<input type="password" id="password" name="password" required />
					</div>
					<button type="submit" className={styles.btn_primary}>
						{t("Login")}
					</button>
				</form>
				<p className={styles.link}>
					{t("Don't have an account?")} <Link href="/register">{t("Register here")}</Link>
				</p>
			</main>
		</div>
	);
}
