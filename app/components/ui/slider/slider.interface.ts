import { IMovie } from "@/shared/types/movie"

export interface ISlide extends Pick<IMovie, '_id' | 'bigPoster' | 'title'>{
    subtitle?: string
    link: string
}