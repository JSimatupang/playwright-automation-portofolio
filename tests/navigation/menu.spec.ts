import { test, expect } from '@playwright/test';

test('All main menu item are visible', async ({page}) => {
    await page.goto('/');

    const menuItems = ['Web inputs', 'Test Login Page', 'Test Register Page', 'Forgot Password Form', 'OTP: One Time Password', 'Dynamic Table', 'Dynamic Pagination Table', 'Locators Page'];

    for (const item of menuItems){
        await expect(page.getByRole('link', { name: item })).toBeVisible();
    }
});