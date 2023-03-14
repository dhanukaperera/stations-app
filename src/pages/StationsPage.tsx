import { Link } from "react-router-dom";
import DisplayError from "../components/DisplayError";
import Loading from "../components/Loading";
import StationList from "../components/StationList";
import { routes } from "../constants/routes";
import useStations from "../hooks/useStations";
import styled from 'styled-components'

const StationsPage = () => {
	const [stationList, status] = useStations();

	return <>
		{status === "loading" && <Loading />}

		{status === "error" && <DisplayError />}

		{status === "success" && <StationPageStyles>
			<BannerImageStyles>
				<img src="https://imgs.capitalfm.com/images/57069?crop=16_9&width=450&relax=1&signature=Ddo866OkGPmYckMCgmhQZQ3Jtes=" alt="bannner-image" />
				<Link to={routes.CREATE_STATION} >
					<CreateStationButtonStyles>Create Station</CreateStationButtonStyles>
				</Link>
			</BannerImageStyles>
			<div>
				<StationList stationList={stationList} />
			</div>
		</StationPageStyles>}
	</>
}

export default StationsPage;

const StationPageStyles = styled.div`
	display:flex;
	justify-content:center;
`

const BannerImageStyles = styled.div`
	padding:1rem;
	display:flex;
	flex-direction:column;
	align-items:center;

`

const CreateStationButtonStyles = styled.button`
	border:2px solid #006efa;
	padding:0.5rem 2rem;
	background-color:#fff;
	border-radius:25px;
	text-transform:uppercase;
	font-weight:bold;
	color:#006efa;
	cursor:pointer;
	margin:1rem;
`