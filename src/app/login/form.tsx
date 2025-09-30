"use client";

import { useTransition } from "react";
import styles from "./page.module.scss";
import { t } from "@/utils/i18n";
import { ToastContainer, toast } from "react-toastify";

type Props = {
	handleLogin: (formData: FormData) => Promise<void>;
};

export default function LoginForm({ handleLogin }: Props) {
	const [loading, startTransition] = useTransition();

	async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		startTransition(async () => {
			await handleLogin(formData).catch((e) => {
				toast.error(e?.message || t("Login failed! Please try again."));
			});
		});
	}

	return (
		<form className={styles.form} onSubmit={handleLoginSubmit}>
			<div className={styles.input_group}>
				<label htmlFor="email">{t("Email")}</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div className={styles.input_group}>
				<label htmlFor="password">{t("Password")}</label>
				<input type="password" id="password" name="password" required />
			</div>
			<button type="submit" className={styles.btn_primary} disabled={loading}>
				{loading ? t("Logging in...") : t("Login")}
			</button>
			<ToastContainer position="bottom-center" stacked />
		</form>
	);
}
