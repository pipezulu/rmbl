import Image from "next/image.js";
import React from "react";
import { Styled } from "./styles.js";

const Header = (props) => {
	return (
		<Styled.Inner>
			<Styled.LeftContainer>
				<Styled.MainLine>Vive el fútbol minuto a minuto.</Styled.MainLine>
			</Styled.LeftContainer>
			<Styled.RightContainer>
				<Image
					src="/logo.png"
					alt="Picture of the author"
					width="400"
					height="150"
				></Image>
				<Styled.SecondLine>Suma puntos acción por acción.</Styled.SecondLine>
				<Styled.SecondLine>Gana premios partido a partido.</Styled.SecondLine>
			</Styled.RightContainer>
		</Styled.Inner>
	);
};

export default Header;
