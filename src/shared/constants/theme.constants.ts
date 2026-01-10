import type { AliasToken } from "antd/es/theme/internal"

export const THEME: Partial<AliasToken> = {
	fontFamily: "Poppins",
}

export const THEME_LIGHT: Partial<AliasToken> = {
	colorBgLayout: "rgb(246, 246, 251)",
	colorPrimary: "rgb(121, 97, 245)",
	boxShadowTertiary: "0px 0px 8px rgba(0, 0, 0, 0.025)",
	colorBorder: "rgb(230, 235, 241)",
	colorText: "#191919",
	colorTextDescription: "#5c708f"
}

export const THEME_DARK: Partial<AliasToken> = {
	colorBgLayout: "rgb(20, 20, 50)",
	colorPrimary: "rgb(121, 97, 245)",
	colorBgContainer: "rgb(29, 29, 66)",
	colorBgElevated: "rgb(29, 29, 66)",
	boxShadowTertiary: "0px 2px 1px -1px rgba(255, 255, 255, 0.05);",
	colorBorder: "rgba(255, 255, 255, 0.1)",
	colorText: "rgba(255, 255, 255, 0.8)",
	colorTextDescription: "rgba(255, 255, 255, 0.5)"
}
