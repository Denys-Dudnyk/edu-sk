import Link from 'next/link'
import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import Logo from './Logo'
import styles from './Menu.module.scss'
import NavItem from './NavItem'
import { IMenu } from './menu.interface'

const Menu: FC<{ item: IMenu }> = ({ item: { items, title } }) => {
	return (
		<nav className={styles.nav}>
			<Logo />
			<div className={styles.navigation}>
				<ul>
					{items.map((item) => (
						<NavItem key={item.link} item={item} />
					))}
				</ul>
			</div>
			<Link href={'/auth'}>
				<button className={styles.btn}>Sign in</button>
			</Link>
		</nav>
	)
}
export default Menu
