import instance, { axiosDefault } from 'api/interceptors'

import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.interface'

import { IGenre } from '@/shared/types/genre'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosDefault.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getById(_id: string) {
		return instance.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},

	async create() {
		return instance.post<string>(getGenresUrl('/'))
	},

	async update(_id: string, data: IGenreEditInput) {
		return instance.put<string>(getGenresUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return instance.delete<string>(getGenresUrl(`/${_id}`))
	},
}
