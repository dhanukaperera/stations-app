import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
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

		{status === "success" && <StationDetailsPageStyles>
			<StationDetails name={stationDetails.name} tagline={stationDetails.tagline} brandLogo={stationDetails.brandLogo} steamingUrl={stationDetails.streamUrl} />
			<Link to={routes.HOME} >
				<BackButtonStyles>{BTN_TEXT_BACK}</BackButtonStyles>
			</Link>
		</StationDetailsPageStyles>}
	</>
}

export default StationDetailsPage;

const StationDetailsPageStyles = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
`

const BackButtonStyles = styled.button`
	border:2px solid #006efa;
	padding:0.5rem 2rem;
	background-color:#fff;
	border-radius:25px;
	text-transform:uppercase;
	font-weight:bold;
	color:#006efa;
	cursor:pointer;
`