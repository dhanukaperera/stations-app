import { Station } from "../types/APIResponseTypes";
import StationItem from "./StationItem";

type StationListProps = {
	stationList: Station[]
}

const StationList = (props: StationListProps) => {

	const { stationList } = props

	if (stationList.length === 0) {
		return <h1>No Stations Found!</h1>
	}

	return <>
		{stationList.map((station) => {
			return <StationItem key={station.id} name={station.name} tagline={station.tagline} brandSlug={station.brand.slug} slug={station.slug} />
		})}
	</>
}

export default StationList