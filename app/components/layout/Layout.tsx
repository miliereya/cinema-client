import { FC } from 'react'

import s from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import { ILayout } from './layout.interface'

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={s.layout}>
			<Navigation />
			<div className={s.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
