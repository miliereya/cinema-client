import { IMovie } from "@/shared/types/movie";

export interface IMovieEditInput extends Omit<IMovie, '_id'> {}