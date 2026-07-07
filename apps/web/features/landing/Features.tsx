import Card from "@/components/ui/Card";

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
        <Card key={feature}>
          <h3 className="text-2xl font-bold text-white">
            {feature}
          </h3>

          <p className="mt-4 text-gray-400">
            Professional AI-powered creative tools built for filmmakers,
            content creators, educators, and storytellers.
          </p>
        </Card>
      ))}
    </section>
  );
}