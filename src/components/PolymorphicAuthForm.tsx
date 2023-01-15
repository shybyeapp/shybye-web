import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useAuthContext } from "@/components/AuthProvider";
import { css } from "@emotion/react";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";

const buttonProviderCss = css`
	background-color: white;
	&:hover {
		background-color: #fbf8ee;
	}
`;

const buttonSharedCss = css`
	padding: 0.75em;
	min-width: 18em;
`;

enum FormVariant {
	LOG_IN,
	SIGN_UP,
}

export default function PolymorphicAuthForm() {
	const [variant, setVariant] = useState(FormVariant.SIGN_UP);

	const handleToggleFormVariant = () =>
		setVariant((prev) =>
			prev === FormVariant.LOG_IN
				? FormVariant.SIGN_UP
				: FormVariant.LOG_IN
		);

	const { googleSignIn } = useAuthContext();
	const router = useRouter();

	const handleGoogleSignIn = () =>
		googleSignIn()
			.then(() => router.push("/dashboard"))
			.catch(console.error);

	return (
		<Stack
			alignItems="center"
			className="LoginForm"
			component="form"
			padding={3}
			spacing={2}>
			<Typography fontWeight="bold" variant="h4" paddingRight={12}>
				{variant === FormVariant.SIGN_UP
					? "Sign up for an account"
					: "Log into your account"}
			</Typography>
			<TextField
				fullWidth
        name="email-address"
        type="email"
				placeholder="Enter your email"
				size="small"
			/>
			<TextField
				fullWidth
        name="password"
        type="password"
				placeholder="Enter your password"
				size="small"
			/>
			{variant === FormVariant.SIGN_UP && (
				<TextField
					fullWidth
          name="password-confirm"
          type="password"
					placeholder="Enter your password again"
					size="small"
				/>
			)}
			<Stack paddingTop={3} spacing="inherit">
				<Button color="info" css={buttonSharedCss} variant="contained">
					{variant === FormVariant.SIGN_UP ? "Create your account" : "Login"}
				</Button>
			</Stack>
			<Typography>
        {variant === FormVariant.SIGN_UP ? "Already have an account?" : "Don't have an account?"}{" "}
				<a href="#" onClick={handleToggleFormVariant}>
					{variant === FormVariant.SIGN_UP ? "Login" : "Create Account"}
				</a>
			</Typography>
			<Stack spacing="inherit">
				<Button
					color="inherit"
					css={[buttonSharedCss, buttonProviderCss]}
					onClick={handleGoogleSignIn}
					startIcon={<FaGoogle />}
					variant="outlined">
					{variant === FormVariant.SIGN_UP ? "Sign up" : "Login"} with
					Google
				</Button>
			</Stack>
		</Stack>
	);
}
