import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "src/pages/home"

export const Route = createFileRoute("/_layout/dashboard/sales")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
		<>
			<HomePage />
		</>
	)
}
