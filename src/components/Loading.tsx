import styled from "styled-components";
import { DEFAULT_LOADING_MESSAGE } from "../constants/constants";

type LoadingProps = {
	message?: string
}

const Loading = (props: LoadingProps) => {
	const { message } = props
	return <LoadingStyles>
		<h1 data-testid="loading" > {message ? message : DEFAULT_LOADING_MESSAGE} </h1>
	</LoadingStyles>
}

export default Loading;

const LoadingStyles = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	padding:4rem;
`