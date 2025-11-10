import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowDown } from 'lucide-react';

export default function Hero() {
  const splineWrapRef = useRef(null);
  const rafRef = useRef(0);
  const [transform, setTransform] = useState({ scale: 1, rotZ: 0, rotX: 0, rotY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const max = 1200; // pixels to reach full effect
      const y = Math.min(window.scrollY, max);
      const p = y / max; // 0 -> 1
      const scale = 1 + p * 0.35; // up to 1.35x
      const rotZ = p * 28; // degrees
      queueUpdate({ scale, rotZ });
    };

    const handleMouse = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const nx = (e.clientX / w) * 2 - 1; // -1..1
      const ny = (e.clientY / h) * 2 - 1; // -1..1
      const rotX = -ny * 6; // tilt up/down
      const rotY = nx * 6; // tilt left/right
      queueUpdate({ rotX, rotY });
    };

    const next = { ...transform };
    const queueUpdate = (delta) => {
      Object.assign(next, delta);
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setTransform({ ...next });
          rafRef.current = 0;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { scale, rotZ, rotX, rotY } = transform;

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* 3D background with scroll-zoom + subtle tilt */}
      <div
        ref={splineWrapRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`,
          transformOrigin: '50% 50%',
          transition: 'transform 0.04s linear',
        }}
      >
        <Spline
          scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability veil that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-16 sm:pb-20">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm ring-1 ring-white/15 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-cyan-400" />
          B.Tech CSE • 1st Year
        </span>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Immersive <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">3D</span> portfolio
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
          Scroll to zoom and rotate the holographic torus. Move your mouse to tilt the scene. Dive into projects below.
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
