import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a>
				<Image
					src={logoImage}
					width={146}
					height={52}
					alt="Education in Europe"
					draggable={false}
				/>
			</a>
		</Link>
	)
}
export default Logo
