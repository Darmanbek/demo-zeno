import { CloudDownloadOutlined, FilterOutlined } from "@ant-design/icons"
import { Button, DatePicker, Flex, Space, Typography } from "antd"
import type { FC } from "react"

const HomePage: FC = () => {
	return (
		<>
			<Flex
				gap={8}
				justify={"space-between"}
				align={"center"}
			>
				<div>
					<Typography.Title
						style={{ fontWeight: 500 }}
						level={4}
					>
						Hey, Jack Miller 👋
					</Typography.Title>
					<Typography.Text type={"secondary"}>
						Manage customers and sales with real-time insights.
					</Typography.Text>
				</div>
				<Space>
					<DatePicker.RangePicker
						format={"D, MMM. YYYY"}
						style={{ maxWidth: 300 }}
					/>
					<Button icon={<CloudDownloadOutlined />} />
					<Button
						type={"primary"}
						icon={<FilterOutlined />}
					>
						Filter
					</Button>
				</Space>
			</Flex>
		</>
	)
}

export { HomePage }
