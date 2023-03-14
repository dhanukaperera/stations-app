import ReactAudioPlayer from 'react-audio-player';
import { ALT_LOGO } from '../constants/constants';

type StationDetailsProps = {
	name: string
	tagline: string,
	brandLogo: string,
	steamingUrl: string
}

const StationDetails = (props: StationDetailsProps) => {
	const { name, tagline, brandLogo, steamingUrl } = props;

	return <>
		<img src={brandLogo} alt={`${name} ${ALT_LOGO}`} />
		<h2>
			{name}
		</h2>
		<p>{tagline}</p>
		<ReactAudioPlayer
			src={steamingUrl}
			controls
		/>
	</>
}
export default StationDetails