type Props = {
  title: string;
};

export default function StudioHeader({
  title,
}: Props) {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-[#0B1024] px-8 py-5">

      <div>

        <h1 className="text-2xl font-black">
          {title}
        </h1>

        <p className="text-gray-400">
          AI Movie Production Studio
        </p>

      </div>

      <div className="flex gap-3">

        <button className="rounded-xl border border-white/10 px-5 py-2 hover:bg-white/5">
          Save
        </button>

        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-2 font-semibold">
          Render
        </button>

      </div>

    </header>
  );
}