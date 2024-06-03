import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="lg:grid h-full overflow-hidden lg:grid-cols-[16rem,1fr]">
      <Sidebar />
      <main className="relative overflow-auto h-full pb-6">{children}</main>
    </section>
  );
}
