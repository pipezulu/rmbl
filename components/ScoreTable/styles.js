import styled from "styled-components";

export const Styled = {
	Inner: styled.div`
		height: 100vh;
		widht: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		padding: 5%;
	`,
	TableRow: styled.div`
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
	`,
	Title: styled.div`
		border: 1px solid white;
		width: 70%;
		color: white;
		border-bottom: 0px;
		padding-left: 1%;
	`,
	PositivePoints: styled.div`
		border: 1px solid white;
		border-bottom: 0px;
		width: 15%;
		color: green;
		text-align: center;
		font-weight: bold;
		border-left: 0px;
	`,
	NegativePoints: styled.div`
		border: 1px solid white;
		border-bottom: 0px;
		width: 15%;
		color: red;
		font-weight: bold;
		text-align: center;
		border-left: 0px;
	`,
};
