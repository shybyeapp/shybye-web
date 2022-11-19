import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RewardAchievement = () => {
  let navigate = useNavigate();
  const toDashboard = () => {
    let path = "/dashboard";
    navigate(path);
  };
  return (
    <section id="rewards">
      <div>
        <img
          src={require("../Images/Badges/balloon.png")}
          alt="Congratulations"
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
          alt="Congratulations"
          class="badgeImg"
        ></img>
      </div>
      <div>
        <Button variant="contained" onClick={toDashboard}>
          Back to Dashboard
        </Button>
      </div>
    </section>
  );
};

export default RewardAchievement;
