import instance, { axiosDefault } from 'api/interceptors'

import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movie'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosDefault.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	
	async getMostPopularMovies() {
		const { data: movies } = await axiosDefault.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},

	async getById(_id: string) {
		return instance.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async create() {
		return instance.post<string>(getMoviesUrl('/'))
	},

	async update(_id: string, data: IMovieEditInput) {
		return instance.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return instance.delete<string>(getMoviesUrl(`/${_id}`))
	},
}
