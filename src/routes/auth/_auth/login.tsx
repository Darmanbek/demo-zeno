import { createFileRoute } from "@tanstack/react-router"
import { LoginPage } from "src/pages/auth"

export const Route = createFileRoute("/auth/_auth/login")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <LoginPage />
    </>
  )
}
