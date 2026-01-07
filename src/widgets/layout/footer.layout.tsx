import { Layout, Typography } from "antd"
import { css, cx } from "antd-style"
import type { FC } from "react"

const { Footer } = Layout

const FooterLayout: FC = () => {
	return (
		<>
			<Footer
				className={cx(css`
					padding: var(--ant-padding) 0;
					background-color: var(--ant-color-bg-container);
					box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
				`)}
			>
				<Typography.Paragraph
					style={{ textAlign: "center", fontSize: 13 }}
					type={"secondary"}
				>
					Copyright © {new Date().getFullYear()}{" "}
					<span
						className={cx(css`
							color: var(--ant-color-text);
						`)}
					>
						Zeno
					</span>
				</Typography.Paragraph>
			</Footer>
		</>
	)
}

export { FooterLayout }
