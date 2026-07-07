const OPTIONS = [
  "Movie",
  "Animation",
  "YouTube",
  "Documentary",
  "Cinematic",
  "Short Film",
  "Trailer",
  "Commercial",
];

export default function QuickOptions() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {OPTIONS.map((item) => (
        <button
          key={item}
          className="rounded-xl border border-white/10 bg-[#0B1024] py-4 text-gray-300 transition hover:border-violet-500 hover:text-white hover:bg-violet-500/10"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
