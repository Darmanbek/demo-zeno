import { MenuOutlined } from "@ant-design/icons"
import { Button, type ButtonProps } from "antd"
import { forwardRef } from "react"
import { useMenuStore } from "src/shared/store"

export interface MenuButtonProps extends ButtonProps {
	className?: string
}

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
	({ className, ...props }, ref) => {
		const toggleCollapsed = useMenuStore(state => state.toggleCollapsed)
		
		return (
			<Button
				ref={ref}
				className={className}
				type={"text"}
				size={"large"}
				shape={"circle"}
				icon={<MenuOutlined />}
				onClick={toggleCollapsed}
				{...props}
			/>
		)
	},
)
MenuButton.displayName = "MenuButton"

export { MenuButton }