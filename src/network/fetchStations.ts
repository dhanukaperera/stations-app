import { API_STATIONS_ENDPOINT, ERROR_STATIONS_FETCH_FAILED } from './../constants/constants';
import { Station } from '../types/APIResponseTypes';
import { QueryFunction } from '@tanstack/react-query';

const fetchStationList : QueryFunction<Station[],["stations"]> = async () => {
	const res = await fetch(API_STATIONS_ENDPOINT);

	if (!res.ok) {
		throw new Error(ERROR_STATIONS_FETCH_FAILED)
	}

	return res.json()
}

export default fetchStationList