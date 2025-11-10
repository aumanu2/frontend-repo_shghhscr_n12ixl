import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-white/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold text-slate-900">
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent">CSE</span> Portfolio
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Github className="h-5 w-5" /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
          <a aria-label="Email" href="#contact" className="text-slate-600 hover:text-slate-900"><Mail className="h-5 w-5" /></a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden rounded-md p-2 text-slate-700 hover:bg-white/60">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 text-sm font-medium text-slate-700">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Github className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Email" href="#contact" className="text-slate-600 hover:text-slate-900"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
