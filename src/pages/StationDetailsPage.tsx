import { Link, useParams } from "react-router-dom";
import DisplayError from "../components/DisplayError";
import Loading from "../components/Loading";
import StationDetails from "../components/StationDetails";
import { BTN_TEXT_BACK, ERROR_MISSING_BRAND_AND_SLUG } from "../constants/constants";
import { routes } from "../constants/routes";
import useStationDetails from "../hooks/useStationDetails";

const StationDetailsPage = () => {

	const { brandSlug, slug } = useParams()

	if (!brandSlug || !slug) {
		throw new Error(ERROR_MISSING_BRAND_AND_SLUG)
	}

	const [stationDetails, status] = useStationDetails({ brandSlug, slug });

	return <>

		{status === "loading" && <Loading />}

		{status === "error" && <DisplayError />}

		{status === "success" && <div>
			<StationDetails name={stationDetails.name} tagline={stationDetails.tagline} brandLogo={stationDetails.brandLogo} steamingUrl={stationDetails.streamUrl} />
			<Link to={routes.HOME} >
				<button>{BTN_TEXT_BACK}</button>
			</Link>
		</div>}
	</>
}

export default StationDetailsPage;