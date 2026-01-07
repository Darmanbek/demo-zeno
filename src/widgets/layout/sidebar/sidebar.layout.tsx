import type { FC } from "react"
import { SidebarContainer } from "./sidebar.container"
import { Flex, Image, Menu } from "antd"
import { useToken } from "src/shared/hooks"
import { menuData } from "src/shared/data"

const SidebarLayout: FC = () => {
	const { token } = useToken()

	return (
		<>
			<SidebarContainer>
				<Flex
					justify={"center"}
					align={"center"}
					style={{
						padding: token.padding,
						borderBlockEnd: `1px solid var(--ant-color-border)`,
						height: 68,
					}}
				>
					<Image
						height={32}
						src={"/logo-light.png"}
					/>
				</Flex>
				<Menu items={menuData} mode={"inline"} />
			</SidebarContainer>
		</>
	)
}

export { SidebarLayout }
