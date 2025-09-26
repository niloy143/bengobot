import { t } from "../../utils/i18n";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Login() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Link href="/">
					<Image src="/icons/logo.svg" alt="BengoBot Logo" width={90} height={90} />
				</Link>
				<h1>{t("Login to BengoBot")}</h1>
			</header>

			<main className={styles.main}>
				<form className={styles.form}>
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
