import { Link } from "react-router-dom";
import DisplayError from "../components/DisplayError";
import Loading from "../components/Loading";
import StationList from "../components/StationList";
import { routes } from "../constants/routes";
import useStations from "../hooks/useStations";

const StationsPage = () => {
	const [stationList, status] = useStations();

	return <>
		{status === "loading" && <Loading />}

		{status === "error" && <DisplayError />}

		{status === "success" && <>
			<Link to={routes.CREATE_STATION} >
				<button>Create Station</button>
			</Link>
			<StationList stationList={stationList} /></>}
	</>
}

export default StationsPage;