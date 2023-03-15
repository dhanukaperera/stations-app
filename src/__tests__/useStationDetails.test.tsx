import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest'
import useStationDetails from "../hooks/useStationDetails";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
			retry: false,
		},
	},
});

test("it should mock the useStationsDetails Hook", async () => {
	const mockStationDetails = {
		brandId: "KLo",
		brandLogo: "https://herald.musicradio.com/media/0d3d891d-32f2-4c53-95ee-8d1e35bdd126.png",
		brandName: "Capital",
		brandSlug: "capital",
		gduid: "363e5e3b-1c83-4fc5-87b5-4b4ca4543a1f",
		heraldId: "25",
		id: "AMpR",
		legacyStationPrefix: "capital",
		name: "Capital Teesside",
		obit_enabled: "false",
		slug: "teesside",
		streamUrl: "https://media-ssl.musicradio.com/CapitalTeesside",
		tagline: "The UK's No.1 Hit Music Station"
	}

	// @ts-ignore
	fetch.mockResponseOnce(
		JSON.stringify(mockStationDetails)
	);

	const testParams =
		{ brandSlug: "capital", slug: "teesside" }


	const { result } = renderHook(() => useStationDetails(testParams), {
		wrapper: ({ children }) => (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		),
	});

	await waitFor(() => expect(result.current[1]).toBe("success"));

	const [stationDetails] = result.current;
	expect(stationDetails).toEqual(mockStationDetails);

});