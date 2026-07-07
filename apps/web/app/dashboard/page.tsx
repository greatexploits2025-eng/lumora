import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import CreditsCard from "@/components/dashboard/CreditsCard";
import ToolGrid from "@/components/dashboard/ToolGrid";
import RecentProjects from "@/components/dashboard/RecentProjects";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-8">
      {/* Welcome */}
      <WelcomeCard />

      {/* Credits + Recent Projects side by side on large screens */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <CreditsCard />
        </div>
        <div className="lg:col-span-2">
          <RecentProjects />
        </div>
      </div>

      {/* AI Tools */}
      <ToolGrid />
    </div>
  );
}
