import styled from "styled-components";
import UTILS from "../../utils/UTILS";

export const Styled = {
	Inner: styled.div`
		height: 100vh;
		widht: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		background-color: ${UTILS.COLORS.BLUE};
		color: ${UTILS.COLORS.VIOLET};
		color: white;
		font-size: 2rem;
	`,
	MainLine: styled.div`
		font-size: 4rem;
		color: ${UTILS.COLORS.WHITE};
		font-weight: 900;
		margin-bottom: 2rem;
	`,
	SecondLine: styled.div`
		font-size: 1rem;
		color: ${UTILS.COLORS.WHITE};
		font-weight: 400;
		margin-bottom: 1rem;
	`,
};
