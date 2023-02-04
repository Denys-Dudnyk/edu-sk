import { FC } from 'react'

import Menu from './Menu'
import { navItems } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu item={navItems} />
		</div>
	)
}
export default MenuContainer
