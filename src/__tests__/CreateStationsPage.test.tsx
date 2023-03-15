import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { StaticRouter } from 'react-router-dom/server';
import CreateStationPage from '../pages/CreateStationPage';


test("it should render correctly the create station page", () => {
	const { asFragment } = render(
		<StaticRouter location={"/"} >
			<CreateStationPage />
		</StaticRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});