import styled from "styled-components"
import { DEFAULT_ERROR_MESSAGE } from "../constants/constants"

const DisplayError = () => {
	return <DisplayErrorStyles>
		<h1>{DEFAULT_ERROR_MESSAGE}</h1>
	</DisplayErrorStyles>
}

export default DisplayError

const DisplayErrorStyles = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	padding:4rem;
	color:red;
`