import ShowcaseCard from "./ShowcaseCard";

const tools = [
  {
    title: "AI Image Generator",
    icon: "🎨",
    description:
      "Generate stunning cinematic AI images from a single prompt.",
  },
  {
    title: "Image to Video",
    icon: "🎬",
    description:
      "Turn still images into smooth cinematic videos with AI.",
  },
  {
    title: "Script Writer",
    icon: "📝",
    description:
      "Write movie scripts, YouTube videos and stories in seconds.",
  },
  {
    title: "Voice Studio",
    icon: "🎙️",
    description:
      "Generate realistic AI voices in multiple languages.",
  },
  {
    title: "Talking Characters",
    icon: "🧑",
    description:
      "Bring characters to life with synchronized speech.",
  },
  {
    title: "Movie Studio",
    icon: "🎥",
    description:
      "Combine images, videos, voices and scripts into complete AI films.",
  },
];

export default function AIShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-28">
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-black text-white">
          Everything You Need
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
          Build complete AI movies without switching between different tools.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <ShowcaseCard
            key={tool.title}
            title={tool.title}
            icon={tool.icon}
            description={tool.description}
          />
        ))}
      </div>
    </section>
  );
}
