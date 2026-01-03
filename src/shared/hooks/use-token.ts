import { theme as defaultTheme } from "antd"

export const useToken = () => {
	const { token, cssVar, hashId, theme } = defaultTheme.useToken()
	return {
		token,
		cssVar,
		hashId,
		theme,
	}
}
