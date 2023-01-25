import instance, { axiosDefault } from 'api/interceptors';



import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.interface';



import { IActor } from '@/shared/types/actor';



import { getActorsUrl } from '@/config/api.config';


export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosDefault.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	
	async getById(_id: string) {
		return instance.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
	
	async create() {
		return instance.post<string>(getActorsUrl('/'))
	},
	
	async update(_id: string, data: IActorEditInput) {
		return instance.put<string>(getActorsUrl(`/${_id}`), data)
	},
	
	async delete(_id: string) {
		return instance.delete<string>(getActorsUrl(`/${_id}`))
	},
}