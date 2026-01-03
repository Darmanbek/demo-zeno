import Cookies from "js-cookie"

export const themeStorage = {
	get: () => Cookies.get("theme") || null,
	set: (value: string) => {
		Cookies.set("theme", value, {
			expires: 30,
		})
	},
	clear: () => Cookies.remove("theme"),
}
