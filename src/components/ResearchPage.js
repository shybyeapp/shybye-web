const ResearchPage = () => {
  return (
    <section>
      <body>
        {" "}
        <div class = "research">
        <h2>Why ShyBye?</h2>
        <p>Millions of Americans are affected by Social Anxiety disorder and millions more suffer from an epidemic of loneliness.
          The CDC considers loneliness and isolation a serious public health risk. According to nih.gov, loneliness
          is linked to high blood pressure, heart disease, obesity, a weakened immune system, anxiety, depression,
          and cognitive delcine. 

          
        </p>
        <img
            src={require("../Images/Research/friends.jpg")}
            alt="Friends"
            class="friends"
          ></img>
        <p>But never fear! ShyBye has your back! With ShyBye you will exercise your social muscles
           and have an epic time while making friends and improving your overall well-being! Who knows? you may even
           make some lasting, lifelong, friendships!</p>
        </div>
      </body>
    </section>
  );
};

export default ResearchPage;
