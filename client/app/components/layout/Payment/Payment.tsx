import { FC } from 'react'

import styles from './Payment.module.scss'
import PaymentMethod from './PaymentMethod'
import Plans from './Plans'

const Payment: FC = () => {
	return (
		<div className={styles.payment}>
			<PaymentMethod />
			<div className={styles.wrap}>
				<Plans />
				<Plans />
				<Plans />
				<Plans />
			</div>
		</div>
	)
}
export default Payment
