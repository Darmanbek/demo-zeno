import { Layout } from "antd"
import type { FC, ReactNode } from "react"

interface MainLayoutProps {
	children?: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>{children}</Layout>
		</>
	)
}

export { MainLayout }
