import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

import { AdminService } from '@/services/admin.service'

import s from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)
	return (
		<div className={cn(s.block, s.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoader className='h-16 w-20'/>
				) : (
					<div className={s.number}>{response?.data}</div>
				)}
				<div className={s.description}>users</div>
			</div>
		</div>
	)
}
export default CountUsers
