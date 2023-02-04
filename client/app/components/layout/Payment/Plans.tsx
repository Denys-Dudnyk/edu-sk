import Image from 'next/image'
import { FC } from 'react'

import checkImage from '@/assets/images/check.svg'

import styles from './Payment.module.scss'

const Plans: FC = () => {
	return (
		<div className={styles.plan}>
			<div className={styles.element}>
				<h2>Base</h2>
				<div className={styles.description}>
					<div className={styles.image}>
						<Image
							src={checkImage}
							width={16}
							height={16}
							alt="Education in Europe"
							draggable={false}
						/>
					</div>
					<p>Upload Video up to 720p Resolution</p>
				</div>
				<div className={styles.description}>
					<div className={styles.image}>
						<Image
							src={checkImage}
							width={16}
							height={16}
							alt="Education in Europe"
							draggable={false}
						/>
					</div>
					<p>Attachment & Post Scheduling</p>
				</div>
				<div className={styles.description}>
					<div className={styles.image}>
						<Image
							src={checkImage}
							width={16}
							height={16}
							alt="Education in Europe"
							draggable={false}
						/>
					</div>
					<p>Set your rates</p>
				</div>
				<div className={styles.description}>
					<div className={styles.image}>
						<Image
							src={checkImage}
							width={16}
							height={16}
							alt="Education in Europe"
							draggable={false}
						/>
					</div>
					<p>Exclusive Deals</p>
				</div>
				<div className={styles.description}>
					<div className={styles.image}>
						<Image
							src={checkImage}
							width={16}
							height={16}
							alt="Education in Europe"
							draggable={false}
						/>
					</div>
					<p>Advanced Statistics</p>
				</div>

				<p>
					<span>123$</span>
					<span>/ month</span>
				</p>

				<button>Choose</button>
			</div>
		</div>
	)
}
export default Plans
