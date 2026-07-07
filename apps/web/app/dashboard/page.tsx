import { getServerUser } from "@/features/auth/services/auth.service";
import DashboardStats from "@/features/dashboard/components/DashboardStats";
import RecentProjects from "@/features/dashboard/components/RecentProjects";
import QuickActions from "@/features/dashboard/components/QuickActions";

export default async function DashboardPage() {
  const user = await getServerUser();

  return (
    <div className="flex flex-col gap-10 max-w-7xl mx-auto">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-black text-white">
          👋 Welcome back, {user?.firstName ?? "Creator"}
        </h1>
        <p className="mt-1 text-gray-500">
          Here's what's happening in your studio today.
        </p>
      </div>

      <DashboardStats />
      <QuickActions />
      <RecentProjects />
    </div>
  );
}
