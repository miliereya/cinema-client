import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data: genres } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu
			menu={{
				title: 'Popular genres',
				items: genres || [],
			}}
		/>
	)
}
export default GenreMenu
