import { FC, MouseEvent } from 'react'

import { useActions } from '@/hooks/useActions'

import styles from './AuthButtons.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li className={styles.btn}>
			<button onClick={handleLogout} className={styles.btn_auth}>
				Logout
			</button>
		</li>
	)
}
export default LogoutButton
