import styles from "./page.module.scss";
import { t } from "@/utils/i18n";
import Image from "next/image";

export default function Home() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Image src="/icons/logo.svg" alt="BengoBot Logo" width={90} height={90} />
				<h1>{t("BengoBot")}</h1>
				<p>{t("Smart, lightweight AI chatbot for your website.")}</p>
				<a href="#waitlist" className={styles.btnPrimary}>{t("Get Started Free")}</a>
			</header>

			<section className={styles.section}>
				<h2>{t("Why Choose BengoBot?")}</h2>
				<div className={styles.features}>
					<div className={styles.feature}>
						<h3>{t("⚡ Instant Replies")}</h3>
						<p>{t("Customers get answers in real-time, 24/7.")}</p>
					</div>
					<div className={styles.feature}>
						<h3>{t("🌍 Multilingual")}</h3>
						<p>{t("Supports multiple languages for global reach.")}</p>
					</div>
					<div className={styles.feature}>
						<h3>{t("🔒 Secure")}</h3>
						<p>{t("Your data is safe with enterprise-level security.")}</p>
					</div>
					<div className={styles.feature}>
						<h3>{t("🧩 Easy Integration")}</h3>
						<p>{t("Add a single line of code and start chatting.")}</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{t("How It Works")}</h2>
				<div className={styles.howItWorks}>
					<div className={styles.step}>
						<h3>{t("1️⃣ Embed")}</h3>
						<p>{t("Add Bengobot to your site in seconds.")}</p>
					</div>
					<div className={styles.step}>
						<h3>{t("2️⃣ Train")}</h3>
						<p>{t("BengoBot learns from your website content.")}</p>
					</div>
					<div className={styles.step}>
						<h3>{t("3️⃣ Answer")}</h3>
						<p>{t("Your visitors get instant, accurate replies.")}</p>
					</div>
				</div>
			</section>

			<footer className={styles.footer}>
				<h2>{t("Ready to try BengoBot?")}</h2>
				<a href="#waitlist" className={styles.btnPrimary}>{t("Join the Waitlist")}</a>
				<p>{t("© 2025 BengoBot. All rights reserved.")}</p>
			</footer>
		</div>
	);
}
