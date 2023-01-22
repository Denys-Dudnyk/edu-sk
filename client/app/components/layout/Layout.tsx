import { FC } from 'react'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Navigation />
		</div>
	)
}
export default Layout
