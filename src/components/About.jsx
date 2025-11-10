export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
          <p className="mt-4 text-slate-300">
            I’m a first-year B.Tech CSE student passionate about frontend, backend and the magic of 3D on the web.
            I enjoy learning by building and I’m currently exploring JavaScript, React, Python and basic algorithms.
          </p>
          <p className="mt-3 text-slate-300">
            Beyond coding, I love design, gaming, and collaborating on ideas. I’m open to internships and exciting projects.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-2xl opacity-70" />
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <dl className="grid grid-cols-2 gap-6 text-center">
              <div>
                <dt className="text-sm text-slate-400">Focus</dt>
                <dd className="mt-1 text-xl font-semibold text-white">Web + 3D</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Learning</dt>
                <dd className="mt-1 text-xl font-semibold text-white">DSA, React</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Location</dt>
                <dd className="mt-1 text-xl font-semibold text-white">India</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Status</dt>
                <dd className="mt-1 text-xl font-semibold text-white">Open to work</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
