import type { FC, PropsWithChildren } from "react"
import { AntdProvider } from "./antd.provider"

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<AntdProvider>{children}</AntdProvider>
		</>
	)
}

export { Providers }
