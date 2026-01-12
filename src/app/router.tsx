import { createRouter } from "@tanstack/react-router"
import { routeTree } from "src/routeTree.gen.ts"
import { NotFoundBoundary } from "src/widgets/router-boundary"

export const router = createRouter({
	routeTree,
	context: {
		auth: undefined,
	},
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
	// defaultPendingComponent: () => <Loader loading={true} />,
	defaultNotFoundComponent: NotFoundBoundary,
	// defaultErrorComponent: ErrorBoundary,
})

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}
