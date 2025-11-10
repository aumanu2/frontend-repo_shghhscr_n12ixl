import { Code2, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Portfolio',
    desc: 'A 3D-enhanced portfolio built with React and Spline.',
    icon: Globe,
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Algo Visualizer',
    desc: 'Visualizing sorting and pathfinding algorithms for learning.',
    icon: Cpu,
    tags: ['JavaScript', 'DSA'],
    link: '#'
  },
  {
    title: 'Code Snippets',
    desc: 'Handy utilities and components I reuse across projects.',
    icon: Code2,
    tags: ['TypeScript', 'Utils'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
          <a href="#" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">See all</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, desc, icon: Icon, tags, link }) => (
            <a key={title} href={link} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:bg-white/10">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-cyan-400/10 transition group-hover:scale-125" />
              <Icon className="h-6 w-6 text-cyan-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
