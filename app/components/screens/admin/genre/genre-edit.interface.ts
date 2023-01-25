import { IGenre } from "@/shared/types/genre";

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}