import Card from "@mui/material/Card";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import challenges from "@/challenges.json";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { css } from "@emotion/react";
import Carousel from "@itseasy21/react-elastic-carousel";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";

interface ChallengeCardSetProps {
	createSelectHandler: (challenge: (typeof challenges)[number]) => () => void;
	filterFn?: Parameters<typeof challenges.filter>[0];
	isUserViewable?: boolean;
	title: string;
}

const challengeCardSetCss = css`
	padding: 2em;
	margin-top: 1em;
`;

const challengeCardCss = css`
	background-color: black;
	color: white;
	padding: 1.5em;
	margin: 0 0.25em;
	width: 12em;
	height: 12em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const fabWrapperCss = css`
	display: flex;
	align-items: center;
`;

const wrapperCss = css`
	padding-top: 3em;
`;

const multilineTruncatedTypographyCss = css`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	text-align: center;
`;

function ChallengeCardSet({
	filterFn,
	createSelectHandler,
	isUserViewable = true,
	title,
}: ChallengeCardSetProps) {
	return (
		<>
			<Typography fontWeight="bold" variant="h5">
				{title} Challenges
			</Typography>
			<Card css={challengeCardSetCss}>
				{isUserViewable ? (
					<Carousel
						breakPoints={[
							{ width: 1, itemsToShow: 1 },
							{ width: 350, itemsToShow: 2, itemsToScroll: 2 },
						]}
						isRTL={false}
						pagination={false}
						renderArrow={({ onClick, isEdge, type }) => (
							<div css={fabWrapperCss}>
								<Fab
									color="info"
									disabled={isEdge}
									{...{ onClick }}>
									{type === "NEXT" ? (
										<MdArrowForward size="1.75em" />
									) : (
										<MdArrowBack size="1.75em" />
									)}
								</Fab>
							</div>
						)}>
						{(filterFn
							? challenges.filter(filterFn)
							: challenges
						).map((challenge) => {
							const {
								challengeId,
								challengeName,
								challengePoints,
							} = challenge;
							return (
								<Card
									key={challengeId}
									css={challengeCardCss}
									onClick={createSelectHandler(challenge)}>
									<Typography
										css={multilineTruncatedTypographyCss}
										variant="h5">
										{challengeName}
									</Typography>
									<Typography
										color="#D7D7D7"
										textAlign="center">
										+ {challengePoints}pts
									</Typography>
								</Card>
							);
						})}
					</Carousel>
				) : (
					<Grid container justifyContent="center">
						<Grid item>
							<Typography
								py={5}
								textAlign="center"
								variant="h6"
								width={200}>
								<strong>Oops!</strong> You have to be a higher
								level to view these challenges
							</Typography>
						</Grid>
					</Grid>
				)}
			</Card>
		</>
	);
}

export default function Challenges() {
	const [selected, setSelected] = useState<
		(typeof challenges)[number] | null
	>(null);

	const createSelectHandler =
		(challenge: (typeof challenges)[number]) => () =>
			setSelected(challenge);

	return (
		<>
			<div className="wrapper" css={wrapperCss}>
				<Grid container spacing={1}>
					<Grid
						container
						item
						flex={1}
						flexBasis="450px"
						flexDirection="column"
						spacing={6}>
						{["Gentle", "Easy", "Moderate", "Hard", "Nuclear"].map(
							(challengeDifficulty, index) => (
								<Grid item key={challengeDifficulty}>
									<ChallengeCardSet
										createSelectHandler={
											createSelectHandler
										}
										title={challengeDifficulty}
										// isUserViewable={index < 1}
										filterFn={({ difficulty }) =>
											difficulty === challengeDifficulty
										}
									/>
								</Grid>
							)
						)}
					</Grid>
					<Grid item>
						<Typography fontWeight="bold" variant="h5">
							Goal
						</Typography>
						<Card sx={{ p: 3, mt: 2 }}>
							<Typography
								fontWeight="bold"
								textAlign="center"
								variant="subtitle1">
								Reach to the next level
							</Typography>
							<LinearProgress
								sx={{ height: 12, borderRadius: 8 }}
								value={20}
								variant="determinate"
							/>
							<Typography textAlign="center" variant="caption">
								<strong>Reward:</strong> Unlock the easy
								challenges
							</Typography>
						</Card>
					</Grid>
				</Grid>
			</div>
			<Dialog
				open={!!selected}
				onClose={() => setSelected(null)}
				PaperProps={{ sx: { bgcolor: "white", px: 9, py: 5 } }}>
				<DialogContent>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							alt="Undraw Smiley Face"
							src="images/undraw/smiley-face.svg"
							width="100%"
						/>
						<Typography
							pt={3}
							fontWeight="bold"
							textAlign="center"
							variant="h4">
							{selected?.challengeName}
						</Typography>
						<Typography textAlign="center">
							{selected?.challengeDescription}
						</Typography>
						<Typography
							fontWeight="bold"
							pt={1}
							textAlign="center"
							variant="subtitle1">
							You will earn {selected?.challengePoints}pts after
							completion
						</Typography>
						<div style={{ marginTop: 40 }}>
							<Button color="info" variant="contained">
								Start Challenge
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
