import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const wrapperCss = css`
	background-color: #fbf8ee;
	padding: 2em;
`;

export default function Footer() {
	return (
		<Box component="footer" css={wrapperCss}>
			<Typography>ShyBye &copy;2023 ✨</Typography>
		</Box>
	);
}
