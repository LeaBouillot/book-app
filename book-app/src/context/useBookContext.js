import { useContext } from 'react';
import { BookContext } from './BookContext'; // importe bien depuis BookContext.jsx

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};