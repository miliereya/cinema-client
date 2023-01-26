import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import s from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link
			href={item.link}
			className={cn(s.item, {
				[s.withText]: item.content,
				[s.horizontal]: variant === 'horizontal',
				[s.vertical]: variant === 'vertical',
			})}
		>
			<Image
				alt={item.name}
				src={item.posterPath}
				fill
				draggable={false}
				priority
			/>
			{item.content && (
				<div className={s.content}>
					<div className={s.title}>{item.content.title}</div>
					{item.content.subTitle && (
						<div className={s.subTitle}>
							{item.content.subTitle}
						</div>
					)}
				</div>
			)}
		</Link>
	)
}
export default GalleryItem
