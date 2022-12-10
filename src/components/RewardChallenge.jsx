import Button from "@mui/material/Button";

export default function RewardChallenge() {
  return (
    <section id="rewards">
      <img
        src="images/badges/fist-bump.png"
        alt="Congratulations"
        class="congratsImg"
      />
      <h1>Congrats! You completed your first challenge.</h1>
      <h2>You earn +5pts</h2>
      <Button variant="contained">Next</Button>
    </section>
  );
};