import { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  icon: ReactNode;
};

export default function StatsCard({ title, value, icon }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1024] p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400">{title}</p>
          <h2 className="mt-3 text-4xl font-black text-white">{value}</h2>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
}
