export default function StudioHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-8 py-6">
      <div>
        <h1 className="text-3xl font-black text-white">
          AI Movie Studio
        </h1>
        <p className="text-gray-400">
          Build complete cinematic experiences using AI.
        </p>
      </div>

      <button className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 font-semibold text-white hover:opacity-90 transition">
        New Project
      </button>
    </header>
  );
}
