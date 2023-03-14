import { QueryStatus } from '@tanstack/react-query';
import { StationDetails } from '../types/APIResponseTypes';
import { useQuery } from '@tanstack/react-query';
import fetchStationDetails from '../network/fetchStationDetails';

type UseStationDetailsProps = {
	brandSlug:string,
	slug:string
}

const useStationDetails =({brandSlug,slug}:UseStationDetailsProps) => {
	const results = useQuery(["details",brandSlug,slug],fetchStationDetails)
	return [results.data, results.status] as [StationDetails,QueryStatus]
}

export default useStationDetails;