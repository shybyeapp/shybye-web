import Challenges from "./Challenges";
import Badges from "./Badges";
import Grid from "@mui/material/Grid";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const { googleSignOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await googleSignOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Welcome {user?.displayName}!
        </Grid>
        <Grid item xs={12}>
          Recommended Challenges
        </Grid>
        <Grid item xs={12}>
          <Challenges></Challenges>
        </Grid>
      </Grid>
      <Badges></Badges>
      <br></br>
      <button onClick={handleSignOut}>Sign Out</button>
    </section>
  );
};

export default UserPage;
