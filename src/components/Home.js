import Typography from "@mui/material/Typography";
import Rewards from "./Rewards";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";

const Home = () => {
  return (
    <section>
      <header></header>
      <body>
        <img src="Assets/Images/Logos/ShyBye.png"></img>
        <Typography>
          Complete challenges, collect rewards, reduce social anxiety!"
        </Typography>
        <Typography>Here's how it works:</Typography>
        {/* <SignIn></SignIn>
        <SignUp></SignUp> */}
      </body>
    </section>
  );
};

export default Home;