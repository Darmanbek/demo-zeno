import { Link } from "@tanstack/react-router"
import { Button, Form, Input, Typography } from "antd"
import type { FC } from "react"
import { useToken } from "src/shared/hooks"

const RegisterPage: FC = () => {
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
				Sign Up
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
					name={"fullname"}
					label={"Full Name"}
					rules={[{ required: true }]}
				>
					<Input
						placeholder={"full name"}
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
				<Form.Item
					name={"confirm_password"}
					label={"Confirm Password"}
					rules={[{ required: true }]}
					dependencies={["password"]}
				>
					<Input.Password
						placeholder={"confirm password"}
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
					Sign Up
				</Button>
			</Form>
			<Typography.Paragraph
				style={{ textAlign: "center", marginTop: token.margin, marginBottom: 0 }}
			>
				Already have an account? <Link to={"/auth/login"}>Sign In</Link>
			</Typography.Paragraph>
		</>
	)
}

export { RegisterPage }
