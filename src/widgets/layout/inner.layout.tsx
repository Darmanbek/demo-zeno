import { Layout } from "antd"
import type { FC, ReactNode } from "react"

interface InnerLayoutProps {
	children?: ReactNode
}

const InnerLayout: FC<InnerLayoutProps> = ({ children }) => {
	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>{children}</Layout>
		</>
	)
}

export { InnerLayout }
