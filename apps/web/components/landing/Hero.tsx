export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-8 text-center">

      <h1 className="max-w-5xl text-7xl font-black leading-tight text-white">

        Create Movies

        <span className="block bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">

          With AI

        </span>

      </h1>

      <p className="mt-8 max-w-2xl text-xl text-gray-400">

        Generate scripts, cinematic images,
        talking characters, AI videos and complete
        movie scenes from simple prompts.

      </p>

      <div className="mt-12 flex gap-5">

        <button className="rounded-xl bg-violet-600 px-8 py-4 text-lg font-bold">

          Start Creating

        </button>

        <button className="rounded-xl border border-gray-700 px-8 py-4 text-lg">

          Watch Demo

        </button>

      </div>

    </section>
  );
}