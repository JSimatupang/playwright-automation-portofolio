import { test, expect } from '@playwright/test';

test('CPU usage value exists in dynamic table', async ({ page }) => {
  await page.goto('/dynamic-table');

  const headers = page.locator('thead th');
  const cpuIndex = await headers
    .allTextContents()
    .then(texts => texts.findIndex(text => text.trim() === 'CPU' ));
  const chromeRow = page.locator('tbody tr', { hasText: 'Chrome' });
  const cpuCell = chromeRow.locator('td').nth(cpuIndex);
  const tableCpuText = await cpuCell.innerText();
  const summaryCpuText = await page.locator('#chrome-cpu').innerText();
  
  const tableCpuValue = tableCpuText.match(/[\d.]+%/)?.[0];
  const summaryCpuValue = summaryCpuText.match(/[\d.]+%/)?.[0];

  await expect(cpuCell).toBeVisible();
  await expect(cpuCell).toContainText('%');
  await expect(tableCpuValue).toBe(summaryCpuValue);
});
