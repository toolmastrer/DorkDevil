import { ReactNode } from 'react';

export interface DorkOption {
  operator: string;
  description: string;
  icon: ReactNode;
  example: string;
}

export interface SearchHistoryItem {
  query: string;
  timestamp: number;
}