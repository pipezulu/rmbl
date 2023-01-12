import styled from "styled-components";
import UTILS from "../../utils/utils";

export const Styled = {
	Inner: styled.div`
		height: 100vh;
		widht: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		justify-items: center;
		text-align: center;
		background-color: ${UTILS.COLORS.BLUE};
		color: ${UTILS.COLORS.VIOLET};
		color: white;
		font-size: 2rem;
		padding: 5%;
	`,
};
