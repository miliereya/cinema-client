import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SubHeading from '@/components/ui/heading/SubHeading'

import { IMovie } from '@/shared/types/movie'

import { MovieService } from '@/services/movie.service'

import s from '../Admin.module.scss'
import Link from 'next/link'
import { getMovieUrl } from '@/config/url.config'
import Image from 'next/image'

const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Popular Movie admin',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)
	return (
		<div className={cn(s.block, s.popular)}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoader className="h-28" />
			) : (
				movie && (
					<>
						<h3>{movie.title} opened {movie.countOpened} times</h3>
						<Link href={getMovieUrl(movie.slug)}>
							<Image 
								width={285}
								height={196}
								src={movie.bigPoster}
								alt={movie.title}
								className={s.image}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	)
}
export default PopularMovie
