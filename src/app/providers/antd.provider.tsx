import { App, ConfigProvider, theme } from "antd"
import { css, cx } from "antd-style"
import { useMemo, type FC, type ReactNode } from "react"
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
				}}
				form={{
					requiredMark: false,
				}}
				typography={{
					style: {
						marginBottom: 0,
					},
				}}
			>
				<App>{children}</App>
			</ConfigProvider>
		</>
	)
}

export { AntdProvider }
