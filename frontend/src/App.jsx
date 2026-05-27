import { useEffect, useState } from 'react'
import AppRouter from './app/routes/AppRouter'
import ErrorBanner from './shared/ui/ErrorBanner'
import { userServiceClient } from './infra/api/userServiceClient'

export default function App() {
	const [bootError, setBootError] = useState(null)

	useEffect(() => {
		let isMounted = true

		userServiceClient
			.get('/health/')
			.then(() => {
				if (isMounted) {
					setBootError(null)
				}
			})
			.catch((error) => {
				const message =
					error?.response?.data?.detail ||
					'We could not reach the backend. Please try again later.'
				if (isMounted) {
					setBootError(message)
				}
			})

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<>
			<ErrorBanner message={bootError} />
			<AppRouter />
		</>
	)
}
