import Spline from '@splinetool/react-spline';
import { Rocket, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient for readability (won't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-16 sm:pb-20">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-indigo-600" />
          B.Tech CSE • 1st Year
        </span>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-lg">
          I love building playful, interactive web experiences at the intersection of code and design.
          Explore my projects below and let’s create something awesome together.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contact Me
          </a>
        </div>
        <a href="#about" className="mt-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
          <ArrowDown className="h-4 w-4" />
          Scroll
        </a>
      </div>
    </section>
  );
}
