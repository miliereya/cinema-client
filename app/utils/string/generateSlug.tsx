export const generateSlug = (str: string): string => {
	let url: string = str.replace(/[\s]+/gi, '-')
	url = url
		.replace(/[^0-9a-z_\-]+/gi, '')
		.replace('---', '-')
		.replace('--', '-')
		.toLowerCase()
	return url
}
