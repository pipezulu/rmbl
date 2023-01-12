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
		background-color: ${UTILS.COLORS.BLUE};
		color: ${UTILS.COLORS.VIOLET};
		color: white;
		font-size: 2rem;
	`,
	LeftContainer: styled.div`
		width: 50%;
		${"" /* background-color: ${UTILS.COLORS.VIOLET}; */}
		padding: 0 5%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-content: center;
		align-items: center;
	`,
	RightContainer: styled.div`
		width: 50%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
	`,
	MainLine: styled.div`
		font-size: 6rem;
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
