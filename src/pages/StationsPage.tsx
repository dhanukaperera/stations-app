import DisplayError from "../components/DisplayError";
import Loading from "../components/Loading";
import StationList from "../components/StationList";
import useStations from "../hooks/useStations";

const StationsPage = () => {
	const [stationList, status] = useStations();

	return <>
		{status === "loading" && <Loading />}

		{status === "error" && <DisplayError />}

		{status === "success" && <StationList stationList={stationList} />}
	</>
}

export default StationsPage;