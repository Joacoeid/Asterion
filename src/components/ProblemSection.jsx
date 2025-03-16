// src/components/ProblemSection.jsx

import { problems } from '../data/problems';

export default function ProblemSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Problemas de Matemáticas</h1>
      <ul className="space-y-4">
        {problems.map((problem, index) => (
          <li key={index} className="border p-4 rounded-lg bg-gray-800 text-white">
            <h2 className="text-xl font-semibold">{problem.title}</h2>
            <p className="text-gray-300">{problem.statement}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
