import instance from 'api/interceptors'

import { IUser } from '@/shared/types/user'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return instance.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
    async deleteUser(_id: string) {
        return instance.delete<string>(getUsersUrl(`/${_id}`))
    }
}
