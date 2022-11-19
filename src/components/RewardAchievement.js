import { Button } from "@mui/material";

const RewardAchievement = () => {
  return (
    <section id="rewards">
      <div>
        <img
          src={require("../Images/Badges/balloon.png")}
          alt="Congratulatory image"
          class="congratsImg"
        ></img>
        <h1>Congrats! You earned your first achievement:</h1>
      </div>
      <div>
        <p>Completing your first challenge</p>
        <p class="medalText">Here's your badge:</p>
      </div>
      <div>
        <img
          src={require("../Images/Badges/in-love.png")}
          alt="Congratulatory image"
          class="badgeImg"
        ></img>
      </div>
      <div>
        <Button variant="contained">Back to Dashboard</Button>
      </div>
    </section>
  );
};

export default RewardAchievement;
