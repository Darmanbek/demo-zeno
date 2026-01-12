import { CloudDownloadOutlined, CrownOutlined, DoubleRightOutlined } from "@ant-design/icons"
import { Link } from "@tanstack/react-router"
import { Breadcrumb, Button, ConfigProvider, Flex, Space, Typography } from "antd"
import { css, cx } from "antd-style"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"

const AnalyticsPage: FC = () => {
	const { token } = useToken()

	return (
		<>
			<Flex
				gap={8}
				justify={"space-between"}
				align={"center"}
			>
				<div>
					<ConfigProvider
						theme={{
							components: {
								Breadcrumb: {
									linkColor: token.colorPrimaryText,
									linkHoverColor: token.colorPrimaryTextHover,
								},
							},
						}}
					>
						<Breadcrumb
							separator={<DoubleRightOutlined />}
							classNames={{
								item: cx(css``),
							}}
							items={[
								{
									key: "/dashboard",
									title: <Link to={"/dashboard/sales"}>Dashboard</Link>,
								},
								{
									key: "/dashboard/analytics",
									title: "Analytics",
								},
							]}
						/>
					</ConfigProvider>
					<Typography.Title
						style={{ fontWeight: 500 }}
						level={4}
					>
						Analytics
					</Typography.Title>
				</div>
				<Space>
					<Button
						variant={"filled"}
						color={"primary"}
						icon={<CloudDownloadOutlined />}
					>
						Export
					</Button>
					<Button
						variant={"filled"}
						color={"cyan"}
						icon={<CrownOutlined />}
					>
						Upgrade plan
					</Button>
				</Space>
			</Flex>
		</>
	)
}

export { AnalyticsPage }
