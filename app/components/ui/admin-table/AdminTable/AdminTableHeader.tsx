import cn from 'classnames'
import { FC } from 'react'

import s from './AdminTable.module.scss'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(s.item, s.itemHeader)}>
			{headerItems.map((val) => (
				<div key={val}>{val}</div>
			))}
			<div>Actions</div>
		</div>
	)
}
export default AdminTableHeader
