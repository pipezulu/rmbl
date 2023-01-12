import React from "react";
import { Styled } from "./styles.js";

const ScoreTable = (props) => {
	return (
		<Styled.Inner>
			{points.map((element) => (
				<Styled.TableRow key={element.name}>
					<Styled.Title>{element.name}</Styled.Title>
					<Styled.PositivePoints>{element.Positive}</Styled.PositivePoints>
					<Styled.NegativePoints>{element.Negative}</Styled.NegativePoints>
				</Styled.TableRow>
			))}
		</Styled.Inner>
	);
};

export default ScoreTable;

const points = [
	{
		name: "foul",
		Positive: "3",
		Negative: "5",
	},
	{
		name: "foul",
		Positive: "3",
		Negative: "5",
	},
	{
		name: "foul",
		Positive: "3",
		Negative: "5",
	},
	{
		name: "foul",
		Positive: "3",
		Negative: "5",
	},
	{
		name: "foul",
		Positive: "3",
		Negative: "5",
	},
	{
		name: "foul",
		Positive: "3",
		Negative: "5",
	},
];
