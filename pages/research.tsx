import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Research() {
	return (
		<>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				paddingY={8}>
				<Grid item md={5} xs={10}>
					<Typography fontWeight="bold" variant="h4">
						According to NIMH, it is estimated 7.1% of U.S. adults
						have social anxiety disorder in the past year
					</Typography>
					<Typography>
						An estimated 12.1% of U.S. adults experience social
						anxiety disorder at some time in their lives
					</Typography>
				</Grid>
				<Grid item md={5} xs={10}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						alt="Undraw Starry Window"
						src="images/undraw/starry-window.svg"
						width="100%"
					/>
				</Grid>
			</Grid>
			<Grid
				container
				sx={{ bgcolor: "#FBF8EE" }}
				alignItems="center"
				justifyContent="center"
				paddingY={8}>
				<Grid item md={5} xs={10} pr={10}>
					<Typography fontWeight="bold" variant="h4">
						Social Anxiety is
					</Typography>
					<Typography>
						the fear and avoiding communication with others due to
						self-consioucness and embarrassment of being scrutinized
						or judged negatively by others.
					</Typography>
					<Typography pt={5} fontWeight="bold" variant="h4">
						Common social situations that people with social anxiety
						avoid
					</Typography>
					<Typography>
						<ul>
							<li>
								Interacting with unfamiliar people or strangers
							</li>
							<li>Attending parties or social gatherings</li>
							<li>Starting conversations</li>
							<li>Dating</li>
						</ul>
					</Typography>
				</Grid>
				<Grid item md={5} xs={10}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						alt="Undraw Both Sides"
						src="images/undraw/both-sides.svg"
						width="100%"
					/>
				</Grid>
			</Grid>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				paddingY={8}>
				<Grid item md={5} xs={10} pr={10}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						alt="Undraw Diary"
						src="images/undraw/diary.svg"
						width="100%"
					/>
				</Grid>
				<Grid item md={5} xs={10}>
					<Typography fontWeight="bold" variant="h4">
						Social Anxiety can occur in early childhood and last for
						a lifetime if not treated
					</Typography>
					<Typography>
						People with social anxiety are rarely diagnosed by
						professional
					</Typography>
					<Typography fontWeight="bold" variant="h4" pt={5}>
						Ways that people with social anxiety cope with it
					</Typography>
					<ul>
						<li>Therapy</li>
						<li>Medications</li>
						<li>Group Support</li>
						<li>Keeping a journal</li>
					</ul>
				</Grid>
			</Grid>
		</>
	);
}
