import { QueryFunction } from '@tanstack/react-query';
import { StationDetails } from '../types/APIResponceTypes';
import { API_STATION_DETAILS_ENDPOINT } from "../utils/consts.utils"

const fetchStationDetails :QueryFunction<StationDetails,["details",string,string]> = async ({queryKey}) => {

	const brandSlug = queryKey[1];
	const slug = queryKey[2]

	const res = await fetch(`${API_STATION_DETAILS_ENDPOINT}/${brandSlug}/${slug}`)

	if(!res.ok){
		throw new Error("Station details fetch failed!")
	}

	return res.json()
}

export default fetchStationDetails