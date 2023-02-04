import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const NavItem: FC<{ item: IMenuItem }> = ({ item: { link, title } }) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link href={link}>
				<a
					className={cn(
						{
							[styles.active]: asPath === link,
						},
						styles.link
					)}
				>
					<span>{title}</span>
				</a>
			</Link>
		</li>
	)
}
export default NavItem
