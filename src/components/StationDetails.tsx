import useStationDetails from "../hooks/useStationDeatils";

type StationDetailsProps = {
	name: string
	tagline: string,
	brandLogo: string,
	steamingUrl: string
}

const StationDetails = (props: StationDetailsProps) => {
	const { name, tagline, brandLogo, steamingUrl } = props;

	return <div>
		Station Details Component
		<img src={brandLogo} alt={`${name} logo`} />
		<h2>
			{name}
		</h2>
		<p>{tagline}</p>
		<div>

		</div>

	</div>
}
export default StationDetails