import { Button } from "@mui/material";

const RewardExtra = () => {
  return (
    <section id="rewards">
        <img
          src={require("../Images/Badges/fist-bump.png")}
          alt="Congratulatory image"
          class="congratsImg"
        ></img>
        <h1>Congrats! You earned an extra 3pts for completing your first challenge!</h1> 
        <Button variant="contained">Back to Dashboard</Button>
    </section>
  );
};

export default RewardExtra;
