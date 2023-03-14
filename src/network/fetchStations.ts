import { Station } from '../types/APIResponceTypes';
import { QueryFunction } from '@tanstack/react-query';
import { API_STATIONS_ENDPOINT } from '../utils/consts.utils';

const fetchStationList : QueryFunction<Station[],["stations"]> = async () => {
	const res = await fetch(API_STATIONS_ENDPOINT);

	if (!res.ok) {
		throw new Error('Stations list fetch failed!')
	}

	return res.json()
}

export default fetchStationList