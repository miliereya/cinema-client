import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { toastError } from '@/utils/error/toast-error'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '@/config/url.config'
import { IActorEditInput } from './actor-edit.interface'
import { ActorService } from '@/services/actor.service'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push, query } = useRouter()

	const actorId = String(query.id)

	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(err) {
				toastError(err, 'Get actor')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update actor',
		(data: IActorEditInput) => ActorService.update(actorId, data),
		{
			onError: (err) => {
				toastError(err, 'Update actor')
			},
			onSuccess: () => {
				toastr.success('Update actor', 'actor updated successfully')
				push(getAdminUrl('/actors'))
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (
		data: IActorEditInput
	) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
