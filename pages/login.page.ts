import {Page, expect} from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}
    
    async goto() {
        await this.page.goto('/login');
        await this.page.waitForSelector('#username', { timeout: 15000 });
    }

    async login(username: string, password:string) {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('button[type="submit"]');
    }

    async assertLoginSuccess() {
        await expect(this.page.locator('.alert-success')).toBeVisible();
    }

    async assertLoginError() {
        await expect(this.page.locator('.alert-danger')).toBeVisible();
    }
}
