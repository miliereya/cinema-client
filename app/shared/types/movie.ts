import { IActor } from "./actor"
import { IGenre } from "./genre"

export interface IParameters {
    year: number
    duration: number
    country: string
}

export interface IMovie {
    _id: string
    poster: string
    bigPoster: string
    title: string
    parameters: IParameters
    genres: IGenre[]
    actors: IActor[]
    countOpened: number
    videoUrl: string
    rating: number
    slug: string
}