import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getActorUrl, getMovieUrl } from '@/config/url.config'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: moviesData } = await MovieService.getAll()

		const slides: ISlide[] = moviesData.slice(0, 3).map((movie) => ({
			_id: movie._id,
			link: getMovieUrl(movie.slug),
			bigPoster: movie.bigPoster,
			subtitle: getGenresList(movie.genres),
			title: movie.title,
		}))

		const { data: actorsData } = await ActorService.getAll()
		const actors: IGalleryItem[] = actorsData.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const trendingMoviesData = await MovieService.getMostPopularMovies()
		const trendingMovies: IGalleryItem[] = trendingMoviesData.slice(0, 7).map(m => ({
			name: m.title,
            posterPath: m.bigPoster,
            link: getMovieUrl(m.slug)
		}))

		return {
			props: {
				slides,
				actors,
				trendingMovies
			} as IHome,
		}
	} catch (e) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: []
			},
		}
	}
}

export default HomePage
