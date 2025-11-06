// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[50vh] flex items-center justify-center px-6 py-16 text-center">
      <div className="max-w-xl">
        <p className="text-sm tracking-wider text-brand-yellow">404</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">Seite nicht gefunden</h1>
        <p className="mt-3 text-white/80">Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
        <div className="mt-6">
          <Link href="/" className="inline-block rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-black">
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}