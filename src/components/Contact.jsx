import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  }

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in touch</h2>
        <p className="mt-2 text-slate-300">Have a project, idea, or internship? Drop a message.</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-200">Name</label>
            <input required type="text" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" placeholder="Your name"/>
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-200">Email</label>
            <input required type="email" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" placeholder="you@example.com"/>
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-200">Message</label>
            <textarea required rows={4} className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" placeholder="Tell me a bit about it..."/>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-300">
          <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> Prefer email? yourname@domain.com</p>
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-900 shadow transition hover:bg-cyan-400"><Send className="h-4 w-4"/>Send</button>
        </div>
        {status && <p className="mt-3 text-sm text-green-400">{status}</p>}
      </form>
    </section>
  );
}
