import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import s from './Slider.module.scss'
import { ISlide } from './slider.interface'

interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()
	return (
		<div className={s.slide}>
			{slide.bigPoster && (
				<Image
					fill
					className={s.image}
					src={slide.bigPoster}
					alt={slide.title}
					draggable={false}
					unoptimized
					priority
				/>
			)}
			<div className={s.content}>
				<div className={s.heading}>{slide.title}</div>
				<div className={s.subHeading}>{slide.subtitle}</div>
				<button className={s.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}

export default SlideItem
