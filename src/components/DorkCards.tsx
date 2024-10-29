import React from 'react';
import { DorkOption } from '../types';

interface DorkCardsProps {
  dorkOptions: DorkOption[];
  onDorkSelect: (operator: string) => void;
}

export function DorkCards({ dorkOptions, onDorkSelect }: DorkCardsProps) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {dorkOptions.map((dork) => (
        <div
          key={dork.operator}
          className="bg-gray-700/50 rounded-lg p-4 border border-gray-600 cursor-pointer hover:border-blue-400 transition-colors"
          onClick={() => onDorkSelect(dork.operator)}
        >
          <div className="flex items-start gap-3">
            <div className="text-blue-400">
              {dork.icon}
            </div>
            <div>
              <h3 className="font-semibold text-blue-400">{dork.operator}</h3>
              <p className="text-sm text-gray-300 mt-1">{dork.description}</p>
              <code className="text-xs bg-gray-800 px-2 py-1 rounded mt-2 inline-block text-gray-300">
                Example: {dork.example}
              </code>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}