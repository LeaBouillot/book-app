import { createContext, useReducer, useEffect, useState } from 'react';
import { bookReducer } from './BookReducer';
import { useFetch } from '../hooks/useFetch';

export const BookContext = createContext();

// ({children}) :les components enfants auront accès à ces données(return) sans passer à props de chaque component grace au BookContext

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, { books: [] });
  const [filterParams, setFilterParams] = useState({ genre: '', search: '' });
  const queryString = new URLSearchParams(filterParams).toString();
  const { data, loading, error } = useFetch(`/books?${queryString}`);

  // dispatch({type: type.action, payload : update l'etat changé}) - Envoyer des action au reducer pr modifier l'etat et re-rendering
  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_BOOKS', payload: data });
    }
  }, [data]);

  const setGenre = (genre) => setFilterParams((prev) => ({ ...prev, genre }));
  const setSearch = (search) =>
    setFilterParams((prev) => ({ ...prev, search }));

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        dispatch,
        loading,
        error,
        setGenre,
        setSearch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
