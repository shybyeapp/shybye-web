import Head from "next/head";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import theme from "@/mui-theme";
import "@/index.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>ShyBye</title>
			</Head>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<div className="wrapper-separator">
						<NavigationBar />
						<Container>
              <Component {...pageProps} />
            </Container>
					</div>
					<Footer />
				</AuthProvider>
			</ThemeProvider>
		</>
	);
}
