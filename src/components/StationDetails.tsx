import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import { ALT_LOGO } from '../constants/constants';

type StationDetailsProps = {
	name: string
	tagline: string,
	brandLogo: string,
	steamingUrl: string
}

const StationDetails = (props: StationDetailsProps) => {
	const { name, tagline, brandLogo, steamingUrl } = props;

	return <StationDetailsStyles>
		<img src={brandLogo} alt={`${name} ${ALT_LOGO}`} />
		<InfoContainer>
			<h1>
				{name}
			</h1>
			<p>{tagline}</p>
			<ReactAudioPlayer
				src={steamingUrl}
				controls
			/>
		</InfoContainer>
	</StationDetailsStyles>
}
export default StationDetails

const StationDetailsStyles = styled.div`
	display:flex;
	align-items:center;
	padding:4rem 1rem;
	margin:2rem;
	img {
		border:4px solid #006efa;
		border-radius: 50%;
	}
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`
const InfoContainer = styled.div`
	margin:1rem 2rem;
	h1  {
		margin-bottom:0.5rem;
	}
	p{
		margin-bottom:1rem;
	}
`