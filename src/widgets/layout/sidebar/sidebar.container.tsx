import { Layout } from "antd"
import type { FC, ReactNode } from "react"
import { useToken } from "src/shared/hooks"

const { Sider } = Layout

interface SidebarContainerProps {
	children?: ReactNode
}

const SidebarContainer: FC<SidebarContainerProps> = ({ children }) => {
	const { token } = useToken()

	return (
		<>
			<Sider
				width={240}
				theme={"light"}
				style={{
					borderInlineEnd: `1px solid ${token.colorBorder}`,
				}}
			>
				{children}
			</Sider>
		</>
	)
}

export { SidebarContainer }
