import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest'
import useStations from '../hooks/useStations';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
			retry: false,
		},
	},
});

test("it should mock the useStations Hook", async () => {
	const mockStationList = [
		{
			brand: {
				id: "KLo",
				slug: "capital"
			},
			gduid: "363e5e3b-1c83-4fc5-87b5-4b4ca4543a1f",
			heraldId: 25,
			id: "AMpR",
			name: "Capital Teesside",
			slug: "teesside",
			streamUrl: "https://media-ssl.musicradio.com/CapitalTeesside",
			tagline: "The UK's No.1 Hit Music Station"
		},
		{
			brand: {
				id: "KLo",
				slug: "capital"
			},
			gduid: "82ca7a98-e7ab-4bf2-b51b-f615a794b453",
			heraldId: 26,
			id: "AMpS",
			name: "Capital Tyne and Wear",
			slug: "tynewear",
			streamUrl: "https://media-ssl.musicradio.com/CapitalTyneWear",
			tagline: "The UK's No.1 Hit Music Station"
		},

	]

	// @ts-ignore
	fetch.mockResponseOnce(
		JSON.stringify([
			...mockStationList
		])
	);

	const { result } = renderHook(() => useStations(), {
		wrapper: ({ children }) => (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		),
	});

	await waitFor(() => expect(result.current[1]).toBe("success"));

	const [stationsList] = result.current;
	expect(stationsList).toEqual(mockStationList);

});

