import { Button } from "@mui/material";

const RewardChallenge = () => {
  return (
    <section id="rewards">
      <img
        src={require("../Images/Badges/fist-bump.png")}
        alt="Congratulations"
        class="congratsImg"
      ></img>
      <h1>Congrats! You completed your first challenge.</h1>
      <h2>You earn +5pts</h2>
      <Button variant="contained">Next</Button>
    </section>
  );
};

export default RewardChallenge;
