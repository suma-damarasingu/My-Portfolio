import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-center text-white">
      <div className="glass-panel max-w-lg p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">404</p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-slate-300">The page you opened is not part of this portfolio.</p>
        <Link className="btn-primary mx-auto mt-6 w-fit" to="/">
          <ArrowLeft size={18} /> Back Home
        </Link>
      </div>
    </main>
  );
}
