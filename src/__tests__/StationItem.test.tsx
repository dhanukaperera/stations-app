import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import StationItem from '../components/StationItem';
import { StaticRouter } from "react-router-dom/server";

test("it should contains the correct values in Station Item Component", async () => {
	const stationItem = render(
		<StaticRouter location={"/"}  >
			<StationItem
				name='Test Station Name'
				tagline='Test tag line'
				slug='Test slug'
				brandSlug='Test Brand Slug'
			/>
		</StaticRouter>
	);

	const testStationObj = {
		name: "Test Station Name",
		tagline: "Test tag line",
		slug: "Test slug",
		brandSlug: "Test Brand Slug"
	}

	const name = await stationItem.findByTestId("station-item-name")
	expect(name.textContent).toContain(testStationObj.name);

	const tagline = await stationItem.findByTestId("station-item-tagline")
	expect(tagline.textContent).eq(testStationObj.tagline)

	stationItem.unmount()
})
