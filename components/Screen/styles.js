import styled from "styled-components";
import UTILS from "../../utils/utils";

export const Styled = {
	Inner: styled.div`
		display: flex;
		flex-direction: row;
		padding: 5%;
		justify-content: center;
		justify-items: center;
	`,
	ImageContainer: styled.div`
		width: 100%;
		display: flex;
		felx-direction: row;
		justify-content: center;
		justify-items: center;
		align-content: center;
		align-items: center;

		@media ${UTILS.SCREEN.MOBILE} {
			flex-direction: column;
		}
	`,
	ImageItem: styled.div`
		position: relative;
		margin-bottom: 4rem;
		padding-top: 5rem;
		margin: 0 3%;
	`,
	Description: styled.div`
		width: 100%;
		position: absolute;
		${"" /* background-color: rgba(0, 0, 0, 0.4); */}
		top: 0;
		color: white;
		font-size: 0.9rem;
		text-align: center;
		padding: 10%;
		font-weight: 700;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1rem;
		}
	`,
};
