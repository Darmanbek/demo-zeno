import { Layout } from "antd"
import type { FC, ReactNode } from "react"
import { useToken } from "src/shared/hooks"
import { useMenuStore } from "src/shared/store"

const { Sider } = Layout

interface SidebarContainerProps {
	children?: ReactNode
}

const SidebarContainer: FC<SidebarContainerProps> = ({ children }) => {
	const { token } = useToken()
	const isCollapsed = useMenuStore(state => state.isCollapsed)
	
	return (
		<>
			<Sider
				collapsed={isCollapsed}
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
