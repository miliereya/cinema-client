import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { MovieService } from '@/services/movie.service'

import { toastError } from '@/utils/error/toast-error'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '@/config/url.config'

import { IMovieEditInput } from './movie-edit.interface'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter()

	const movieId = String(query.id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(err) {
				toastError(err, 'Get movie')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update movie',
		(data: IMovieEditInput) => MovieService.update(movieId, data),
		{
			onError: (err) => {
				toastError(err, 'Update movie')
			},
			onSuccess: () => {
				toastr.success('Update movie', 'Movie updated successfully')
				push(getAdminUrl('/movies'))
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (
		data: IMovieEditInput
	) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
