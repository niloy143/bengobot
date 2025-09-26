import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { t } from "../utils/i18n";
import "./globals.scss";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: t("BengoBot - Smart AI Chatbot for Websites"),
		description: t(
			"BengoBot is an intelligent AI-powered chatbot solution that provides instant customer support and engagement for websites. With easy integration and powerful features, BengoBot helps businesses answer customer questions 24/7 while boosting user engagement."
		),
		icons: {
			icon: "/icons/logo.svg",
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable}`}>{children}</body>
		</html>
	);
}
