import { IMenu } from './menu.interface'

export const navItems: IMenu = {
	title: 'Menu',
	items: [
		{
			title: 'Home',
			link: '/',
		},
		{
			title: 'About Us',
			link: '/#',
		},
		{
			title: 'Our Services',
			link: '/##',
		},
		{
			title: 'Responsibilities',
			link: '/auth',
		},
		{
			title: 'Country',
			link: '/trending',
		},
	],
}

export const userMenu: IMenu = {
	title: 'General',
	items: [],
}
