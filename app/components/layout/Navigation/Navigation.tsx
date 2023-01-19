import Logo from '@/components/ui/logo/Logo'
import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'
import s from './Navigation.module.scss'

const Navigation:FC = () => {
	return <div className={s.navigation}>
		<Logo />
		<MenuContainer />
	</div>
}

export default Navigation
