import React from "react";
import { Styled } from "./styles.js";
import { useState, useEffect } from "react";

const ScoreTable = (props) => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		fetch(`/api/sheets`)
			.then((response) => response.json())
			.then((data) => {
				setEvents(data);
			});
	}, []);
	return (
		<Styled.Inner id="hashid">
			<Styled.SectionTitle>Tabla de puntos por evento</Styled.SectionTitle>
			{events.map((element) => (
				<Styled.TableRow key={element.eventName}>
					<Styled.Title>{element.eventName}</Styled.Title>
					<Styled.PositivePoints>{element.positive}</Styled.PositivePoints>
					<Styled.NegativePoints>{element.negative}</Styled.NegativePoints>
				</Styled.TableRow>
			))}
		</Styled.Inner>
	);
};

export default ScoreTable;
