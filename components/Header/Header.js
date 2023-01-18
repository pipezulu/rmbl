import Image from "next/image.js";
import React from "react";
import { Styled } from "./styles.js";
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from "react-device-detect";
import Link from "next/link.js";

const Header = (props) => {
	return (
		<Styled.Inner>
			<Styled.LeftContainer>
				<Styled.MainLine>Vive el fútbol minuto a minuto.</Styled.MainLine>
				<Styled.SecondLine>Suma puntos acción por acción.</Styled.SecondLine>
				<Styled.SecondLine>Gana premios partido a partido.</Styled.SecondLine>
			</Styled.LeftContainer>

			<BrowserView>
				<Styled.RightContainer>
					<Image
						src="/screen4_mock_removebg.png"
						alt="Picture of the author"
						width="250"
						height="450"
					></Image>
					<Styled.LogoContainer>
						<Image
							src="/logo.png"
							alt="Picture of the author"
							width="500"
							height="200"
						></Image>
						<Link href="https://rmbl.live" passHref={true}>
							<Styled.Button>Jugar</Styled.Button>
						</Link>
					</Styled.LogoContainer>

				</Styled.RightContainer>
			</BrowserView>
			<MobileView>
				<Image
					src="/screen4_mock_removebg.png"
					alt="Picture of the author"
					width="250"
					height="450"
				></Image>
				<Styled.LogoContainer>
					<Image
						src="/logo.png"
						alt="Picture of the author"
						width="250"
						height="90"
					></Image>
				</Styled.LogoContainer>
				<Link href="https://rmbl.live" passHref={true}>
					<Styled.Button>Jugar</Styled.Button>
				</Link>
                                
			</MobileView>
		</Styled.Inner>
	);
};

export default Header;
