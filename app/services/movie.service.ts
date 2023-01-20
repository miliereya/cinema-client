import { axiosDefault } from 'api/interceptors'

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
}
