import { atom } from 'recoil';
import { Movie } from '../types';

export const movieAtom = atom<Movie>({
  key: 'movieAtom',
  default: {
    totalPages: 0,
    totalElements: 0,
    pageable: {
      pageNumber: 0,
      pageSize: 0,
      sort: {
        sorted: false,
        unsorted: false,
        empty: false,
      },
      offset: 0,
      unpaged: false,
      paged: false,
    },
    numberOfElements: 0,
    first: false,
    last: false,
    size: 0,
    content: [],
    number: 0,
    sort: {
      sorted: false,
      unsorted: false,
      empty: false,
    },
    empty: false,
  },
});

export const selectedPageNumberAtom = atom<number>({
  key: 'selectedPageNumberAtom',
  default: -1,
});

export const isLoadingAtom = atom<boolean>({
  key: 'isLoadingAtom',
  default: false,
});
