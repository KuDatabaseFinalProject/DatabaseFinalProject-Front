import axios from 'axios';
import { Movie } from '../types';
import { useSetRecoilState } from 'recoil';
import { isLoadingAtom, movieAtom, selectedPageNumberAtom } from '../recoils/atoms';

function useMovies() {
  const setMovie = useSetRecoilState(movieAtom);
  const setSelectedPageNumber = useSetRecoilState(selectedPageNumberAtom);
  const setIsLoading = useSetRecoilState(isLoadingAtom);

  const fetchMovies = async (
    title: string | null | undefined,
    director: string | null | undefined,
    startYear: number | null | undefined,
    endYear: number | null | undefined,
    sort: string | null | undefined,
    page: number,
    size: number,
  ) => {
    setIsLoading(true);
    const movie = await axios
      .get<Movie>('http://localhost:8080/movies', { params: { title, director, startDate: startYear, endDate: endYear, sort, page, size } })
      .then((res) => res.data);

    setMovie(movie);
    setSelectedPageNumber(page);
    setIsLoading(false);
  };

  return { fetchMovies };
}

export default useMovies;
