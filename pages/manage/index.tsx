import { NextPage } from 'next'

import Admin from '@/components/screens/admin/home/Admin'

import { NextPageAuth } from '@/shared/types/auth'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
