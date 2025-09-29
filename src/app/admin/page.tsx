import styles from "./page.module.scss";
import Image from "next/image";
import { t } from "@/utils/i18n";
import { token } from "../lib/auth/cookie";
import { redirect } from "next/navigation";

export default function AdminPage() {
	async function handleLogout() {
		"use server";

		try {
			await token.auth.clear();
			redirect("/login");
		} catch {}
	}

	return (
		<div className={styles.admin}>
			<header className={styles.header}>
				<div className={styles.header_content}>
					<div className={styles.logo_section}>
						<Image src="/icons/logo.svg" alt="BengoBot Logo" width={40} height={40} />
						<h1 className={styles.title}>{t("Admin Dashboard")}</h1>
					</div>
					<div className={styles.user_menu}>
						<span className={styles.user_name}>{t("Admin User")}</span>
						<form action={handleLogout}>
							<button type="submit" className={styles.logout_btn}>
								{t("Logout")}
							</button>
						</form>
					</div>
				</div>
			</header>

			<main className={styles.main}>
				<div className={styles.grid}>
					{/* Stats Cards */}
					<div className={styles.stats_grid}>
						<div className={styles.stat_card}>
							<div className={styles.stat_icon}>💬</div>
							<div className={styles.stat_content}>
								<h3 className={styles.stat_number}>1,247</h3>
								<p className={styles.stat_label}>{t("Total Conversations")}</p>
							</div>
						</div>

						<div className={styles.stat_card}>
							<div className={styles.stat_icon}>👥</div>
							<div className={styles.stat_content}>
								<h3 className={styles.stat_number}>89</h3>
								<p className={styles.stat_label}>{t("Active Users")}</p>
							</div>
						</div>

						<div className={styles.stat_card}>
							<div className={styles.stat_icon}>⚡</div>
							<div className={styles.stat_content}>
								<h3 className={styles.stat_number}>4.8s</h3>
								<p className={styles.stat_label}>{t("Avg Response Time")}</p>
							</div>
						</div>

						<div className={styles.stat_card}>
							<div className={styles.stat_icon}>📈</div>
							<div className={styles.stat_content}>
								<h3 className={styles.stat_number}>94%</h3>
								<p className={styles.stat_label}>{t("Satisfaction Rate")}</p>
							</div>
						</div>
					</div>

					{/* Main Content Grid */}
					<div className={styles.content_grid}>
						{/* Recent Conversations */}
						<div className={styles.panel}>
							<div className={styles.panel_header}>
								<h2 className={styles.panel_title}>{t("Recent Conversations")}</h2>
								<button className={styles.view_all_btn}>{t("View All")}</button>
							</div>
							<div className={styles.conversations_list}>
								<div className={styles.conversation_item}>
									<div className={styles.conversation_avatar}>JD</div>
									<div className={styles.conversation_content}>
										<div className={styles.conversation_user}>John Doe</div>
										<div className={styles.conversation_message}>{t("How do I integrate BengoBot?")}</div>
									</div>
									<div className={styles.conversation_time}>{t("2m ago")}</div>
								</div>

								<div className={styles.conversation_item}>
									<div className={styles.conversation_avatar}>SM</div>
									<div className={styles.conversation_content}>
										<div className={styles.conversation_user}>Sarah Miller</div>
										<div className={styles.conversation_message}>{t("The chatbot isn&apos;t responding")}</div>
									</div>
									<div className={styles.conversation_time}>{t("5m ago")}</div>
								</div>

								<div className={styles.conversation_item}>
									<div className={styles.conversation_avatar}>MR</div>
									<div className={styles.conversation_content}>
										<div className={styles.conversation_user}>Mike Ross</div>
										<div className={styles.conversation_message}>{t("Can I customize the responses?")}</div>
									</div>
									<div className={styles.conversation_time}>{t("12m ago")}</div>
								</div>
							</div>
						</div>

						{/* Quick Actions */}
						<div className={styles.panel}>
							<div className={styles.panel_header}>
								<h2 className={styles.panel_title}>{t("Quick Actions")}</h2>
							</div>
							<div className={styles.actions_grid}>
								<button className={styles.action_btn}>
									<div className={styles.action_icon}>🤖</div>
									<div className={styles.action_content}>
										<div className={styles.action_title}>{t("Train Chatbot")}</div>
										<div className={styles.action_desc}>{t("Update AI responses")}</div>
									</div>
								</button>

								<button className={styles.action_btn}>
									<div className={styles.action_icon}>⚙️</div>
									<div className={styles.action_content}>
										<div className={styles.action_title}>{t("Settings")}</div>
										<div className={styles.action_desc}>{t("Configure preferences")}</div>
									</div>
								</button>

								<button className={styles.action_btn}>
									<div className={styles.action_icon}>📊</div>
									<div className={styles.action_content}>
										<div className={styles.action_title}>{t("Analytics")}</div>
										<div className={styles.action_desc}>{t("View detailed reports")}</div>
									</div>
								</button>

								<button className={styles.action_btn}>
									<div className={styles.action_icon}>👥</div>
									<div className={styles.action_content}>
										<div className={styles.action_title}>{t("User Management")}</div>
										<div className={styles.action_desc}>{t("Manage user accounts")}</div>
									</div>
								</button>
							</div>
						</div>
					</div>

					{/* System Status */}
					<div className={styles.panel}>
						<div className={styles.panel_header}>
							<h2 className={styles.panel_title}>{t("System Status")}</h2>
						</div>
						<div className={styles.status_grid}>
							<div className={styles.status_item}>
								<div className={styles.status_indicator} data-status="online"></div>
								<div className={styles.status_content}>
									<div className={styles.status_name}>{t("API Service")}</div>
									<div className={styles.status_desc}>{t("All systems operational")}</div>
								</div>
							</div>

							<div className={styles.status_item}>
								<div className={styles.status_indicator} data-status="online"></div>
								<div className={styles.status_content}>
									<div className={styles.status_name}>{t("Database")}</div>
									<div className={styles.status_desc}>{t("Connected and healthy")}</div>
								</div>
							</div>

							<div className={styles.status_item}>
								<div className={styles.status_indicator} data-status="warning"></div>
								<div className={styles.status_content}>
									<div className={styles.status_name}>{t("AI Model")}</div>
									<div className={styles.status_desc}>{t("High usage detected")}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
