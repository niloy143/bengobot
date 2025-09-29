import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { t } from "@/utils/i18n";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: t("BengoBot - Smart AI Chatbot for Websites | Professional Customer Support"),
		description: t(
			"Transform your website with BengoBot, the intelligent AI chatbot that provides instant customer support 24/7. Choose from flexible pricing plans starting at $29/month."
		),
		keywords: [t("AI chatbot"), t("customer support"), t("website chatbot"), t("automated support"), t("business chatbot"), t("customer engagement")],
		authors: [{ name: t("BengoBot Team") }],
		creator: t("BengoBot"),
		publisher: t("BengoBot"),
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		openGraph: {
			type: "website",
			locale: "en_US",
			url: "https://bengobot.niloy.org",
			title: t("BengoBot - Smart AI Chatbot for Websites"),
			description: t(
				"Professional AI-powered chatbot for instant customer support. Flexible pricing plans, easy integration, 24/7 availability, multilingual support."
			),
			siteName: t("BengoBot"),
			images: [
				{
					url: "https://bengobot.niloy.org/icons/social-preview.png",
					width: 1200,
					height: 630,
					alt: t("BengoBot - AI Chatbot Preview"),
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: t("BengoBot - Smart AI Chatbot for Websites"),
			description: t(
				"Professional AI-powered chatbot for instant customer support. Flexible pricing plans, easy integration, 24/7 availability, multilingual support."
			),
			images: ["https://bengobot.niloy.org/icons/social-preview.png"],
		},
		icons: {
			icon: "/icons/logo.svg",
			shortcut: "/icons/logo.svg",
			apple: "/icons/logo.svg",
		},
		manifest: "/manifest.json",
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "SoftwareApplication",
							name: t("BengoBot"),
							description: t("Intelligent AI-powered chatbot solution for instant customer support and engagement"),
							url: "https://bengobot.niloy.org",
							applicationCategory: "BusinessApplication",
							operatingSystem: "Web",
							offers: {
								"@type": "Offer",
								price: "0",
								priceCurrency: "USD",
							},
							featureList: [
								t("24/7 Customer Support"),
								t("Multilingual Support"),
								t("Easy Website Integration"),
								t("AI-Powered Responses"),
								t("Secure Data Handling"),
							],
							author: {
								"@type": "Organization",
								name: t("BengoBot Team"),
							},
						}),
					}}
				/>
			</head>
			<body className={`${roboto.variable}`}>
				{children}
				<Analytics debug={false} />
			</body>
		</html>
	);
}
