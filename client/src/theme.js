import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	shadows: Array(25).fill("none"),
	palette: {
		primary: {
			light: "#484fab",
			main: "#3494BA",
			dark: "#286F8B",
			contrastText: "#fff",
		},
		background: {
			light: "#fff",
			dark: "#3494BA",
		},
		fontColor: {
			dark: "#000",
			light: "#fff",
			accent: "#3494BA",
			grey: "#9E9B9B",
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: "'Nunito', 'Helvetica', 'Arial', sans-serif",
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 300,
			fontSize: "6rem",
			lineHeight: 1.167,
			letterSpacing: "-0.01562em",
		},
		h2: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 300,
			fontSize: "3.75rem",
			lineHeight: 1.2,
			letterSpacing: "-0.00833em",
		},
		h3: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 600,
			fontSize: "3rem",
			lineHeight: 1.167,
			letterSpacing: "0em",
		},
		h4: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: "2.125rem",
			lineHeight: 1.235,
			letterSpacing: "0.00735em",
		},
		h5: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: "1.5rem",
			lineHeight: 1.334,
			letterSpacing: "0em",
		},
		h6: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 500,
			fontSize: "1.2rem",
			lineHeight: 1.6,
			letterSpacing: "0.0075em",
		},
	},
});

export default theme;
