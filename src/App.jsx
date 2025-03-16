// src/App.jsx

import ProblemSection from './components/ProblemSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Asterion</h1>
        <ul className="flex space-x-6 text-gray-400">
          <li><a href="#about">Sobre Asterion</a></li>
          <li><a href="#problems">Problemas</a></li>
        </ul>
      </nav>

      <section id="about" className="text-center py-20">
        <h2 className="text-5xl font-bold mb-6">Bienvenido a Asterion</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          La escuela alternativa para los jóvenes más brillantes en matemáticas. Nuestro objetivo es formar una nueva generación de pensadores y problem solvers.
        </p>
      </section>

      <section id="problems" className="mt-10">
        <ProblemSection />
      </section>
    </div>
  );
}
