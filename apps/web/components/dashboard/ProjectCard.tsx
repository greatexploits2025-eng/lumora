import { Calendar, FolderOpen } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  updated: string;
};

export default function ProjectCard({ title, description, updated }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1024] p-6 transition hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer">
      <FolderOpen className="mb-4 text-violet-400" size={36} />

      <h3 className="text-xl font-bold text-white">{title}</h3>

      <p className="mt-2 text-gray-400">{description}</p>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
        <Calendar size={16} />
        Updated {updated}
      </div>
    </div>
  );
}
