import { useQuery } from 'react-query';



import { GenreService } from '@/services/genre.service';



import { toastError } from '@/utils/error/toast-error';
import { IOption } from '@/components/ui/select/select.interface';


export const useAdminGenres = () => {
	const queryData = useQuery('List of genre', () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					label: genre.name,
                    value: genre._id
				})
			),

		onError: (error) => {
			toastError(error, 'List of genre failed')
		},
	})

	return queryData
}