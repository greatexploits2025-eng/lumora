const stats = [
  { label: "Projects",        value: "24",  icon: "🎬", color: "from-violet-500/20 to-violet-500/5",  border: "border-violet-500/20" },
  { label: "Images Generated",value: "125", icon: "🎨", color: "from-blue-500/20 to-blue-500/5",      border: "border-blue-500/20" },
  { label: "Videos Created",  value: "18",  icon: "🎥", color: "from-fuchsia-500/20 to-fuchsia-500/5",border: "border-fuchsia-500/20" },
  { label: "Scripts Written", value: "9",   icon: "📝", color: "from-emerald-500/20 to-emerald-500/5",border: "border-emerald-500/20" },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className={`rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} p-6 backdrop-blur-xl`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{s.icon}</span>
            <span className="text-xs text-gray-600 uppercase tracking-widest">{s.label}</span>
          </div>
          <p className="text-4xl font-black text-white">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
