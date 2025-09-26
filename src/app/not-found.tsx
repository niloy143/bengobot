import Link from "next/link";
import styles from "./not-found.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Page Not Found - BengoBot",
	description: "The page you're looking for doesn't exist. Return to BengoBot's homepage to learn about our AI chatbot solutions.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function NotFound() {
	return (
		<div className={styles.page}>
			<div className={styles.not_found}>
				<div className={styles.container}>
					<h1 className={styles.error_code}>404</h1>
					<h2 className={styles.title}>Page Not Found</h2>
					<p className={styles.message}>
						The page you&apos;re looking for doesn&apos;t exist or has been moved.
					</p>
					<Link href="/" className={styles.home_link}>
						Return to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
}