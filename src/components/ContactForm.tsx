"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Honeypot (bot) kontrolü
    const hp = (form.querySelector('input[name="website"]') as HTMLInputElement)?.value;
    if (hp) return;

    if (!checked) {
      alert("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_m5e9zfv",     // <- kendi Service ID'n
        "template_fk75mjp",    // <- kendi Template ID'n
        form,
        "m8spZLGqXBIEqNGr0"    // <- kendi Public Key'in
      );
      setSent(true);
      form.reset();
      setChecked(false);
    } catch (err) {
      alert("Fehler beim Senden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative mx-auto w-full max-w-5xl px-4 py-10 md:py-14"
      aria-labelledby="contactform-title"
    >
      <div className="mx-auto grid gap-8 md:grid-cols-5">
        {/* Sol: İletişim bilgileri + harita */}
        <aside className="md:col-span-2">
          <h2
            id="contactform-title"
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            Kontakt
          </h2>

          <p className="mt-2 text-white/80">
            Wir freuen uns auf Ihre Anfrage. Telefonisch, per WhatsApp oder über das Formular.
          </p>

          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-white/60">Telefon</dt>
              <dd className="text-brand-yellow font-semibold">
                <a href="tel:+4915771677034" className="hover:underline">
                  +49 1577 1677034
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/60">Adresse</dt>
              <dd className="text-white/90">
                Zeppelinstraße 75, 13583 Berlin
              </dd>
            </div>
            <div>
              <dt className="text-white/60">E-Mail</dt>
              <dd className="text-white/90">
                <a
                  href="mailto:moebeltaxiumzug@gmail.com"
                  className="underline decoration-brand-yellow/60 underline-offset-4 hover:text-brand-yellow"
                >
                  moebeltaxiumzug@gmail.com
                </a>
              </dd>
            </div>
          </dl>

          {/* Google Maps */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
            <div className="aspect-[4/3] md:aspect-[3/2]">
              <iframe
                title="Möbel Taxi Umzug – Standort"
                src="https://www.google.com/maps?q=Zeppelinstra%C3%9Fe%2075%2C%2013583%20Berlin&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </aside>

        {/* Sağ: Form */}
        <div className="md:col-span-3">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            name="kontakt-form"
            method="post"
            noValidate
            className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,.04),0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-md"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">Vorname</span>
                <input
                  id="vorname"
                  name="vorname"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1 block text-white/80">Nachname</span>
                <input
                  id="nachname"
                  name="nachname"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">E-Mail *</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1 block text-white/80">Telefonnummer *</span>
                <input
                  id="telefonnummer"
                  name="telefonnummer"
                  type="tel"
                  inputMode="tel"
                  placeholder="+49 ..."
                  autoComplete="tel"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
                <span className="mt-1 block text-xs text-white/50">
                  Wenn Sie einen Rückruf wünschen, bitte ausfüllen.
                </span>
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">
                  Bitte wählen Sie eine Option *
                </span>
                <select
                  id="dienstleistung"
                  name="dienstleistung"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                >
                  <option value="">-- Bitte wählen --</option>
                  <option>Umzüge</option>
                  <option>Möbeltransporte</option>
                  <option>Entrümpelung</option>
                  <option>Montage</option>
                  <option>Gartenarbeiten</option>
                  <option>Lieferung</option>
                </select>
              </label>

              <label className="block text-sm">
                <span className="mb-1 block text-white/80">Wie viele Träger? *</span>
                <input
                  id="traeger"
                  name="traeger"
                  type="number"
                  min={1}
                  step={1}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>
            </div>

            <div className="mt-4">
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">Menge der Güter *</span>
                <textarea
                  id="menge"
                  name="menge"
                  rows={3}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">
                  Von welchem Stockwerk abholen? *
                </span>
                <input
                  id="abholstock"
                  name="abholstock"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">
                  In welches Stockwerk liefern? *
                </span>
                <input
                  id="lieferstock"
                  name="lieferstock"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>
            </div>

            <div className="mt-4">
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">
                  Gibt es einen Aufzug im Gebäude? *
                </span>
                <select
                  id="aufzug"
                  name="aufzug"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                >
                  <option value="">-- Bitte wählen --</option>
                  <option>Ja, aber nur am Auszugsort.</option>
                  <option>Ja, aber nur am Einzugsort.</option>
                  <option>Ja, am Auszugs- &amp; Einzugsort.</option>
                  <option>Nein, leider nicht.</option>
                </select>
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">Abholadresse *</span>
                <textarea
                  id="abholadresse"
                  name="abholadresse"
                  rows={2}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">Lieferadresse *</span>
                <textarea
                  id="lieferadresse"
                  name="lieferadresse"
                  rows={2}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>
            </div>

            <div className="mt-4">
              <label className="block text-sm">
                <span className="mb-1 block text-white/80">
                  Kommentar oder Nachricht *
                </span>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-brand-yellow/60 focus:ring-2 focus:ring-brand-yellow/30"
                />
              </label>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm">
              <input
                id="ds-check"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 text-brand-yellow focus:ring-brand-yellow/40"
                checked={checked}
                onChange={() => setChecked((v) => !v)}
                required
              />
              <span className="text-white/80">
                Ich habe die{" "}
                <Link
                  href="/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-yellow underline underline-offset-4"
                >
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme zu.
              </span>
            </label>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl bg-brand-yellow px-5 py-2.5 font-semibold text-black shadow-[0_10px_30px_rgba(245,196,0,.35)] transition
                           hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(245,196,0,.45)]
                           focus:outline-none focus:ring-2 focus:ring-brand-yellow/60 active:translate-y-0"
              >
                {loading ? "Wird gesendet…" : "Absenden"}
              </button>

              {sent && (
                <p className="text-sm text-emerald-400">
                  Nachricht erfolgreich gesendet ✅
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}