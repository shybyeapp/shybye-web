import Typography from "@mui/material/Typography";
import SignIn from "./SignIn";
const Home = () => {
  return (
    <section>
      <header></header>
      <body>
        <Typography>
          Complete challenges, reduce anxiety, and have fun
        </Typography>
        <Typography>Here's how it works:</Typography>
        <SignIn></SignIn>
      </body>
    </section>
  );
};

export default Home;
