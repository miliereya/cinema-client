import { FC } from 'react'

import AuthItems from './Auth/AuthItems'
import s from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={s.menu}>
			<div className={s.heading}>{title}</div>
			<ul className={s.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}
export default Menu
