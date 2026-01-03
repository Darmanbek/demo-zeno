import { Link } from "@tanstack/react-router"
import { Button, Form, Input, Typography } from "antd"
import type { FC } from "react"
import { useToken } from "src/shared/hooks"

const LoginPage: FC = () => {
	const { token } = useToken()

	return (
		<>
			<Typography.Title
				style={{
					textAlign: "center",
					fontWeight: 500,
				}}
				level={3}
			>
				Sign In
			</Typography.Title>
			<Typography.Paragraph
				style={{ textAlign: "center" }}
				type={"secondary"}
			>
				Let's get started
			</Typography.Paragraph>
			<Form
				name={"login-form"}
				layout={"vertical"}
			>
				<Form.Item
					name={"username"}
					label={"User Name"}
					rules={[{ required: true }]}
				>
					<Input
						placeholder={"user name"}
						style={{ height: 36 }}
					/>
				</Form.Item>
				<Form.Item
					name={"password"}
					label={"Password"}
					rules={[{ required: true }]}
				>
					<Input.Password
						placeholder={"password"}
						style={{ height: 36 }}
					/>
				</Form.Item>
				<Button
					block={true}
					type={"primary"}
					htmlType={"submit"}
					style={{
						marginTop: token.margin,
						height: 35,
					}}
				>
					Sign In
				</Button>
			</Form>
			<Typography.Paragraph
				style={{ textAlign: "center", marginTop: token.margin, marginBottom: 0 }}
			>
				Dont have an account? <Link to={"/auth/register"}>Sign Up</Link>
			</Typography.Paragraph>
		</>
	)
}

export { LoginPage }
