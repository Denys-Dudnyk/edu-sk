import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import checkImage from '@/assets/images/check.svg'

import styles from './Payment.module.scss'

const Plans: FC = () => {
	const { user } = useAuth()

	return (
		<>
			<Script
				async
				strategy="lazyOnload"
				src="https://js.stripe.com/v3/pricing-table.js"
			/>
			<stripe-pricing-table
				pricing-table-id="prctbl_1MZE8sLMrciNrUbdglzxhHnI"
				publishable-key="pk_test_51MNgnRLMrciNrUbdxvNhVnlFAnP20boQCnUUBMH7nxfRnPin63IpmfKT5ECx953gwswz9Fl22Zf0jTPJrVUFzNd300pocExZQd"
			/>

			{/* <div className={styles.plan}>
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

					{user ? (
						<Link href={'/payment'}>
							<button>Choose</button>
						</Link>
					) : (
						<Link href={'/auth'}>
							<button>Choose</button>
						</Link>
					)}
				</div>
			</div> */}
		</>
	)
}
export default Plans
