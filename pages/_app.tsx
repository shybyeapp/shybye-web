import Head from "next/head";
import type { AppProps } from "next/app";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/App.css";
import "@/index.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      background: { default: "#FBF8EE" },
      primary: { main: "#77ACA2" },
      secondary: { main: "#F4E9CD" },
    },
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SHYBYE!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <section className="App">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </section>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
