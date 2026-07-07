import { Clapperboard, ImageIcon, Video } from "lucide-react";
import StatsCard from "./StatsCard";

export default function DashboardOverview() {
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-3">
      <StatsCard
        title="Projects"
        value="12"
        icon={<Clapperboard size={34} className="text-violet-400" />}
      />
      <StatsCard
        title="Images"
        value="248"
        icon={<ImageIcon size={34} className="text-blue-400" />}
      />
      <StatsCard
        title="Videos"
        value="39"
        icon={<Video size={34} className="text-pink-400" />}
      />
    </div>
  );
}
