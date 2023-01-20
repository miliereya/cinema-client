import { IMovie } from "@/shared/types/movie"

export interface IMovieList {
    title: string
    link: string
    movies: IMovie[]
}