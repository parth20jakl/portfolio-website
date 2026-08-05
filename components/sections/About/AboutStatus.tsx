"use client";

export default function AboutStatus() {
  return (
    <div className="mt-12 flex items-center gap-4">

      <div className="h-[2px] w-12 rounded-full bg-cyan-400" />

      <p className="text-xs uppercase tracking-[4px] text-zinc-400">

        System Status:
        <span className="ml-2 text-cyan-400">

          Available for Opportunities

        </span>

      </p>

      <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

    </div>
  );
}