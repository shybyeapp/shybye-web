import { useRouter } from "next/router";

import Button from "@mui/material/Button";

export default function RewardAchievement() {
  const router = useRouter();
  const toDashboard = () => router.push("/dashboard");

  return (
    <section id="rewards">
      <div>
        <img
          src="images/badges/balloon.png"
          alt="Congratulations"
          class="congratsImg"
        />
        <h1>Congrats! You earned your first achievement:</h1>
      </div>
      <div>
        <p>Completing your first challenge</p>
        <p class="medalText">Here's your badge:</p>
      </div>
      <div>
        <img
          src="images/badges/in-love.png"
          alt="Congratulations"
          class="badgeImg"
        />
      </div>
      <div>
        <Button variant="contained" onClick={toDashboard}>
          Back to Dashboard
        </Button>
      </div>
    </section>
  );
};
