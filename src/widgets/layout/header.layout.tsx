import {
	BellOutlined,
	FullscreenOutlined,
	SearchOutlined,
	SettingOutlined,
	ShoppingCartOutlined,
	TranslationOutlined,
	UserOutlined,
} from "@ant-design/icons"
import { Avatar, Badge, Button, ConfigProvider, Flex, Input, Layout, Space } from "antd"
import type { FC } from "react"
import { useToken } from "src/shared/hooks"
import { useThemeStore } from "src/shared/store"
import { MenuButton, ThemeButton } from "src/widgets/actions"

const { Header } = Layout

const HeaderLayout: FC = () => {
	const { token } = useToken()
	const isDark = useThemeStore((state) => state.isDark)

	return (
		<>
			<ConfigProvider
				theme={{
					components: {
						Button: {
							colorText: isDark ? "rgba(255,255,255,0.5)" : "#61748f",
						},
					},
				}}
			>
				<Header
					style={{
						backgroundColor: token.colorBgContainer,
						height: 68,
						lineHeight: 1,
						borderBlockEnd: `1px solid ${token.colorBorder}`,
						paddingInline: token.padding,
					}}
				>
					<Flex
						align={"center"}
						justify={"space-between"}
						style={{ height: "100%" }}
					>
						<Space>
							<MenuButton />
							<Input
								prefix={<SearchOutlined />}
								placeholder={"Search anything here..."}
								style={{ borderRadius: 9999 }}
							/>
						</Space>
						<Space>
							<Button
								size={"large"}
								shape={"circle"}
								type={"text"}
								icon={<TranslationOutlined />}
							/>
							<ThemeButton size={"large"} />
							<Badge
								status={"default"}
								count={5}
								styles={{
									indicator: {
										translate: "-50% 50%",
									},
								}}
								color={"cyan"}
								size={"small"}
							>
								<Button
									size={"large"}
									shape={"circle"}
									type={"text"}
									icon={<ShoppingCartOutlined />}
								/>
							</Badge>
							<Badge
								status={"processing"}
								color={"purple"}
								dot={true}
								styles={{
									indicator: {
										translate: "-100% 100%",
									},
								}}
							>
								<Button
									size={"large"}
									shape={"circle"}
									type={"text"}
									icon={<BellOutlined />}
								/>
							</Badge>
							<Button
								size={"large"}
								shape={"circle"}
								type={"text"}
								icon={<FullscreenOutlined />}
							/>
							<Avatar
								style={{ backgroundColor: token.colorPrimary }}
								size={"small"}
								icon={<UserOutlined />}
							/>
							<Button
								size={"large"}
								shape={"circle"}
								type={"text"}
								icon={<SettingOutlined />}
							/>
						</Space>
					</Flex>
				</Header>
			</ConfigProvider>
		</>
	)
}

export { HeaderLayout }
