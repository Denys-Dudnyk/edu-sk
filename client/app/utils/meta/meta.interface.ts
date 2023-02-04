import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export interface ISeo {
	title: string
	description?: string
	image?: string | StaticImageData
	children: ReactNode
}
