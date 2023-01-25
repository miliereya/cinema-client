import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import s from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { title, link } }) => {
	const { asPath } = useRouter()
	return (
		<li>
			<Link href={link} className={cn({ [s.active]: asPath === link })}>
				{title}
			</Link>
		</li>
	)
}
export default AdminNavItem
