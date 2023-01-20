import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie'

import { getMovieUrl } from '@/config/url.config'

import s from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={s.list}>
			{movies.length ? (
				movies.map((movie) => {
					const { _id, slug, title } = movie
					return (
						<Link key={_id} href={getMovieUrl(slug)}>
							<Image
								src={movie.poster}
								width={50}
								height={50}
								alt={title}
								className="object-cover object-top"
								draggable={false}
							/>
                            <span>{title}</span>
						</Link>
					)
				})
			) : (
				<div className="text-white text-center my-4">
					Movies not found!
				</div>
			)}
		</div>
	)
}
export default SearchList
