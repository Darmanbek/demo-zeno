import { ArrowLeftOutlined } from "@ant-design/icons"
import { type NotFoundRouteProps, useRouter } from "@tanstack/react-router"
import { Button, Flex, Typography } from "antd"
import { useResponsive } from "antd-style"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"

const NotFoundBoundary: FC<NotFoundRouteProps> = () => {
	const { xs } = useResponsive()
	const { token } = useToken()
	const { history } = useRouter()

	return (
		<>
			<Flex
				justify={"center"}
				align={"center"}
				flex={1}
				style={{
					position: "relative",
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.85)",
				}}
			>
				<img
					height={"100%"}
					src={"/assets/404.jpg"}
					alt={"404"}
					style={{
						objectFit: "cover",
						objectPosition: "center",
						position: "absolute",
						width: "100%",
						height: "100%",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						inset: 0,
						opacity: 1,
						zIndex: -1,
					}}
				/>
				<Flex
					vertical={true}
					align={"center"}
					style={{
						paddingInline: token.padding,
					}}
				>
					<Typography.Title
						style={{
							fontSize: 16 * (xs ? 3 : 11),
							fontWeight: 500,
							color: "#fff",
							textAlign: "center",
						}}
					>
						404
					</Typography.Title>
					<Typography.Title
						level={4}
						style={{
							fontSize: xs ? 20 : 24,
							fontWeight: 500,
							color: "#fff",
							marginBottom: token.marginSM,
							textAlign: "center",
						}}
					>
						Page Not Found
					</Typography.Title>
					<Typography.Paragraph
						style={{ color: "#fff", marginBottom: token.margin * 3, textAlign: "center" }}
					>
						The page you're looking for doesn't exist. Check the URL or return to the homepage.
					</Typography.Paragraph>
					<Button
						type={"primary"}
						icon={<ArrowLeftOutlined />}
						iconPlacement={"start"}
						size={xs ? "middle" : "large"}
						style={{
							textTransform: "uppercase",
						}}
						onClick={() => history.back()}
					>
						Back to home page
					</Button>
				</Flex>
			</Flex>
		</>
	)
}

export { NotFoundBoundary }
