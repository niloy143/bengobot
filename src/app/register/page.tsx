import styles from "./page.module.scss";
import { t } from "../../utils/i18n";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Register for BengoBot - Create Your AI Chatbot Account",
	description: "Sign up for BengoBot and choose your pricing plan. Easy setup in minutes, start with our Starter plan at $29/month.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function Register() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Link href="/">
					<Image src="/icons/logo.svg" alt="BengoBot Logo" width={90} height={90} />
				</Link>
				<h1>{t("Register for BengoBot")}</h1>
			</header>

			<main className={styles.main}>
				<form className={styles.form}>
					<div className={styles.input_group}>
						<label htmlFor="name">{t("Name")}</label>
						<input type="text" id="name" name="name" required />
					</div>
					<div className={styles.input_group}>
						<label htmlFor="email">{t("Email")}</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div className={styles.input_group}>
						<label htmlFor="password">{t("Password")}</label>
						<input type="password" id="password" name="password" required />
					</div>
					<div className={styles.input_group}>
						<label htmlFor="confirmPassword">{t("Confirm Password")}</label>
						<input type="password" id="confirmPassword" name="confirmPassword" required />
					</div>
					<button type="submit" className={styles.btn_primary}>
						{t("Register")}
					</button>
				</form>
				<p className={styles.link}>
					{t("Already have an account?")} <Link href="/login">{t("Login here")}</Link>
				</p>
			</main>
		</div>
	);
}
