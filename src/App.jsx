import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Skills</h2>
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
              <div key={s} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                {s}
              </div>
            ))}
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Your Name • Built with love, React and Spline
      </footer>
    </div>
  );
}

export default App;
