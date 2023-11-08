import Head from "next/head";
// import axios from "axios";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/App.css";
import "@/index.css";

import { ChallengeProvider } from '../ChallengeContext.js';

/** @type {(AppProps: import("next/app").AppProps) => JSX.Element} */
export default function App({ Component, pageProps }) {
  // const BACKENDURL = "https://shy-bye-app.fly.dev";

  // current user state keeps track of the user that is currently logged in
  // const [currentUser, setCurrentUser] = useState([]);

  // async call to db: GET user
  // const getReturningUser = (userInfo) => {
  //   console.log("getting user");
  //   axios
  //     .get(`${BACKENDURL}/users`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const theme = createTheme({
    typography: {
      fontFamily: "Josefin Sans",
    },
    palette: {
      background: { default: "#FBF8EE" },
      primary: { main: "#77ACA2" },
      secondary: { main: "#F4E9CD" },
    },
    components: {
      MuiImageListItemBar: {
        styleOverrides: {
          title: {
            whiteSpace: 'inherit'
          }
        }
      }
    }
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SHYBYE!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <section className="App">
          <Header />
          <ChallengeProvider>
            <Component {...pageProps} />
          </ChallengeProvider>
          <Footer />
        </section>
      </ThemeProvider>
    </>
  );
}
