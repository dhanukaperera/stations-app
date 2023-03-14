import { API_STATION_DETAILS_ENDPOINT } from './../constants/constants';
import { ERROR_STATION_DETAILS_FETCH_FAILED } from './../constants/constants';
import { QueryFunction } from '@tanstack/react-query';
import { StationDetails } from '../types/APIResponseTypes';

const fetchStationDetails :QueryFunction<StationDetails,["details",string,string]> = async ({queryKey}) => {

	const brandSlug = queryKey[1];
	const slug = queryKey[2]

	const res = await fetch(`${API_STATION_DETAILS_ENDPOINT}/${brandSlug}/${slug}`)

	if(!res.ok){
		throw new Error(ERROR_STATION_DETAILS_FETCH_FAILED)
	}

	return res.json()
}

export default fetchStationDetails