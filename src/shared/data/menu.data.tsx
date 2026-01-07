import { HomeOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { DotOutlined } from "../ui/icons"

export type MenuItem = Required<MenuProps>["items"][number]

export const menuData: MenuItem[] = [
	{
		key: "Main",
		type: "group",
		label: "Main",
	},
	{
		key: "/dashboard",
		icon: <HomeOutlined />,
		label: "Dashboard",
		children: [
			{
				key: "/dashboard/sales",
				icon: <DotOutlined />,
				label: "Sales",
			},
		],
	},
	{
		key: "Web Apps",
		type: "group",
		label: "Web Apps",
	},
]
