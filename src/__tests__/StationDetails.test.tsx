import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import StationDetails from '../components/StationDetails'
import { StaticRouter } from 'react-router-dom/server';


test("it should render a station details", () => {
	const { asFragment } = render(
		<StaticRouter location={"/"} >
			<StationDetails
				name='Capital Teesside'
				tagline="The UK's No.1 Hit Music Station"
				brandLogo='https://herald.musicradio.com/media/0d3d891d-32f2-4c53-95ee-8d1e35bdd126.png'
				steamingUrl='https://media-ssl.musicradio.com/CapitalTeesside' />
		</StaticRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});