import { FC } from 'react'

import SkeletonLoader from '../../SkeletonLoader'

import s from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { ITableItem } from './admin-table.interface'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	tableItems,
	headerItems,
	isLoading,
	removeHandler,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((item) => (
					<AdminTableItem
						key={item._id}
						removeHandler={() => removeHandler(item._id)}
						tableItem={item}
					/>
				))
			) : (
				<div className={s.notFound}>Elements not found.</div>
			)}
		</div>
	)
}
export default AdminTable
