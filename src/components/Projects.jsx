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
    <section id="projects" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects</h2>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">See all</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, desc, icon: Icon, tags, link }) => (
            <a key={title} href={link} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-indigo-100 transition group-hover:scale-125" />
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
