import { createRouter } from "@tanstack/react-router"
import { routeTree } from "src/routeTree.gen.ts"

export const router = createRouter({
	routeTree,
	context: {
		auth: undefined,
	},
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
	// defaultPendingComponent: () => <Loader loading={true} />,
	// defaultNotFoundComponent: NotFound,
	// defaultErrorComponent: ErrorBoundary,
})

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}
