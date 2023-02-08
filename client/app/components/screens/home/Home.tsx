import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Navigation from '@/components/layout/Navigation/Navigation'
import Payment from '@/components/layout/Payment/Payment'

import Meta from '@/utils/meta/Meta'

import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<Meta title="Home page" description="Education in best Uni in SK">
			{/* <div className={styles.layout}>
				<Navigation />
		
			</div> */}
			<Payment />
		</Meta>
	)
}
export default Home
