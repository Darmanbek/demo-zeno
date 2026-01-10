import { ConfigProvider, Flex, Image, Menu } from "antd"
import { type FC, useMemo } from "react"
import { menuData } from "src/shared/data"
import { useToken } from "src/shared/hooks"
import { useMenuStore, useThemeStore } from "src/shared/store"
import { SidebarContainer } from "./sidebar.container"

const SidebarLayout: FC = () => {
	const { token } = useToken()
	const isDark = useThemeStore(state => state.isDark)
	const isCollapsed = useMenuStore(state => state.isCollapsed)
	
	const menuItems = useMemo(() => {
		if (isCollapsed) {
			return menuData?.filter(el => el?.type !== "group")
		}
		
		return menuData
	}, [isCollapsed])
	
	return (
		<>
			<SidebarContainer>
				<Flex
					justify={"center"}
					align={"center"}
					style={{
						padding: token.padding,
						borderBlockEnd: `1px solid ${token.colorBorder}`,
						height: 68,
					}}
				>
					<Image
						height={32}
						src={isCollapsed ? "/logo.png" : "/logo-light.png"}
						fallback={isCollapsed ? "/public/logo.png" : "/public/logo-light.png"}
						style={{
							flexShrink: 0,
						}}
						preview={false}
						hidden={isDark}
					/>
					<Image
						height={32}
						src={isCollapsed ? "/logo.png" : "/logo-dark.png"}
						fallback={isCollapsed ? "/public/logo.png" : "/public/logo-dark.png"}
						style={{
							flexShrink: 0,
						}}
						preview={false}
						hidden={!isDark}
					/>
				</Flex>
				<ConfigProvider
					theme={{
						components: {
							Menu: {
								groupTitleColor: isDark ? "rgba(255,255,255,0.5)" : "#61748f",
								itemColor: isDark ? "rgba(255,255,255,0.5)" : "#61748f"
							}
						}
					}}
				>
					<Menu inlineCollapsed={isCollapsed} items={menuItems} mode={"inline"} style={{
						paddingInline: 6,
						overflowX: "hidden",
						overflowY: "auto",
						height: "calc(100vh - 68px)",
						scrollbarWidth: "thin",
						scrollbarColor: `${token.colorBorder} transparent`,
						paddingBottom: token.paddingLG * 2,
					}} styles={{
						itemTitle: {
							fontSize: 11,
							fontWeight: 500,
							letterSpacing: 0.8,
							textTransform: "uppercase",
							opacity: 0.6,
							padding: `${token.padding}px ${token.paddingLG}px`,
						},
					}} />
				</ConfigProvider>
			</SidebarContainer>
		</>
	)
}

export { SidebarLayout }
