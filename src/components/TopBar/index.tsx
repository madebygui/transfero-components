/* eslint-disable react/no-unescaped-entities */
import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Button } from "../Button";
import { Typo } from "../Typo";
import { TopBarProps } from "./TopBar";

const TopBar: React.FC<TopBarProps> = ({
	title,
	centerText,
	width,
	toggleMenu,
}) => {
	const { palette } = useTheme();
	const dimensions = useWindowDimensions();

	return (
		<AppBar
			position="fixed"
			sx={{
				width,
				height: "100px",
				backgroundColor: "transparent",
				justifyContent: "flex-start",
				boxShadow: "unset",
			}}
		>
			<Toolbar
				className="space-between"
				sx={{ backgroundColor: palette.blue[800] }}
			>
				<Box className="flex-row align-center" sx={{ width: "30%" }}>
					{dimensions.width < 500 && (
						<Button
							icon="menu"
							iconColor={palette.gray[100]}
							onClick={() => toggleMenu && toggleMenu()}
							link
							iconsize="md"
							style={{
								margin: "0 !important",
								width: "auto !important",
								height: "auto !important",
							}}
						/>
					)}

					<Typo size="md" color="white" fontWeight="300">
						{title}
					</Typo>
				</Box>

				{centerText && (
					<Typo
						size="md"
						color="white"
						fontWeight="300"
						style={{ width: "30%", textAlign: "center" }}
					>
						{centerText}
					</Typo>
				)}

				{dimensions.width >= 500 && <Box style={{ width: "30%" }} />}
			</Toolbar>
		</AppBar>
	);
};

export { TopBar };
