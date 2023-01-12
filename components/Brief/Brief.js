import Link from "next/link.js";
import React from "react";
import { Styled } from "./styles.js";

const Brief = (props) => {
	return (
		<Styled.Inner>
			<p>
				RMBL es un juego en tiempo real de fútbol, donde los eventos que suceden
				en un partido suman o restan puntos a los participantes.
			</p>
		</Styled.Inner>
	);
};

export default Brief;
