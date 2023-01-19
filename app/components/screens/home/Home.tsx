import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<div>home</div>
		</Layout>
	)
}

export default Home
