export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (e: any): string =>
	e.response && e.response.data
		? typeof e.response.data.message === 'object'
			? e.response.data.message[0]
			: e.response.data.message
		: e.message
