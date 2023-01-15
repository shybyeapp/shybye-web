import { css } from "@emotion/react";
import { useState } from "react";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

import { useAuthContext } from "@/components/AuthProvider";
import PolymorphicAuthForm from "@/components/PolymorphicAuthForm";

const linkCss = css`
	text-decoration: none;
	color: inherit;
`;

const avatarCss = css`
	background-color: black;
	height: 1em;
	width: 1em;
	margin-right: 5px;
	margin-top: -2.5px;
`;

const menuCss = css`
  & .MuiMenu-paper {
    background-color: white;
  }
`

export default function NavigationBar() {
	const [dialogIsOpen, setDialogIsOpen] = useState(false);
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
	const { user, signOut } = useAuthContext();

	const handleSignOut = () => signOut().then(() => setMenuAnchorEl(null));

	return (
		<>
			<AppBar elevation={2} position="static">
				<Toolbar>
					<Stack
						alignItems="center"
						direction="row"
						justifyContent="space-between"
						width="100%">
						<Link css={linkCss} href="/" prefetch={false}>
							<Typography fontWeight="bold" variant="h6">
								ShyBye
							</Typography>
						</Link>
						<Stack alignItems="center" direction="row" spacing={4}>
							{user ? (
								<>
									<Link css={linkCss} href="/dashboard">
										<Typography variant="button">
											Challenges
										</Typography>
									</Link>
									<Link css={linkCss} href="/blog">
										<Typography variant="button">
											Blog
										</Typography>
									</Link>
									<Button
										color="inherit"
										endIcon={
											!!menuAnchorEl ? (
												<MdArrowDropUp />
											) : (
												<MdArrowDropDown />
											)
										}
										onClick={({ currentTarget }) =>
											setMenuAnchorEl(currentTarget)
										}
										startIcon={
											<Avatar
												alt={`${user.displayName}'s Avatar`}
												css={avatarCss}
												{...(user.photoURL && {
													src: user.photoURL,
												})}
											/>
										}>
										{user.displayName}
									</Button>
									<Menu
										anchorEl={menuAnchorEl}
										anchorOrigin={{
											horizontal: "right",
											vertical: "bottom",
										}}
                    css={menuCss}
										onClose={() => setMenuAnchorEl(null)}
										open={!!menuAnchorEl}
										transformOrigin={{
											horizontal: "right",
											vertical: "top",
										}}>
                    <MenuItem>
                      Profile
                    </MenuItem>
                    <MenuItem>
                      Settings
                    </MenuItem>
										<MenuItem onClick={handleSignOut}>
											Logout
										</MenuItem>
									</Menu>
								</>
							) : (
								<>
									<Link css={linkCss} href="/research">
										<Typography variant="button">
											About Social Anxiety
										</Typography>
									</Link>
									<Link css={linkCss} href="/about">
										<Typography variant="button">
											Our Team
										</Typography>
									</Link>
									<Button
										color="secondary"
										onClick={() => setDialogIsOpen(true)}
										variant="contained">
										Sign Up
									</Button>
								</>
							)}
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
			<Dialog onClose={() => setDialogIsOpen(false)} open={dialogIsOpen}>
				<DialogContent>
					<PolymorphicAuthForm />
				</DialogContent>
			</Dialog>
		</>
	);
}
