export default function PreviewPanel() {
  return (
    <div className="flex h-[500px] items-center justify-center rounded-3xl border border-dashed border-white/20 bg-[#0B1024]">
      <div className="text-center">
        <div className="mb-6 text-7xl">🎬</div>

        <h3 className="text-2xl font-bold text-white">
          Movie Preview
        </h3>

        <p className="mt-3 text-gray-400">
          Generated videos will appear here.
        </p>
      </div>
    </div>
  );
}
