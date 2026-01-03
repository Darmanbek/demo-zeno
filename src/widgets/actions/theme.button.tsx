import { MoonOutlined, SunOutlined } from "@ant-design/icons"
import { Button, type ButtonProps } from "antd"
import type { FC } from "react"
import { useThemeStore } from "src/shared/store"

const ThemeButton: FC<ButtonProps> = (props) => {
	const { isDark, toggleTheme } = useThemeStore()

	return (
		<Button
			type={"text"}
			shape={"circle"}
			icon={isDark ? <MoonOutlined /> : <SunOutlined />}
			onClick={() => toggleTheme()}
			{...props}
		/>
	)
}

export { ThemeButton }
