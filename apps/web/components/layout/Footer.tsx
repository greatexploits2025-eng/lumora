const links = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

const socials = [
  { label: "GitHub",   href: "#", icon: "⌥" },
  { label: "Twitter",  href: "#", icon: "𝕏" },
  { label: "Discord",  href: "#", icon: "💬" },
  { label: "YouTube",  href: "#", icon: "▶" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-2xl font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              LumoraAI
            </span>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              The AI-powered creative studio for filmmakers, educators, and storytellers worldwide.
            </p>
            <div className="flex gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-sm text-gray-400 hover:border-violet-500/50 hover:text-white transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} LumoraAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-600 hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
