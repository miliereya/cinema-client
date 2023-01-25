import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/error/toast-error'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '@/config/url.config'

import { IGenreEditInput } from './genre-edit.interface'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { push, query } = useRouter()

	const genreId = String(query.id)

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(err) {
				toastError(err, 'Get genre')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.update(genreId, data),
		{
			onError: (err) => {
				toastError(err, 'Update genre')
			},
			onSuccess: () => {
				toastr.success('Update genre', 'Genre updated successfully')
				push(getAdminUrl('/genres'))
			},
		}
	)

	const onSubmit: SubmitHandler<IGenreEditInput> = async (
		data: IGenreEditInput
	) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
