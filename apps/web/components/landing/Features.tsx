const features = [
  "🎬 AI Movie Studio",
  "🖼 AI Image Generator",
  "🎥 Image to Video",
  "🎤 AI Voice Studio",
  "📝 Script Generator",
  "🎭 Character Creator",
];

export default function Features() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-8 py-20 md:grid-cols-3">

      {features.map((feature) => (

        <div
          key={feature}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:scale-105"
        >
          <h3 className="text-2xl font-bold text-white">
            {feature}
          </h3>

          <p className="mt-4 text-gray-400">
            Professional AI-powered creative tools built for filmmakers and creators.
          </p>

        </div>

      ))}

    </section>
  );
}