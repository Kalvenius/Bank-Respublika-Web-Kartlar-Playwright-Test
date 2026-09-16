import { test, expect } from '@playwright/test';

test('Kartlar bölməsindən Visa Neo Premium açılır', async ({ page }) => {
    // Ana səhifəyə keçid
    await page.goto('https://www.bankrespublika.az/', { waitUntil: 'domcontentloaded' });
    // "Kartlar" menyusuna klik (naviqasiya)
    await page.getByRole('link', { name: 'Kartlar', exact: true }).first().click();

    // Kartlar səhifəsinə yönləndiyini yoxla
    await expect(page).toHaveURL(/plastic-cards/);

    // "Visa Neo Premium" kartına klik
    await page.getByRole('link', { name: 'Visa Neo Premium' }).click();

    // Visa Neo Premium səhifəsinin açıldığını yoxla
    await expect(page).toHaveURL(/neokart-visa-premium/);
    await expect(page.getByRole('heading', { name: /Visa Neo Premium/i })).toBeVisible();
});