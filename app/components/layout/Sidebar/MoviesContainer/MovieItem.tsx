import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import { IMovie } from '@/shared/types/movie'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import s from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { slug, title, poster, genres, rating } = movie
	return (
		<div className={s.item}>
			<Link href={getMovieUrl(slug)}>
				<Image
					width={65}
					height={97}
					src={poster}
					alt={title}
					draggable={false}
					priority
				/>
			</Link>
			<div className={s.info}>
				<div className={s.title}>{title}</div>
				<div className={s.genres}>
					{genres.map((genre, index) => (
						<Link key={genre._id} href={getGenreUrl(genre.slug)}>
							{getGenresListEach(
								index,
								genres.length,
								genre.name
							)}
						</Link>
					))}
				</div>
				<div className={s.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}
export default MovieItem
