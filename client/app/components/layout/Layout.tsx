import { FC, PropsWithChildren } from 'react'

import Meta from '@/utils/meta/Meta'

import Home from '../screens/home/Home'

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Payment from './Payment/Payment'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		// <Meta title="Home page" description="Education in best Uni in SK">
		<div className={styles.layout}>
			<Navigation />
			{children}
		</div>
		// </Meta>
	)
}
export default Layout
