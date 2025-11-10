import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Skills</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'HTML & CSS',
              'JavaScript / React',
              'Python Basics',
              'Data Structures & Algorithms',
              'Tailwind CSS',
              'Git & GitHub',
              'Spline 3D',
              'Responsive Design',
            ].map((s) => (
              <div key={s} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-200 shadow-sm">
                {s}
              </div>
            ))}
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name • Built with React, Tailwind & Spline
      </footer>
    </div>
  );
}

export default App;
