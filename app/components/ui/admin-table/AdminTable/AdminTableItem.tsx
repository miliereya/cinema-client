import { FC } from 'react'

import AdminActions from './AdminActions/AdminActions'
import s from './AdminTable.module.scss'
import { IAdminTableItem } from './admin-table.interface'

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={s.item}>
			{tableItem.items.map((val) => (
				<div key={val}>{val}</div>
			))}
			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={removeHandler}
			/>
		</div>
	)
}
export default AdminTableItem
