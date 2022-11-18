const Rewards = () => {
  return (
    <section class="rewardsContainer">
      <img
        src={require("../Images/Badges/balloon.png")}
        alt="Congratulatory image"
        class="congratsImg"
      ></img>
      <h1>Congrats! You earned your first achievement:</h1>
      <p>Completing your first challenge</p>
      <p>Here's your medal:</p>
      <img
        src="../Images/Badges/smiley1.jpg"
        alt="Badge image"
      ></img>
    </section>
  );
};

export default Rewards;
