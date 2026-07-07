const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Perfect for exploring Lumora's creative tools.",
    color: "border-white/10",
    badge: null,
    buttonStyle: "border border-white/20 text-white hover:bg-white/10",
    features: [
      "50 AI images / month",
      "5 video conversions",
      "Basic voice generation",
      "Script generator (3/month)",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    desc: "For serious creators who ship content daily.",
    color: "border-violet-500",
    badge: "Most Popular",
    buttonStyle: "bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:opacity-90",
    features: [
      "2,000 AI images / month",
      "200 video conversions",
      "Advanced voice cloning",
      "Unlimited scripts",
      "Talking characters",
      "Priority support",
    ],
  },
  {
    name: "Studio",
    price: "$99",
    period: "per month",
    desc: "Full power for studios and production teams.",
    color: "border-fuchsia-500/50",
    badge: null,
    buttonStyle: "bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white hover:opacity-90",
    features: [
      "Unlimited AI images",
      "Unlimited video conversions",
      "Multi-voice studio",
      "Team collaboration (10 seats)",
      "Custom character library",
      "API access",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20" id="pricing">
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          Pricing
        </p>
        <h2 className="text-4xl font-black text-white">
          Start free.{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Scale as you create.
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          No hidden fees. Cancel anytime.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl border ${plan.color} bg-white/5 backdrop-blur-xl p-8 flex flex-col gap-6 ${plan.badge ? "animate-float-gentle lg:scale-105 shadow-[0_0_60px_rgba(139,92,246,0.2)]" : ""}`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  {plan.badge}
                </span>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{plan.desc}</p>
            </div>

            <div className="flex items-end gap-1">
              <span className="text-5xl font-black text-white">{plan.price}</span>
              <span className="text-gray-500 mb-1.5 text-sm">/{plan.period}</span>
            </div>

            <ul className="flex flex-col gap-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="text-violet-400 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button className={`mt-auto w-full rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${plan.buttonStyle}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
