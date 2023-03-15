import styled from "styled-components"

const Header = () => {
	return <HeaderStyles>
		<LogoStyles src="https://global.com/wp-content/uploads/2022/11/221109_GlobalPlayer_Logo_AW_Mono_White_RGB.svg" alt="logo" />
	</HeaderStyles>
}

export default Header

const HeaderStyles = styled.div`
	background: linear-gradient(-140deg, #19e4ff 0%, #006efa 40%, #1e54ef 100%);
    height: 100px;
    width: 100%;
`

const LogoStyles = styled.img`
	padding:1rem;
	height:90px;
	margin:auto
`