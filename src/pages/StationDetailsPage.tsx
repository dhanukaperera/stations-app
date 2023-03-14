import { Link, useParams } from "react-router-dom";
import DisplayError from "../components/DisplayError";
import Loading from "../components/Loading";
import StationDetails from "../components/StationDetails";
import useStationDetails from "../hooks/useStationDeatils";

const StationDetailsPage = () => {

	const { brandSlug, slug } = useParams()

	console.log("brandSlug " + brandSlug)
	console.log("slug " + slug)


	if (!brandSlug || !slug) {
		throw new Error('Missing brand slug or slug')
	}

	const [stationDetails, status] = useStationDetails({ brandSlug, slug });

	return <>

		{status === "loading" && <Loading />}

		{status === "error" && <DisplayError />}

		{status === "success" && <div>
			<StationDetails name={stationDetails.name} tagline={stationDetails.tagline} brandLogo={stationDetails.brandLogo} steamingUrl={stationDetails.streamUrl} />
			<Link to={'/'} >
				<button>Back</button>
			</Link>
		</div>}
	</>
}

export default StationDetailsPage;