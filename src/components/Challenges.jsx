// import axios from "axios";

import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { useChallengeContext } from "../../ChallengeContext.js"


// const BACKENDURL = "https://shy-bye-app.fly.dev";

export default function Challenges(props) {
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

  const { title } = props;
  const { setData } = useChallengeContext()

  return (
    <Grid item>
      <Box sx={{ textAlign: 'left' }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      </ Box>
      <Grid xs={12}>
        <ImageList
          sx={{ maxHeight: 600 }} cols={3}
        >
          {itemData.map((item, index) => (
            <Link
              href={`/challengeDetail/${item.challengeId}`}
              style={{ textDecoration: "none" }}
              onClick={() => setData(item)}
            >
              <ImageListItem
                key={index}
                sx={{
                  borderRadius: 3,
                  boxShadow: 4,
                  margin: 1,
                  maxWidth: 300,
                }}
              >
                <Typography
                  sx={{
                    color: '#468189',
                    fontWeight: 600,
                    marginBottom: -3,
                    marginLeft: 2,
                    marginTop: 2,
                    textAlign: 'left',
                  }}
                >
                  {item.challengePoints > 1 ?
                    `${item.challengePoints} pts` :
                    `${item.challengePoints} pt`}
                </Typography>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.challengeId}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    alignItems: 'center',
                    backgroundColor: '#DFE1B2',
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    color: '#000',
                    display: 'flex',
                    height: 90,
                    justifyContent: 'center',
                    padding: 2
                  }}
                  title={<div>{item.challengeName}</div>}
                  position="below"
                />
              </ImageListItem>
            </Link>
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
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 2,
    challengeName: "Say hello to a friend",
    challengeDescription:
      "Find someone with a friendly face and say hello to them!",
    challengePoints: 5,
    difficulty: "Gentle",
    rewardId: 2,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 3,
    challengeName: "Look someone in the eye",
    challengeDescription:
      "The next time someone talks to you, look them in the eye. Even if only for a moment!",
    challengePoints: 5,
    difficulty: "Gentle",
    rewardId: 3,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 4,
    challengeName: "Ask someone how they are doing",
    challengeDescription:
      "Whether you are in line at the grocery store or ordering food or passing someone on the street take a moment to ask how another person is doing.",
    challengePoints: 10,
    difficulty: "Easy",
    rewardId: 4,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 5,
    challengeName: "Give someone a sincere compliment",
    challengeDescription:
      "Give someone a compliment! You could make their day and make a friend in the process.",
    challengePoints: 10,
    difficulty: "Easy",
    rewardId: 5,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 6,
    challengeName: "Ask someone for directions",
    challengeDescription:
      "Even if you already know the way, try this experiment and make a connection!",
    challengePoints: 10,
    difficulty: "Easy",
    rewardId: 6,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 7,
    challengeName: "Have a five minute conversation with someone new",
    challengeDescription:
      "Get to know that friendly aquaintance better by striking up a conversation. Dont know what to talk about? Ask them what they like!",
    challengePoints: 20,
    difficulty: "Moderate",
    rewardId: 7,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 8,
    challengeName: "Invite a friend to eat out",
    challengeDescription:
      "Invite someone you want to get to know better to eat out with you.",
    challengePoints: 20,
    difficulty: "Moderate",
    rewardId: 8,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 9,
    challengeName: "Interview an elderly friend about their life",
    challengeDescription:
      "If you have an elderly friend get to know them better. If you do not know anyone who is elderly visit a nursing home and make a new friend.",
    challengePoints: 20,
    difficulty: "Moderate",
    rewardId: 9,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 10,
    challengeName: "Host a dinner party for two to five",
    challengeDescription: "Make dinner. Invite friends. Have fun!",
    challengePoints: 50,
    difficulty: "Hard",
    rewardId: 10,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 11,
    challengeName: "Ask someone on a date",
    challengeDescription: "Work up the courage and ask someone out!",
    challengePoints: 50,
    difficulty: "Hard",
    rewardId: 11,
    img: 'images/challenges/direction.png',
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
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 13,
    challengeName: "Purposely get rejected",
    challengeDescription:
      "Face your fear of rejection by doing something to purposely experience rejection. Ask for an item you know is not on the menu, ask a stranger for cash, ask the Uber driver if you can drive etc. Be creative!",
    challengePoints: 100,
    difficulty: "Nuclear",
    rewardId: 13,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 14,
    challengeName: "Give a speech in front of an audience",
    challengeDescription:
      "Face your fear of public speaking. Join a toastmasters group or other public venue and speak in front of a group of people",
    challengePoints: 100,
    difficulty: "Nuclear",
    rewardId: 14,
    img: 'images/challenges/direction.png',
  },
  {
    challengeId: 15,
    challengeName: "Tell your crush you like them, face-to-face",
    challengeDescription:
      "Have a crush but have not worked up the courage? Now is the time!",
    challengePoints: 100,
    difficulty: "Nuclear",
    rewardId: 15,
    img: 'images/challenges/direction.png',
  },
];
