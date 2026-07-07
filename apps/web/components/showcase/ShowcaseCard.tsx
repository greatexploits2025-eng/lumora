type ShowcaseCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ShowcaseCard({
  title,
  description,
  icon,
}: ShowcaseCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-white/10">
      <div className="mb-5 text-5xl">{icon}</div>

      <h3 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {description}
      </p>

      <button className="mt-8 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-3 font-semibold text-white transition hover:scale-105">
        Explore →
      </button>
    </div>
  );
}
