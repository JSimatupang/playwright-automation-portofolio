import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    retries: 1,
    workers: 1,
    use: {
        baseURL: 'https://practice.expandtesting.com',
        screenshot: 'only-on-failure',
        video: 'off',
        trace: 'off'
    },
    reporter: [['html', { open: 'never' }]],
})