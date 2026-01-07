import { Flex, Layout } from "antd"
import { useMemo, type FC, type ReactNode } from "react"
import { useToken } from "src/shared/hooks"

const { Content } = Layout

interface ContentLayoutProps {
	children?: ReactNode
}

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
	const { token } = useToken()

	const padding = useMemo(() => {
		return token.paddingLG
	}, [])
	return (
		<>
			<Content
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Flex
					vertical={true}
					gap={padding}
					flex={1}
					style={{
						padding,
					}}
				>
					{children}
				</Flex>
			</Content>
		</>
	)
}

export { ContentLayout }
