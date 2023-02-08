import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import NavItem from '../NavItem'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<NavItem
						item={{
							link: '/profile',
							title: 'Profile',
						}}
					/>

					{user?.isAdmin && (
						<NavItem
							item={{
								link: getAdminHomeUrl(),
								title: 'Admin Panel',
							}}
						/>
					)}
					<LogoutButton />
				</>
			) : (
				<LoginButton
					item={{
						link: '/auth',
						title: 'Login',
					}}
				/>
			)}
		</>
	)
}
export default AuthItems
