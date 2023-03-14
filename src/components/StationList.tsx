import { Station } from "../types/APIResponseTypes";
import StationItem from "./StationItem";

type StationListProps = {
	stationList: Station[]
}

const StationList = (props: StationListProps) => {

	const { stationList } = props

	return <>
		{stationList.map((station) => {
			return <StationItem key={station.id} name={station.name} tagline={station.tagline} brandSlug={station.brand.slug} slug={station.slug} />
		})}
	</>
}

export default StationList