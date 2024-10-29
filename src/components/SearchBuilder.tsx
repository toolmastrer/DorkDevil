import React from 'react';
import { Search } from 'lucide-react';
import { DorkOption } from '../types';

interface SearchBuilderProps {
  query: string;
  setQuery: (query: string) => void;
  selectedDork: string;
  setSelectedDork: (dork: string) => void;
  dorkValue: string;
  setDorkValue: (value: string) => void;
  dorkOptions: DorkOption[];
  onSearch: () => void;
  searchHistory: string[];
}

export function SearchBuilder({
  query,
  setQuery,
  selectedDork,
  setSelectedDork,
  dorkValue,
  setDorkValue,
  dorkOptions,
  onSearch,
  searchHistory,
}: SearchBuilderProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <select
            value={selectedDork}
            onChange={(e) => setSelectedDork(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a dork operator</option>
            {dorkOptions.map((dork) => (
              <option key={dork.operator} value={dork.operator}>
                {dork.operator}
              </option>
            ))}
          </select>
        </div>
        {selectedDork && (
          <div className="flex-1">
            <input
              type="text"
              value={dorkValue}
              onChange={(e) => setDorkValue(e.target.value)}
              placeholder="Enter dork value"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          list="search-history"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        
        {searchHistory.length > 0 && (
          <datalist id="search-history">
            {searchHistory.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onSearch}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          Search with Dorks
        </button>
      </div>
    </div>
  );
}