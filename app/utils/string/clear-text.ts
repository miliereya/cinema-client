export const onlyText = (
	_string: string,
	limit: null | number = null
): string => {
	let result = _string
		.replace(/<[^>]+>/g, '')
		.replace(/&[^;]+./g, '')
		.replace(
			/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
			''
		)
	if (limit) result = result.slice(0, limit) + '...'

	return result
}
