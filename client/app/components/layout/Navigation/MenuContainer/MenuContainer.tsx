import { FC } from 'react'

import Menu from './Menu'
import styles from './Menu.module.scss'
import { navItems, userMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div className={styles.container}>
			<Menu item={navItems} />
			<Menu item={userMenu} />
		</div>
	)
}
export default MenuContainer
