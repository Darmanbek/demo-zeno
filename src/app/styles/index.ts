import { createGlobalStyle } from "antd-style"

export const GlobalStyles = createGlobalStyle`
	:root {
		--zeno-bg-color-container: ${({ theme }) => theme.colorBgContainer};
	}
	
	body {
		background-color: ${({ theme }) => theme.colorBgLayout};
	}
`
