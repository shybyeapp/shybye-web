import { Button } from "@mui/material";

const Rewards = () => {
  return (
    <section>
      <img
        src={require("../Images/Badges/balloon.png")}
        alt="Congratulatory image"
        class="congratsImg"
      ></img>
      <h1>Congrats! You earned your first achievement:</h1>
      <p>Completing your first challenge</p>
      <p>Here's your medal:</p>
      <img
        src={require("../Images/Badges/in-love.png")}
        alt="Congratulatory image"
        class="badgeImg"
      ></img>
      <Button variant="contained">Back to Dashboard</Button>
    </section>
  );
};

export default Rewards;
