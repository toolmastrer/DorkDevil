import React from 'react';
import { Search, Github } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-2">
        <Search className="w-8 h-8 text-blue-400 mr-2" />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Google Dorks Builder
        </h1>
      </div>
      <p className="text-gray-400 mb-4">
        Build powerful search queries with Google Dorks
      </p>
      <div className="flex items-center justify-center gap-4 text-sm">
        <a
          href="https://github.com/redmoon0x"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          Deviprasad Shetty
        </a>
      </div>
    </div>
  );
}
