import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

export default function Error404() {
	return (
		<Meta title="Page not found">
			{/* <div className={styles.block}>
				<h1>404 - Page not found</h1>
			</div> */}
			<Heading title="404 - Page not found" />
		</Meta>
	)
}
