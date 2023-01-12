import Image from "next/image.js";
import React from "react";
import { Styled } from "./styles.js";

const Screen = (props) => {
	return (
		<Styled.Inner>
			<Styled.ImageContainer>
				<Styled.ImageItem>
					<Image
						src="/step1.png"
						alt="Picture of the author"
						width="300"
						height="600"
					></Image>
					<Styled.Description>
						RMBL y el azar se encargan de tus minutos...
					</Styled.Description>
				</Styled.ImageItem>
				<Styled.ImageItem>
					<Image
						src="/step3.png"
						alt="Picture of the author"
						width="300"
						height="600"
					></Image>
					<Styled.Description>
						...pero no del resultado! Elige tus boosters con sabiduría
					</Styled.Description>
				</Styled.ImageItem>
				<Styled.ImageItem>
					<Image
						src="/step2.png"
						alt="Picture of the author"
						width="300"
						height="600"
					></Image>
					<Styled.Description>
						Y llega a la cima del Ranking. Los mejores te esperan!
					</Styled.Description>
				</Styled.ImageItem>
			</Styled.ImageContainer>
			{/* <Styled.Description></Styled.Description> */}
		</Styled.Inner>
	);
};

export default Screen;
