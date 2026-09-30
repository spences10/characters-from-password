import { expect, test } from '@playwright/test';

test('picks characters and shows breach count', async ({ page }) => {
	// sha1('password1') = E38AD214943DAAD1D64C102FAEC29DE4AFE9DA3D
	await page.route(
		'https://api.pwnedpasswords.com/range/*',
		(route) =>
			route.fulfill({
				body: '214943DAAD1D64C102FAEC29DE4AFE9DA3D:2413945\r\nFFFFF:1',
			}),
	);

	await page.goto('/');
	await page.waitForLoadState('networkidle');
	await expect(
		page.getByRole('heading', {
			level: 1,
			name: 'Password Character Picker',
		}),
	).toBeVisible();

	await page
		.getByPlaceholder('Enter a password here')
		.fill('password1');
	await expect(page.getByText('2,413,945')).toBeVisible();
	await expect(page.getByText('"p"')).toBeVisible();

	await page.getByRole('button', { name: 'Pick Character:' }).click();
	await page.getByRole('option', { name: '9' }).click();
	await expect(page.getByText('"1"')).toBeVisible();
	await expect(
		page.getByText('This is a number character'),
	).toBeVisible();
});

test('nav links reach each page', async ({ page }) => {
	await page.goto('/');
	const nav = page.getByRole('navigation');
	for (const name of [
		'About',
		'Masked Passwords',
		'How Does It Work?',
	]) {
		await nav.getByRole('link', { name }).click();
		await expect(nav.getByRole('link', { name })).toHaveAttribute(
			'aria-current',
			'page',
		);
	}
});
