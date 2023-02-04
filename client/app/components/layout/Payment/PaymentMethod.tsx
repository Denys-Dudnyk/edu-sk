import { FC } from 'react'

import styles from './Payment.module.scss'

const PaymentMethod: FC = () => {
	return (
		<div className={styles.method}>
			<h1 className={styles.left}>Bill Monthly</h1>
			<label className={styles.switch}>
				<input type="checkbox" />
				<span className={styles.slider_round}></span>
			</label>
			<h1 className={styles.right}>Bill Annually</h1>
		</div>
	)
}
export default PaymentMethod
