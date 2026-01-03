import { Card, Flex, Image, Layout } from "antd"
import { css, cx, useResponsive } from "antd-style"
import type { FC, ReactNode } from "react"
import { useToken } from "src/shared/hooks"
import { useThemeStore } from "src/shared/store"
import { ThemeButton } from "src/widgets/actions"

interface AuthLayoutProps {
	children?: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	const { token } = useToken()
	const { mobile } = useResponsive()
	const isDark = useThemeStore((state) => state.isDark)

	return (
		<>
			<Layout
				style={{
					minHeight: "100vh",
					position: "relative",
				}}
				className={cx(css`
					&::before {
						position: absolute;
						content: "";
						width: 100%;
						height: 100%;
						background-image: url(/assets/auth.svg);
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;

						opacity: 0.5;
						inset: 0;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
					}
				`)}
			>
				<ThemeButton
					size={"large"}
					style={{
						position: "absolute",
						right: token.padding,
						top: token.padding,
						zIndex: 1,
					}}
				/>
				<Flex
					justify={"center"}
					align={"center"}
					style={{
						padding: token.padding,
						paddingTop: token.paddingLG * 3,
						minHeight: "100vh",
					}}
				>
					<Card
						style={{
							width: "100%",
							maxWidth: 360,
						}}
						variant={"borderless"}
						styles={{
							body: {
								padding: (mobile ? token.padding : token.paddingLG) * 2,
							},
						}}
					>
						<Flex
							justify={"center"}
							style={{
								marginBottom: token.paddingLG,
							}}
						>
							<Image
								src={"/logo-light.png"}
								fallback={"/public/logo-light.png"}
								alt={"Logo Zeno"}
								preview={false}
								height={28}
								hidden={isDark}
							/>
							<Image
								src={"/logo-white.png"}
								fallback={"/public/logo-white.png"}
								alt={"Logo Zeno"}
								preview={false}
								height={28}
								hidden={!isDark}
							/>
						</Flex>
						{children}
					</Card>
				</Flex>
			</Layout>
		</>
	)
}

export { AuthLayout }
