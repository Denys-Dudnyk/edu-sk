import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMenuItem } from '../menu.interface'

import styles from './AuthButtons.module.scss'

const LoginButton: FC<{ item: IMenuItem }> = ({ item: { link, title } }) => {
	const { asPath } = useRouter()

	return (
		<li className={styles.btn}>
			<Link href={link}>
				<button className={styles.btn_auth}>{title}</button>
			</Link>
		</li>
	)
}
export default LoginButton
