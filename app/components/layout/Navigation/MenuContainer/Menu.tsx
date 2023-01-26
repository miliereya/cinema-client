import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'

import s from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const DynamicAuthItems = dynamic(() => import('./Auth/AuthItems'), {
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={s.menu}>
			<div className={s.heading}>{title}</div>
			<ul className={s.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' && <DynamicAuthItems />}
			</ul>
		</div>
	)
}
export default Menu
