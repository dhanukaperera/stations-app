import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import StationList from '../components/StationList';
import { StaticRouter } from 'react-router-dom/server';


test("it should render a empty stations list", async () => {
	const { asFragment } = render(<StationList stationList={[]} />);
	expect(asFragment()).toMatchSnapshot();
})

test("it should render a list of", () => {

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

	const { asFragment } = render(
		<StaticRouter location={"/"} >
			<StationList stationList={mockStationList} />
		</StaticRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});