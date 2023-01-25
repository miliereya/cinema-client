import GenreEdit from '@/components/screens/admin/genre/GenreEdit'
import { NextPageAuth } from '@/shared/types/auth'

const GenreEditPage: NextPageAuth = () => {
	return <GenreEdit />
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
