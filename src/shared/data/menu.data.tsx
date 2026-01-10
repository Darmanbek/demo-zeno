import {
	AppstoreAddOutlined, BarChartOutlined,
	ContainerOutlined, GlobalOutlined,
	HomeOutlined,
	LockOutlined,
} from "@ant-design/icons"
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
			{
				key: "/dashboard/analytics",
				icon: <DotOutlined />,
				label: "Analytics",
			},
			{
				key: "/dashboard/ecommerce",
				icon: <DotOutlined />,
				label: "Ecommerce",
			},
		],
	},
	{
		key: "Web Apps",
		type: "group",
		label: "Web Apps",
	},
	{
		key: "/apps",
		icon: <AppstoreAddOutlined />,
		label: "Apps",
		children: [
			{
				key: "/apps/ecommerce",
				icon: <DotOutlined />,
				label: "Ecommerce",
				children: [
					{
						key: "/apps/ecommerce/add-products",
						icon: <DotOutlined />,
						label: "Add Products",
					},
					{
						key: "/apps/ecommerce/cart",
						icon: <DotOutlined />,
						label: "Cart",
					},
				],
			},
			{
				key: "/apps/full-calendar",
				icon: <DotOutlined />,
				label: "Full Calendar",
			},
			{
				key: "/apps/gallery",
				icon: <DotOutlined />,
				label: "Gallery",
			},
		],
	},
	{
		key: "Pages",
		type: "group",
		label: "Pages",
	},
	{
		key: "/auth",
		icon: <LockOutlined />,
		label: "Authentication",
		children: [
			{
				key: "/auth/login",
				icon: <DotOutlined />,
				label: "Sign In",
			},
			{
				key: "/auth/register",
				icon: <DotOutlined />,
				label: "Sign Up",
			},
		],
	},
	{
		key: "General",
		type: "group",
		label: "General",
	},
	{
		key: "/forms",
		icon: <ContainerOutlined />,
		label: "Forms",
		children: [
			{
				key: "/forms/form-advanced",
				icon: <DotOutlined />,
				label: "Form Advanced",
			},
			{
				key: "/forms/form-elements",
				icon: <DotOutlined />,
				label: "Form Elements",
				children: [
					{
						key: "/forms/form-elements/inputs",
						icon: <DotOutlined />,
						label: "Inputs",
					}
				]
			},
		],
	},
	{
		key: "Tables & Charts",
		type: "group",
		label: "Tables & Charts",
	},
	{
		key: "/charts",
		icon: <BarChartOutlined />,
		label: "Charts",
		children: [
			{
				key: "/charts/apex-charts",
				icon: <DotOutlined />,
				label: "Apex Charts",
				children: [
					{
						key: "/charts/apex-charts/line-charts",
						icon: <DotOutlined />,
						label: "Line Charts",
					}
				]
			},
			{
				key: "/charts/chartjs-charts",
				icon: <DotOutlined />,
				label: "Chartjs Charts",
			},
			{
				key: "/charts/echart-charts",
				icon: <DotOutlined />,
				label: "Echart Charts",
			},
		],
	},
	{
		key: "Map & Icons",
		type: "group",
		label: "Tables & Charts",
	},
	{
		key: "/maps",
		icon: <GlobalOutlined />,
		label: "Maps",
		children: [
			{
				key: "/maps/vector-maps",
				icon: <DotOutlined />,
				label: "Vector Maps",
			},
			{
				key: "/maps/leaflet-maps",
				icon: <DotOutlined />,
				label: "Leaflet Maps",
			},
			{
				key: "/maps/google-maps",
				icon: <DotOutlined />,
				label: "Google Maps",
			},
		],
	},
]
