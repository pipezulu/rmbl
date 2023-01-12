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
		${"" /* background-color: ${UTILS.COLORS.BLUE}; */}
		color: ${UTILS.COLORS.VIOLET};
		color: white;
		font-size: 2rem;
		@media ${UTILS.SCREEN.MOBILE} {
			flex-direction: column;
			justify-content: space-between;
		}
	`,
	LeftContainer: styled.div`
		width: 40vw;
		${"" /* background-color: ${UTILS.COLORS.VIOLET}; */}
		${"" /* padding: 0 5%; */}
		${"" /* height: 100%; */}
		display: flex;
		flex-direction: column;
		align-content: center;
		${"" /* align-items: center; */}
		text-align: right;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			height: 60vh;
			padding-top: 10%;
			justify-items: center;
			justify-content: center;
		}
	`,
	MainLine: styled.div`
		font-size: 5rem;
		color: ${UTILS.COLORS.WHITE};
		font-weight: 900;
		margin-bottom: 2rem;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 2rem;
			margin-bottom: 0;
			text-align: center;
			margin-bottom: 1rem;
		}
	`,
	SecondLine: styled.div`
		font-size: 1.5rem;
		color: ${UTILS.COLORS.WHITE};
		font-weight: 400;
		margin-bottom: 1rem;

		@media ${UTILS.SCREEN.MOBILE} {
			text-align: center;
			font-size: 1rem;
		}
	`,
	RightContainer: styled.div`
		width: 50vw;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		position: relative;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			height: 40%;
			align-content: flex-start;
			justify-content: flex-start;
			justify-items: flex-start;
			padding-bottom: 2rem;
		}
	`,
	LogoContainer: styled.div`
		position: absolute;
		bottom: -50px;
		background-color: rgba(0, 0, 0, 0.35);
		padding: 20% 5%;
		${"" /* border-radius: 40px; */}
		@media ${UTILS.SCREEN.MOBILE} {
			left: 0;
			justify-content: center;
			display: flex;
			width: 100%;
			padding: 10% 10%;
			bottom: 0;
			padding-bottom: 30%;
		}
	`,
	Button: styled.span`
		border: 4px solid white;
		padding: 2% 2%;
		width: 30%;
		text-align: center;
		color: white;
		font-size: 2rem;
		position: absolute;
		left: 36%;
		bottom: 10%;
		border-radius: 100px;
		background-color: ${UTILS.COLORS.VIOLET};
		@media ${UTILS.SCREEN.MOBILE} {
			bottom: 5%;
			font-size: 1.5rem;
		}
	`,
};
