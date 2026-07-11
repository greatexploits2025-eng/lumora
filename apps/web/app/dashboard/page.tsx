import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import WelcomeCard from "@/components/dashboard/WelcomeCard";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import RecentProjects from "@/components/dashboard/RecentProjects";
import ToolGrid from "@/components/dashboard/ToolGrid";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-10">
      <WelcomeCard />

      <DashboardOverview />

      <RecentProjects />

      <ToolGrid />
    </div>
  );
}