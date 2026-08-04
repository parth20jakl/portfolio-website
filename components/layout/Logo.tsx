import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-tight transition hover:opacity-80"
    >
      <span className="text-white">Parth</span>
      <span className="text-cyan-400">.</span>
    </Link>
  );
}