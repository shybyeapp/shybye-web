import Button from "@mui/material/Button";

export default function RewardExtra() {
  return (
    <section id="rewards">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="images/badges/fist-bump.png"
        alt="Congratulations"
        className="congratsImg"
      />
      <h1>
        Congrats! You earned an extra 3pts for completing your first challenge!
      </h1>
      <Button variant="contained">Back to Dashboard</Button>
    </section>
  );
}
