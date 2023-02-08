import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import Logo from '../Logo'

import styles from './Menu.module.scss'
import NavItem from './NavItem'
import AuthItems from './auth/AuthItems'
import { IMenu } from './menu.interface'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
})

const Menu: FC<{ item: IMenu }> = ({ item: { items, title } }) => {
	return (
		<nav>
			<ul>
				{items.map((item) => (
					<NavItem key={item.link} item={item} />
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>

			{/* <button className={styles.btn}>Sign in</button> */}
		</nav>
	)
}
export default Menu
