import React from "react";
import { Styled } from "./styles.js";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { AiOutlineTrademark } from "react-icons/ai";

import Link from "next/link.js";

const Footer = (props) => {
	return (
		<Styled.Inner>
			<Styled.IconContainer>
				<Styled.Icon>
					<Link
						href="https://www.instagram.com/rmbl.live/?hl=en"
						passHref={true}
					>
						<BsInstagram size={30} color="white" />
					</Link>
				</Styled.Icon>
				<Styled.Icon>
					<Link
						href="https://www.tiktok.com/@rmbl.liveive/?hl=en"
						passHref={true}
					>
						<FaTiktok size={30} color="white" />
					</Link>
				</Styled.Icon>
				<Styled.Icon>
					<Link href="https://twitter.com/rmbl_live" passHref={true}>
						<ImTwitter size={30} color="white" />
					</Link>
				</Styled.Icon>
			</Styled.IconContainer>
			<Styled.Copyright>
				RMBL
				<AiOutlineTrademark />
			</Styled.Copyright>
<Link href="https://drive.google.com/drive/folders/1ueb5YZst9ssR98amBNNEbnSOmvXFv5Li" passHref={true}>
					<Styled.Button>Lite Paper</Styled.Button>
				</Link>
		</Styled.Inner>
	);
};

export default Footer;
