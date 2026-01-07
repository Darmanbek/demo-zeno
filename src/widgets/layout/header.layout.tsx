import { Layout } from "antd"
import { css, cx } from "antd-style"
import type { FC } from "react"

const { Header } = Layout

const HeaderLayout: FC = () => {
	return (
		<>
			<Header
				className={cx(css`
					background-color: var(--ant-color-bg-container);
					height: 68px;
					line-height: 68px;
					border-block-end: 1px solid var(--ant-color-border);
					padding-inline: var(--ant-padding);
				`)}
			>
				<h1>Header</h1>
			</Header>
		</>
	)
}

export { HeaderLayout }
