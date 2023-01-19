import GenreMenu from './Genres/GenreMenu'
import Menu from './Menu'
import { generalMenu, navigationMenu } from './menu.data'

const MenuContainer = () => {
	return (
		<>
			<Menu menu={navigationMenu} />
			<GenreMenu />
			<Menu menu={generalMenu} />
		</>
	)
}
export default MenuContainer
