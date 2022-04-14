export interface MovieTMDB {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface ResponseMoviesDataSuccesful {
  page: number;
  results: MovieTMDB[];
  total_pages: number;
  total_results: number;
}

export interface ResponseMoviesError {
  status_message: string;
  status_code: number;
}
