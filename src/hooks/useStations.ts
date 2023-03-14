import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchStationList from "../network/fetchStations";
import { Station } from "../types/APIResponseTypes";

const useStations = () => {
	const results = useQuery(["stations"],fetchStationList)
	return [results.data , results.status] as [Station[],QueryStatus]
}

export default useStations;