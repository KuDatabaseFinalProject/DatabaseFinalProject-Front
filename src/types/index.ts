export interface Movie {
  totalPages: number;
  totalElements: number;
  pageable: Pageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  content: MovieContent[];
  number: number;
  sort: Sort;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface MovieContent {
  id: number;
  title: string;
  engTitle: string;
  year: number;
  country: string;
  genre?: string;
  status?: string;
  director?: string;
  company?: string;
  mtype: string;
}
