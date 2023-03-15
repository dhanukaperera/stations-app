import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import DisplayError from '../components/DisplayError';
import { DEFAULT_ERROR_MESSAGE } from '../constants/constants';

test("it should render a default error message in the Display Error Component", async () => {
	const loading = render(<DisplayError />);
	const loadingText = await loading.findByTestId("display-error-message")
	expect(loadingText.textContent).toContain(DEFAULT_ERROR_MESSAGE)
	loading.unmount()
})

