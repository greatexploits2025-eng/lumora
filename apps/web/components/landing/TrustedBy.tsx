const creators = [
  { icon: "🎬", label: "Filmmakers" },
  { icon: "📚", label: "Educators" },
  { icon: "📱", label: "Content Creators" },
  { icon: "📺", label: "YouTubers" },
  { icon: "🎨", label: "Designers" },
];

export default function TrustedBy() {
  return (
    <section className="py-10 px-8">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">
        Trusted by Creators
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {creators.map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-sm transition hover:border-violet-500/50 hover:text-white"
          >
            <span className="text-lg">{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
