import React from "react";
import { Styled } from "./styles.js";

import ReactPlayer from "react-player";

const Video = (props) => {
	return (
		<Styled.Inner>
			{/* <source src={img.src} type="video/mp4" /> */}

			<ReactPlayer url="https://www.youtube.com/watch?v=VjU5GFpEU8g" />
		</Styled.Inner>
	);
};

export default Video;
