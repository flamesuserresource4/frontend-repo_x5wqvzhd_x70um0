import { ArrowRight, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* Gradient aura overlays */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-lime-400/15 blur-2xl" />
      </div>

      {/* 3D Spline scene as background hero visual */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0"
        aria-hidden
      >
        <div className="h-full w-full">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Soft gradient mask to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/30 to-neutral-950" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
            <Zap className="h-3.5 w-3.5 text-emerald-400" />
            Turning heat into clean electricity
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Power from what the world wastes: heat
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Heather captures energy from hot surfaces and converts it into usable electricity. Our solid-state modules fit into your existing systems to harvest power where it was previously lost.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow hover:bg-neutral-200"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#technology"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              How it works
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            <Stat value="24/7" label="Continuous power" />
            <Stat value="0" label="Moving parts" />
            <Stat value=">95%" label="Uptime" />
            <Stat value="<6 mo" label="ROI in many cases" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-10 backdrop-blur"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Feature
              title="Hot surface to power"
              description="We mount to exhausts, pipes, ovens, and engines—producing electricity from temperature differences using proven thermoelectric tech."
            />
            <Feature
              title="Drop-in and scalable"
              description="Modular units integrate with your existing infrastructure and scale linearly—start small, expand as you see results."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xl font-semibold text-white sm:text-2xl">{value}</div>
      <div className="mt-1 text-xs text-neutral-400">{label}</div>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-emerald-400 to-lime-400" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-neutral-300">{description}</p>
      </div>
    </div>
  );
}
