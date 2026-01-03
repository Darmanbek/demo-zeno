import { createFileRoute, Outlet } from "@tanstack/react-router"
import { AuthLayout } from "src/pages/auth"

export const Route = createFileRoute("/auth/_auth")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<AuthLayout>
				<Outlet />
			</AuthLayout>
		</>
	)
}
