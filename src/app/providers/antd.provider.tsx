import { App, ConfigProvider, theme } from "antd"
import { type FC, type ReactNode, useMemo } from "react"
import { THEME, THEME_DARK, THEME_LIGHT } from "src/shared/constants"
import { useToken } from "src/shared/hooks"
import { useThemeStore } from "src/shared/store"

interface AntdProviderProps {
	children?: ReactNode
}

const AntdProvider: FC<AntdProviderProps> = ({ children }) => {
	const { token } = useToken()
	const isDark = useThemeStore((state) => state.isDark)
	
	const themeToken = useMemo(() => (isDark ? THEME_DARK : THEME_LIGHT), [])
	
	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
					token: {
						...themeToken,
						fontFamily: `"${THEME.fontFamily}", ${token.fontFamily}`,
					},
					components: {
						Menu: {
							subMenuItemBg: "transparent",
						},
						Typography: {
							colorTextSecondary: "#5c708f",
						},
					},
					cssVar: {
						prefix: "zeno",
						key: "css-var-zeno",
					},
				}}
				prefixCls={"zeno"}
				form={{
					requiredMark: false,
				}}
				typography={{
					style: {
						marginBottom: 0,
					},
				}}
				menu={{
					style: {
						borderInlineEnd: 0,
					},
				}}
			>
				<App>{children}</App>
			</ConfigProvider>
		</>
	)
}

export { AntdProvider }
