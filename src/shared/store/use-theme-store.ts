import { create } from "zustand"
import { themeStorage } from "../utils"

interface ThemeStore {
	isDark: boolean
	toggleTheme: () => void
}

const useThemeStore = create<ThemeStore>()((set) => ({
	isDark: themeStorage.get() === "dark",
	toggleTheme: () => {
		set((prev) => {
			const newValue = !prev.isDark
			themeStorage.set(newValue ? "dark" : "light")
			return { isDark: newValue }
		})
	},
}))

export { useThemeStore }
