import axios from 'axios';
import { Movie } from '../types';
import { useSetRecoilState } from 'recoil';
import { movieAtom } from '../recoils/atoms';

function useMovieHooks() {
  const setMovie = useSetRecoilState(movieAtom);

  const fetchMovies = async (
    title: string | null,
    director: string | null,
    startDate: string | null,
    endDate: string | null,
    sort: string | null,
    page: number,
    size: number,
  ) => {
    const movie = await axios
      .get<Movie>('http://localhost:8080/movies', { params: { title, director, startDate, endDate, sort, page, size } })
      .then((res) => res.data);

    setMovie(movie);
  };

  return { fetchMovies };
}

export default useMovieHooks;
