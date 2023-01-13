import Grid from "@mui/material/Grid";

import { useAuthContext } from "@/components/AuthProvider";
import Badges from "@/components/Badges";
import Challenges from "@/components/Challenges";
import Protected from "@/components/Protected";

export default function Dashboard() {
  const { user } = useAuthContext();

  return (
    <Protected>
      <section>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            Welcome {user?.displayName}!
          </Grid>
          <Grid item xs={12}>
            Recommended Challenges
          </Grid>
          <Grid item xs={12}>
            <Challenges />
          </Grid>
        </Grid>
        <Badges />
      </section>
    </Protected>
  );
}
