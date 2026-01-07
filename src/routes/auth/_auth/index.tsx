import { createFileRoute, Navigate, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/auth/_auth/")({
	component: RouteComponent,
	beforeLoad: () => {
		throw redirect({
			to: "/auth/login",
			replace: true,
		})
	},
})

function RouteComponent() {
	return (
		<Navigate
			to={"/auth/login"}
			replace={true}
		/>
	)
}
