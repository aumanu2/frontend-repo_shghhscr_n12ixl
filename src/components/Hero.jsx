import Spline from '@splinetool/react-spline';
import { Rocket, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/TQzTfOv9igPMLRJd/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability veil that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-16 sm:pb-20">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm ring-1 ring-white/15 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-cyan-400" />
          B.Tech CSE • 1st Year
        </span>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Building in the <span className="bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">dark</span>
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
          A minimalist, futuristic portfolio. Spin the planet and explore my work across web, 3D, and core CS foundations.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Contact Me
          </a>
        </div>
        <a href="#about" className="mt-8 inline-flex items-center gap-2 text-slate-300 hover:text-white">
          <ArrowDown className="h-4 w-4" />
          Scroll
        </a>
      </div>
    </section>
  );
}
