import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Loading from '../components/Loading';
import { DEFAULT_LOADING_MESSAGE } from '../constants/constants';

test("it should render a default loading message in Loading Component", async () => {
	const loading = render(<Loading />);
	const loadingText = await loading.findByTestId("loading")
	expect(loadingText.textContent).toContain(DEFAULT_LOADING_MESSAGE)
	loading.unmount()
})

test("it should render a custom loading message in the Loading Component", async () => {
	const loading = render(<Loading message='Test Loading Message' />);
	const loadingText = await loading.findByTestId("loading")
	const expectedLoadingMessage = "Test Loading Message";
	expect(loadingText.textContent).toContain(expectedLoadingMessage)
	loading.unmount()
})