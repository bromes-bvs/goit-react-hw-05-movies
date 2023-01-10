import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FiltredMovies from 'components/FiltredMoviesList/FiltredMovies';
import SearchBox from 'components/SearchBox/SearchBox';
import { fetchFilms } from 'components/service/tmdbAPI';

export default function Movies() {
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (query === '' || query === null) {
      return;
    }
    fetchFilms('search', 1, query)
      .then(setSearchList)
      .catch(() => {
        alert('Something wrong in search query');
      });
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    setSearchParams(value !== '' ? { query: value } : {});
    e.target.reset();
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit}></SearchBox>
      {searchList?.length > 0 && <FiltredMovies movies={searchList} />}
    </>
  );
}
