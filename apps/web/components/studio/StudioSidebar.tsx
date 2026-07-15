import {
  Film,
  Users,
  Image,
  Music,
  Mic,
  Settings,
} from "lucide-react";

const items = [
  {
    icon: Film,
    label: "Scenes",
  },
  {
    icon: Users,
    label: "Characters",
  },
  {
    icon: Image,
    label: "Assets",
  },
  {
    icon: Music,
    label: "Music",
  },
  {
    icon: Mic,
    label: "Voice",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function StudioSidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-[#090D1D]">

      <div className="space-y-2 p-6">

        {items.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-3 rounded-xl p-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            <item.icon size={20} />

            {item.label}
          </button>
        ))}

      </div>

    </aside>
  );
}