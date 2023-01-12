import styled from "styled-components";

export const Styled = {
	Inner: styled.div`
		background-color: black;
		height: 60vh;
		widht: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		justify-items: center;
		text-align: center;
		color: white;
	`,
	IconContainer: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		justify-items: center;
		text-align: center;
		margin-bottom: 1rem;
	`,
	Icon: styled.div`
		margin: 20%;
	`,
	Copyright: styled.div`
		font-size: 1rem;
		text-align: center;
		color: white;
	`,
};
