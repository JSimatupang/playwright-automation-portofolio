import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    retries: 1,
    workers: 1,
    use: {
        baseURL: 'https://practice.expandtesting.com',
        trace: 'off',
        screenshot: 'off',
        video: 'off',
        viewport: null, // use full available screen
    },
    reporter: [['html', { open: 'never' }]],
})