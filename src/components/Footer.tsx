import React from 'react';
import { Lock, AlertTriangle } from 'lucide-react';

export function Footer() {
  return (
    <div className="mt-8 text-center text-sm text-gray-400 space-y-2">
      <p className="flex items-center justify-center gap-2">
        <Lock className="w-4 h-4" />
        Use responsibly and ethically. Always respect privacy and security.
      </p>
      <p className="flex items-center justify-center gap-2 text-yellow-500">
        <AlertTriangle className="w-4 h-4" />
        Some searches may be blocked by Google's security measures.
      </p>
    </div>
  );
}