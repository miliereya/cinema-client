import MovieList from '@/components/screens/admin/movies/MovieList'
import { NextPageAuth } from '@/shared/types/auth'

const MovieListPage: NextPageAuth = () => {
	return <MovieList />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
