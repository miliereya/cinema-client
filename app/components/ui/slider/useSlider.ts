import { useState } from 'react'

export const useSlider = (length: number) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const [slideIn, setSlideIn] = useState<boolean>(true)

	const isExistsNext = currentIndex + 1 < length
	const isExistsPrevious = currentIndex ? currentIndex - 1 < length : false

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex =
			direction === 'next' ? currentIndex + 1 : currentIndex - 1
		setSlideIn(false)

		setTimeout(() => {
			setCurrentIndex(newIndex)
			setSlideIn(true)
		}, 300)
	}
	return {
		slideIn,
		index: currentIndex,
		isNext: isExistsNext,
		isPrev: isExistsPrevious,
		handleClick: handleArrowClick,
	}
}
