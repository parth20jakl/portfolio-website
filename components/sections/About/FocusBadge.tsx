interface FocusBadgeProps {
  title: string;
}

export default function FocusBadge({ title }: FocusBadgeProps) {
  return (
    <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20">
      {title}
    </div>
  );
}