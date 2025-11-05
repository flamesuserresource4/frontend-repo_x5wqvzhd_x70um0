import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { Mail, Factory, Server } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Technology() {
  const items = [
    {
      icon: <Factory className="h-5 w-5 text-emerald-400" />,
      title: 'Industrial heat',
      desc:
        'Install on furnaces, kilns, boilers, and heat exchangers to recover power from process heat streams.',
    },
    {
      icon: <Server className="h-5 w-5 text-lime-400" />,
      title: 'Data centers',
      desc:
        'Generate electricity from hot aisle surfaces and exhaust—offset sensor power and auxiliary loads.',
    },
  ];

  return (
    <section id="technology" className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How Heather works</h2>
            <p className="mt-4 text-neutral-300">
              Our modules use temperature differences between a hot surface and a cooler sink to create electricity. This thermoelectric effect is solid-state—no moving parts—and scales by adding more modules in parallel.
            </p>
            <ul className="mt-6 space-y-3">
              {items.map((i) => (
                <li key={i.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">{i.icon}</div>
                  <div>
                    <p className="text-sm font-semibold">{i.title}</p>
                    <p className="text-sm text-neutral-300">{i.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900">
              <svg viewBox="0 0 400 300" className="h-full w-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#a3e635" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="400" height="300" fill="#0a0a0a" />
                <rect x="30" y="40" width="340" height="90" rx="8" fill="url(#g)" opacity="0.25" />
                <rect x="30" y="170" width="340" height="50" rx="8" fill="#111827" stroke="#1f2937" />
                <g fill="#34d399">
                  <circle cx="70" cy="195" r="6" />
                  <circle cx="120" cy="195" r="6" />
                  <circle cx="170" cy="195" r="6" />
                  <circle cx="220" cy="195" r="6" />
                  <circle cx="270" cy="195" r="6" />
                </g>
                <path d="M50 150 C 150 120, 250 180, 350 150" stroke="#a3e635" strokeWidth="3" fill="none" />
                <text x="40" y="30" fill="#9ca3af" fontSize="12">Heat source</text>
                <text x="40" y="165" fill="#9ca3af" fontSize="12">Thermoelectric modules</text>
                <text x="40" y="245" fill="#9ca3af" fontSize="12">Power out</text>
              </svg>
            </div>
            <p className="mt-4 text-xs text-neutral-400">
              Diagram: heat flows across modules to a heat sink, generating electricity continuously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s power your heat with Heather</h2>
          <p className="mt-3 text-neutral-300">
            Share a bit about your application and temperature range. Our engineers will follow up with sizing and expected output.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="mb-2 block text-xs text-neutral-300">Name</label>
              <input
                required
                type="text"
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Alex Chen"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-xs text-neutral-300">Company</label>
              <input
                type="text"
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Acme Manufacturing"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-xs text-neutral-300">Email</label>
              <input
                required
                type="email"
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="you@company.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-xs text-neutral-300">Temperature range</label>
              <input
                type="text"
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="e.g. 80–450°C"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-neutral-300">Project details</label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="What surface are you targeting? Available space? Desired output?"
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-neutral-400">
                We’ll get back within 2 business days.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-200"
              >
                <Mail className="h-4 w-4" /> Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
