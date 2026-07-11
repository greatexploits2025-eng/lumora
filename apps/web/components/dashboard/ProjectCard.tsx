import Link from "next/link";
import { Calendar, FolderOpen } from "lucide-react";

type Props = {
  id: string;
  title: string;
  description: string;
  updated: string;
  status: string;
};

export default function ProjectCard({
  id,
  title,
  description,
  updated,
  status,
}: Props) {
  return (
    <Link href={`/dashboard/projects/${id}`}>
      <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0B1024] p-6 transition hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/10">

        <div className="mb-4 flex items-center justify-between">
          <FolderOpen
            className="text-violet-400"
            size={36}
          />

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
            {status}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-gray-400">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={16} />
          Updated {updated}
        </div>

      </div>
    </Link>
  );
}