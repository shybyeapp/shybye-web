import Badges from "@/components/Badges";
import Challenges from "@/components/Challenges";
import Grid from "@mui/material/Grid";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Protected from "@/components/Protected";

const UserPage = () => {
	const navigate = useNavigate();
	const { googleSignOut, user } = UserAuth();

	const handleSignOut = async () => {
		try {
			await googleSignOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

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
				<button onClick={handleSignOut}>Sign Out</button>
			</section>
		</Protected>
	);
};
