import { expect, test } from '@playwright/test';

test('picks characters and shows breach count', async ({ page }) => {
	// sha1('password1') = E38AD214943DAAD1D64C102FAEC29DE4AFE9DA3D
	await page.route(
		'https://api.pwnedpasswords.com/range/*',
		(route) =>
			route.fulfill({
				headers: { 'access-control-allow-origin': '*' },
				body: '214943DAAD1D64C102FAEC29DE4AFE9DA3D:2413945\r\nFFFFF:1',
			}),
	);

	await page.goto('/');
	await page.waitForLoadState('networkidle');
	await expect(
		page.getByRole('heading', {
			level: 1,
			name: 'Characters from Password',
		}),
	).toBeVisible();

	await page
		.getByPlaceholder('Enter a password here')
		.fill('password1');
	await expect(page.getByText('2,413,945')).toBeVisible();

	await page
		.getByRole('button', { name: 'Position 9', exact: true })
		.click();
	await page
		.getByRole('button', { name: 'Position 1', exact: true })
		.click();
	await expect(
		page.getByRole('heading', {
			name: 'Enter the 1st and 9th characters',
		}),
	).toBeVisible();
	await expect(page.getByText('number character')).toBeVisible();
	await expect(page.getByText('lowercase character')).toBeVisible();
});

test('nav links reach each page', async ({ page }) => {
	await page.goto('/');
	const nav = page.getByRole('navigation');
	for (const name of ['About', 'Masked passwords', 'How it works']) {
		await nav.getByRole('link', { name }).click();
		await expect(nav.getByRole('link', { name })).toHaveAttribute(
			'aria-current',
			'page',
		);
	}
});
