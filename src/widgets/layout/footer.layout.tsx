import { Layout, Typography } from "antd"
import type { FC } from "react"
import { useToken } from "src/shared/hooks"

const { Footer } = Layout

const FooterLayout: FC = () => {
	const { token } = useToken()
	
	return (
		<>
			<Footer
				style={{
					padding: `${token.padding}px 0`,
					backgroundColor: token.colorBgContainer,
					boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
				}}
			>
				<Typography.Paragraph
					style={{ textAlign: "center", fontSize: 13 }}
					type={"secondary"}
				>
					Copyright © {new Date().getFullYear()}{" "}
					<span
						style={{ color: token.colorText }}
					>
						Zeno
					</span>
				</Typography.Paragraph>
			</Footer>
		</>
	)
}

export { FooterLayout }
