export default function PromptBox() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B1024] p-8">
      <h2 className="mb-5 text-xl font-bold text-white">
        Describe your movie
      </h2>

      <textarea
        rows={7}
        placeholder={`Example:\nCreate a cinematic trailer about an African kingdom where a forgotten prince returns to reclaim the throne...`}
        className="w-full rounded-2xl border border-white/10 bg-[#050816] p-5 text-white placeholder-gray-600 outline-none resize-none focus:border-violet-500/50 transition-colors"
      />

      <button className="mt-6 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 font-bold text-white hover:opacity-90 transition">
        Generate Movie
      </button>
    </div>
  );
}
