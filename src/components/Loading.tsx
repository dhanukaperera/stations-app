import styled from "styled-components";
import { DEFAULT_LOADING_MESSAGE } from "../constants/constants";

const Loading = () => {
	return <LoadingStyles>
		<h1>{DEFAULT_LOADING_MESSAGE}</h1>
	</LoadingStyles>
}

export default Loading;

const LoadingStyles = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	padding:4rem;
`