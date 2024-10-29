import React, { useState, useEffect } from 'react';
import { Search, FileText, Link, Globe, Database, Code, Info } from 'lucide-react';
import { Header } from './components/Header';
import { SearchBuilder } from './components/SearchBuilder';
import { DorkCards } from './components/DorkCards';
import { Footer } from './components/Footer';
import { DorkOption } from './types';

function App() {
  const [query, setQuery] = useState('');
  const [selectedDork, setSelectedDork] = useState('');
  const [dorkValue, setDorkValue] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const dorkOptions: DorkOption[] = [
    { operator: 'site:', description: 'Search within a specific website', icon: <Globe className="w-5 h-5" />, example: 'site:example.com' },
    { operator: 'filetype:', description: 'Search for specific file types', icon: <FileText className="w-5 h-5" />, example: 'filetype:pdf' },
    { operator: 'inurl:', description: 'Search for URLs containing specific text', icon: <Link className="w-5 h-5" />, example: 'inurl:admin' },
    { operator: 'intitle:', description: 'Search for pages with specific titles', icon: <Info className="w-5 h-5" />, example: 'intitle:index.of' },
    { operator: 'intext:', description: 'Search for pages containing specific text', icon: <Database className="w-5 h-5" />, example: 'intext:password' },
    { operator: 'ext:', description: 'Search for specific file extensions', icon: <Code className="w-5 h-5" />, example: 'ext:php' },
  ];

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const constructSearch = () => {
    const dorkString = selectedDork ? `${selectedDork}${dorkValue} ` : '';
    const searchQuery = `${dorkString}${query}`.trim();
    
    if (searchQuery) {
      setSearchHistory((prev) => {
        const newHistory = [searchQuery, ...prev.slice(0, 9)];
        return Array.from(new Set(newHistory));
      });
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const handleDorkSelect = (operator: string) => {
    setSelectedDork(operator);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      constructSearch();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [query, selectedDork, dorkValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Header />
          
          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
            <SearchBuilder
              query={query}
              setQuery={setQuery}
              selectedDork={selectedDork}
              setSelectedDork={setSelectedDork}
              dorkValue={dorkValue}
              setDorkValue={setDorkValue}
              dorkOptions={dorkOptions}
              onSearch={constructSearch}
              searchHistory={searchHistory}
            />
            
            <DorkCards
              dorkOptions={dorkOptions}
              onDorkSelect={handleDorkSelect}
            />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;