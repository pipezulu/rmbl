import Image from "next/image.js";
import React from "react";
import { Styled } from "./styles.js";

const Screen = (props) => {
	return (
		<Styled.Inner>
			<Styled.ImageContainer>
				<Image
					src={props.image}
					alt="Picture of the author"
					width="300"
					height="600"
				></Image>
				<Image
					src={props.image}
					alt="Picture of the author"
					width="300"
					height="600"
				></Image>
				<Image
					src={props.image}
					alt="Picture of the author"
					width="300"
					height="600"
				></Image>
			</Styled.ImageContainer>
			{/* <Styled.Description></Styled.Description> */}
		</Styled.Inner>
	);
};

export default Screen;
