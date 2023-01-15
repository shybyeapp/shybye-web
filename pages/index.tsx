import { css } from "@emotion/react";
import { useState } from "react";
import Link from "next/link";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useAuthContext } from "@/components/AuthProvider";
import PolymorphicAuthForm from "@/components/PolymorphicAuthForm";

const linkCss = css`
	text-decoration: none;
	color: inherit;
`;

const buttonCss = css`
	font-size: 1.33em;
	font-weight: bold;
	margin-top: 2em;
`;

export default function Home() {
	const { user } = useAuthContext();
	const [open, setOpen] = useState(false);

	return (
		<>
			<Grid
				alignItems="center"
				container
				justifyContent="center"
				marginTop="5em"
				gridArea="App">
				<Grid item md={5} xs={10}>
					<Typography fontWeight="bold" textAlign="left" variant="h3">
						The Social Anxiety Gamification App
					</Typography>
					<Typography textAlign="left">
						Take tiny steps to improve your social anxiety
					</Typography>
					{user ? (
						<Link css={linkCss} href="/dashboard">
							<Button
								color="secondary"
								css={buttonCss}
								variant="contained">
								Dashboard
							</Button>
						</Link>
					) : (
						<Button
							color="secondary"
							css={buttonCss}
							variant="contained"
							onClick={() => setOpen(true)}>
							Get started
						</Button>
					)}
				</Grid>
				<Grid item md={6} xs={10}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						alt="Undraw Positive Attitude"
						src="images/undraw/positive-attitude.svg"
						width="100%"
					/>
				</Grid>
			</Grid>
			<Dialog open={open} onClose={() => setOpen(false)}>
				<DialogContent>
					<PolymorphicAuthForm />
				</DialogContent>
			</Dialog>
		</>
	);
}
