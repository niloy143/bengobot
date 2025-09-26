import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "BengoBot - Smart AI Chatbot for Websites | Professional Customer Support",
		description: "Transform your website with BengoBot, the intelligent AI chatbot that provides instant customer support 24/7. Choose from flexible pricing plans starting at $29/month.",
		keywords: ["AI chatbot", "customer support", "website chatbot", "automated support", "business chatbot", "customer engagement"],
		authors: [{ name: "BengoBot Team" }],
		creator: "BengoBot",
		publisher: "BengoBot",
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: 'https://bengobot.niloy.org',
			title: 'BengoBot - Smart AI Chatbot for Websites',
			description: 'Professional AI-powered chatbot for instant customer support. Flexible pricing plans, easy integration, 24/7 availability, multilingual support.',
			siteName: 'BengoBot',
			images: [
				{
					url: 'https://bengobot.niloy.org/icons/social-preview.png',
					width: 1200,
					height: 630,
					alt: 'BengoBot - AI Chatbot Preview',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'BengoBot - Smart AI Chatbot for Websites',
						description: 'Professional AI-powered chatbot for instant customer support. Flexible pricing plans, easy integration, 24/7 availability, multilingual support.',
			images: ['https://bengobot.niloy.org/icons/social-preview.png'],
		},
		icons: {
			icon: "/icons/logo.svg",
			shortcut: "/icons/logo.svg",
			apple: "/icons/logo.svg",
		},
		manifest: '/manifest.json',
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
							"name": "BengoBot",
							"description": "Intelligent AI-powered chatbot solution for instant customer support and engagement",
							"url": "https://bengobot.niloy.org",
							"applicationCategory": "BusinessApplication",
							"operatingSystem": "Web",
							"offers": {
								"@type": "Offer",
								"price": "0",
								"priceCurrency": "USD"
							},
							"featureList": [
								"24/7 Customer Support",
								"Multilingual Support",
								"Easy Website Integration",
								"AI-Powered Responses",
								"Secure Data Handling"
							],
							"author": {
								"@type": "Organization",
								"name": "BengoBot Team"
							}
						})
					}}
				/>
			</head>
			<body className={`${roboto.variable}`}>{children}<Analytics /></body>
		</html>
	);
}
