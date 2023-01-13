// import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";

// const BACKENDURL = "https://shy-bye-app.fly.dev";

export default function Challenges() {
  // const [allChallenges, setAllChallenges] = React.useState([]);
  // const getAllChallenges = async () => {
  //   await axios
  //     .get(`${BACKENDURL}/challenges`)
  //     .then((res) => {
  //       console.log(res);
  //       console.log("getting challenges");
  //       const challengeArray = res.data.map((challenge) => {
  //         return { challenge };
  //       });
  //       setAllChallenges(challengeArray);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // React.useEffect(() => {
  //   getAllChallenges();
  // }, []);

  return (
    // <ImageList sx={{ width: 500, height: 450 }}>
    <Grid container spacing={2}>
      <Grid xs={12}>
        <ImageList
          sx={{
            p: 3,
            height: 400,
            gridAutoFlow: "column",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(200px,1fr)) !important",
            gridAutoColumns: "minmax(200px, 1fr)",
          }}
        >
          {itemData.map((item, index) => (
            <Card key={index} sx={{ ml: 1, mr: 1, p: 1 }}>
              <CardContent /> <b>{item.difficulty}</b>
              <CardContent />
              {item.challengeName}
              <CardContent />
              {item.challengeDescription}
            </Card>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}

const itemData = [
  {
    challengeId: 1,
    challengeName: "Smile at someone today.",
    challengeDescription:
      "When you pass by an aquaintance give them a smile. It will brighten their day and yours as well!",
    challengePoints: 5,
    difficulty: "Gentle",
    rewardId: 1,
  },
  {
    challengeId: 2,
    challengeName: "Say hello to a friend",
    challengeDescription:
      "Find someone with a friendly face and say hello to them!",
    challengePoints: 5,
    difficulty: "Gentle",
    rewardId: 2,
  },
  {
    challengeId: 3,
    challengeName: "Look someone in the eye",
    challengeDescription:
      "The next time someone talks to you, look them in the eye. Even if only for a moment!",
    challengePoints: 5,
    difficulty: "Gentle",
    rewardId: 3,
  },
  {
    challengeId: 4,
    challengeName: "Ask someone how they are doing",
    challengeDescription:
      "Whether you are in line at the grocery store or ordering food or passing someone on the street take a moment to ask how another person is doing.",
    challengePoints: 10,
    difficulty: "Easy",
    rewardId: 4,
  },
  {
    challengeId: 5,
    challengeName: "Give someone a sincere compliment",
    challengeDescription:
      "Give someone a compliment! You could make their day and make a friend in the process.",
    challengePoints: 10,
    difficulty: "Easy",
    rewardId: 5,
  },
  {
    challengeId: 6,
    challengeName: "Ask someone for directions",
    challengeDescription:
      "Even if you already know the way, try this experiment and make a connection!",
    challengePoints: 10,
    difficulty: "Easy",
    rewardId: 6,
  },
  {
    challengeId: 7,
    challengeName: "Have a five minute conversation with someone new",
    challengeDescription:
      "Get to know that friendly aquaintance better by striking up a conversation. Dont know what to talk about? Ask them what they like!",
    challengePoints: 20,
    difficulty: "Moderate",
    rewardId: 7,
  },
  {
    challengeId: 8,
    challengeName: "Invite a friend to eat out",
    challengeDescription:
      "Invite someone you want to get to know better to eat out with you.",
    challengePoints: 20,
    difficulty: "Moderate",
    rewardId: 8,
  },
  {
    challengeId: 9,
    challengeName: "Interview an elderly friend about their life",
    challengeDescription:
      "If you have an elderly friend get to know them better. If you do not know anyone who is elderly visit a nursing home and make a new friend.",
    challengePoints: 20,
    difficulty: "Moderate",
    rewardId: 9,
  },
  {
    challengeId: 10,
    challengeName: "Host a dinner party for two to five",
    challengeDescription: "Make dinner. Invite friends. Have fun!",
    challengePoints: 50,
    difficulty: "Hard",
    rewardId: 10,
  },
  {
    challengeId: 11,
    challengeName: "Ask someone on a date",
    challengeDescription: "Work up the courage and ask someone out!",
    challengePoints: 50,
    difficulty: "Hard",
    rewardId: 11,
  },
  {
    challengeId: 12,
    challengeName:
      "Ask a friend for a favor and then return the favor at a later time",
    challengeDescription:
      "Sometimes we struggle asking for help. But helping and being helped can bring a friendship to the next level.",
    challengePoints: 50,
    difficulty: "Hard",
    rewardId: 12,
  },
  {
    challengeId: 13,
    challengeName: "Purposely get rejected",
    challengeDescription:
      "Face your fear of rejection by doing something to purposely experience rejection. Ask for an item you know is not on the menu, ask a stranger for cash, ask the Uber driver if you can drive etc. Be creative!",
    challengePoints: 100,
    difficulty: "Nuclear",
    rewardId: 13,
  },
  {
    challengeId: 14,
    challengeName: "Give a speech in front of an audience",
    challengeDescription:
      "Face your fear of public speaking. Join a toastmasters group or other public venue and speak in front of a group of people",
    challengePoints: 100,
    difficulty: "Nuclear",
    rewardId: 14,
  },
  {
    challengeId: 15,
    challengeName: "Tell your crush you like them, face-to-face",
    challengeDescription:
      "Have a crush but have not worked up the courage? Now is the time!",
    challengePoints: 100,
    difficulty: "Nuclear",
    rewardId: 15,
  },
];
