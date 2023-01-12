import React from "react";
import { Styled } from "./styles.js";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import Link from "next/link.js";

const Footer = (props) => {
	return (
		<Styled.Inner>
			<Styled.Icon>
				<Link href="https://www.instagram.com/rmbl.live/?hl=en" passHref={true}>
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
		</Styled.Inner>
	);
};

export default Footer;
