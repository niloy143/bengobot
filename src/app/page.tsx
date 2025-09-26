import styles from "./page.module.scss";
import { t } from "@/utils/i18n";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "BengoBot - Smart AI Chatbot for Websites | Professional Customer Support",
	description: "Transform your website with BengoBot, the intelligent AI chatbot that provides instant customer support 24/7. Choose from our flexible pricing plans starting at $29/month.",
	keywords: ["AI chatbot", "customer support", "website chatbot", "business chatbot", "AI assistant", "customer service"],
	openGraph: {
		title: "BengoBot - Smart AI Chatbot for Websites",
		description: "Professional AI-powered chatbot for instant customer support. Flexible pricing plans, easy integration, 24/7 availability.",
		url: "https://bengobot.niloy.org",
	},
	alternates: {
		canonical: "https://bengobot.niloy.org",
	},
};

export default function Home() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Image src="/icons/logo.svg" alt="BengoBot Logo" width={90} height={90} />
				<h1>{t("BengoBot")}</h1>
				<p>{t("Smart, lightweight AI chatbot for your website.")}</p>
								<a href="#pricing" className={styles.btn_primary}>{t("View Pricing")}</a>
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
				<div className={styles.how_it_works}>
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

			<section id="pricing" className={styles.section}>
				<h2>{t("Choose Your Plan")}</h2>
				<div className={styles.pricing}>
					<div className={styles.plan}>
						<h3>{t("Starter")}</h3>
						<div className={styles.price}>$29<span>/month</span></div>
						<ul>
							<li>{t("1,000 conversations/month")}</li>
							<li>{t("Basic AI responses")}</li>
							<li>{t("Standard integration")}</li>
							<li>{t("Email support")}</li>
						</ul>
						<a href="/register" className={styles.btn_primary}>{t("Get Started")}</a>
					</div>
					<div className={styles.plan} style={{border: '2px solid #2ecc71'}}>
						<div className={styles.badge}>{t("Popular")}</div>
						<h3>{t("Professional")}</h3>
						<div className={styles.price}>$99<span>/month</span></div>
						<ul>
							<li>{t("10,000 conversations/month")}</li>
							<li>{t("Advanced AI training")}</li>
							<li>{t("Analytics dashboard")}</li>
							<li>{t("Priority support")}</li>
						</ul>
						<a href="/register" className={styles.btn_primary}>{t("Get Started")}</a>
					</div>
					<div className={styles.plan}>
						<h3>{t("Enterprise")}</h3>
						<div className={styles.price}>{t("Custom")}</div>
						<ul>
							<li>{t("Unlimited conversations")}</li>
							<li>{t("Custom AI training")}</li>
							<li>{t("White-label solution")}</li>
							<li>{t("24/7 premium support")}</li>
						</ul>
						<a href="/register" className={styles.btn_primary}>{t("Contact Sales")}</a>
					</div>
				</div>
			</section>

			<footer className={styles.footer}>
				<h2>{t("Ready to try BengoBot?")}</h2>
								<a href="#pricing" className={styles.btn_primary}>{t("Choose Your Plan")}</a>
				<p>{t("© 2025 BengoBot. All rights reserved.")}</p>
			</footer>
		</div>
	);
}
