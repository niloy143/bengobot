import Authenticated from "@/components/authenticated";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return <Authenticated>{children}</Authenticated>;
}
