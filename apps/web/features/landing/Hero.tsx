import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-8 text-center">
      <h1 className="max-w-5xl text-7xl font-black leading-tight text-white">
        Create Movies

        <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
          With AI
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
        Generate scripts, cinematic images, talking characters, AI videos, and
        complete movie scenes from simple prompts.
      </p>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row">
        <Button>Start Creating</Button>

        <Button variant="secondary">Watch Demo</Button>
      </div>
    </section>
  );
}