import { ReactNode } from "react";
import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";
import DashboardTopNav from "@/features/dashboard/components/DashboardTopNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#050816]">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardTopNav />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
