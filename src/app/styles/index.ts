import { createGlobalStyle } from "antd-style"

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.colorBgLayout};
	}
`
