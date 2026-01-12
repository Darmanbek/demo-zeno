import { createFileRoute } from "@tanstack/react-router"
import { AnalyticsPage } from "src/pages/analytics"

export const Route = createFileRoute("/_layout/dashboard/analytics")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<AnalyticsPage />
		</>
	)
}
