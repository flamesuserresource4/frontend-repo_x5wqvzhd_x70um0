import { Battery, Thermometer, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: <Thermometer className="h-5 w-5 text-emerald-400" />,
      title: 'Thermoelectric conversion',
      description:
        'Solid-state modules convert temperature gradients into electricity with no moving parts and minimal maintenance.',
    },
    {
      icon: <Battery className="h-5 w-5 text-lime-400" />,
      title: 'Power where you need it',
      description:
        'Run sensors, controllers, and edge devices directly from your waste heat. Reduce wiring complexity and operating costs.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-sky-400" />,
      title: 'Industrial-grade reliability',
      description:
        'Ruggedized for harsh environments: vibration-resistant, sealed, and designed for continuous operation.',
    },
    {
      icon: <Leaf className="h-5 w-5 text-teal-400" />,
      title: 'Immediate sustainability wins',
      description:
        'Cut emissions by capturing energy that would otherwise dissipate as heat. Turn losses into measurable gains.',
    },
  ];

  return (
    <section id="benefits" className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for real-world heat
          </h2>
          <p className="mt-4 text-neutral-300">
            From factories and refineries to transportation and data centers, Heather delivers dependable power from hot surfaces you already have.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
