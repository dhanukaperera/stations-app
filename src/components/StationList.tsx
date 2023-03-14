import { Station } from "../types/APIResponceTypes";
import StationItem from "./StationItem";

type StationListProps = {
	stationList: Station[]
}

const StationList = (props: StationListProps) => {

	const { stationList } = props

	return <div>Station List
		{stationList.map((station) => {
			return <StationItem key={station.id} name={station.name} tagline={station.tagline} brandSlug={station.brand.slug} slug={station.slug} />
		})}
	</div>
}

export default StationList