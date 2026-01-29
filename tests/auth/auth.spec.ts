import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.describe.serial('Authentication flows', () => {

    test.skip('Login with valid credential', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('practice', 'SuperSecretPassword!');

        await expect(page).toHaveURL(/\/secure/);
        await expect(page.locator('a[href="/logout"]')).toBeVisible();
    });

    test.skip('User stays login after page refresh', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('practice', 'SuperSecretPassword!');
        await page.reload();

        await expect(page).toHaveURL(/\/secure/);
        await expect(page.locator('a[href="/logout"]')).toBeVisible();
    });

    test.skip('Login fails with invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.goto();
        await loginPage.login('practice', 'wrongpassword');

        await expect(page.locator('.alert-danger')).toBeVisible();
    });

});