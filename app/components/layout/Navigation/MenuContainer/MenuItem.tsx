import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import s from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { link, title, icon } }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[s.active]: asPath === link
			})}
		>
			<Link href={link}>
				<MaterialIcon name={icon}/>
				<span>{title}</span>
			</Link>
		</li>
	)
}
export default MenuItem
