import styled from "styled-components";
import UTILS from "../../utils/utils";

export const Styled = {
	Inner: styled.div`
		height: 100%;
		widht: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-content: center;
		align-items: center;
		padding: 5%;
		background-color: ${UTILS.COLORS.BLUE};
		padding-top: 15%;
		padding-bottom: 15%;
	`,
	SectionTitle: styled.div`
		width: 100%;
		text-align: center;
		color: white;
		font-size: 2rem;
		margin-bottom: 2rem;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.5rem;
		}
	`,
	TableRow: styled.div`
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		border-bottom: 2px solid white;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 90%;
		}
	`,
	Title: styled.div`
		border: 1px solid white;
		width: 70%;
		color: white;
		border-bottom: 0px;
		padding-left: 1%;
		background-color: ${UTILS.COLORS.VIOLET};
	`,
	PositivePoints: styled.div`
		border: 1px solid white;
		border-bottom: 0px;
		width: 15%;
		color: #6dda5b;
		text-align: center;
		font-weight: bold;
		border-left: 0px;
	`,
	NegativePoints: styled.div`
		border: 1px solid white;
		border-bottom: 0px;
		width: 15%;
		color: #f05b64;
		font-weight: bold;
		text-align: center;
		border-left: 0px;
	`,
	TableRow: styled.div`
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 90%;
		}
	`,
	HeaderTitle: styled.div`
		width: 70%;
		color: white;
		border-bottom: 0px;
		padding-left: 1%;
		color: white;
		font-size: 1rem;
		padding-bottom: 0.8rem;
	`,
	HeaderPositivePoints: styled.div`
		border-bottom: 0px;
		width: 15%;
		color: white;
		text-align: center;
		font-weight: bold;
		border-left: 0px;
		font-size: 0.5rem;
	`,
	HeaderNegativePoints: styled.div`
		border-bottom: 0px;
		width: 15%;
		color: white;
		font-weight: bold;
		text-align: center;
		border-left: 0px;
		font-size: 0.5rem;
	`,
};
