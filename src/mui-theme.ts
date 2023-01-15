import { createTheme } from "@mui/material";

export default createTheme({
	palette: {
		primary: {
			main: "#9DBEBB",
			contrastText: "#161C1F",
		},
		secondary: {
			main: "#468189",
			contrastText: "#FFFFFF",
		},
		background: {
			default: "#FFFFFF",
			paper: "#F4E9CD",
		},
		info: {
			main: "#000000",
			contrastText: "#FFFFFF",
		},
	},
	typography: {
		allVariants: {
			fontFamily: "'Josefin Sans', sans-serif",
			textTransform: "none",
		},
		body1: {
			fontFamily: "'Inter', sans-serif",
		},
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					backgroundColor: "#FFFFFF",
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: "#FFFFFF",
				},
				barColorPrimary: {
					backgroundColor: "#468189",
				},
			},
		},
	},
});
