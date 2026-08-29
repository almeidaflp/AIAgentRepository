import { test, expect } from '@playwright/test';

test('should login, add iphone X to cart and validate checkout flow', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.locator('input[name="username"]').fill('rahulshettyacademy');
  await page.locator('input[name="password"]').fill('Learning@830$3mK2');
  await page.locator('#signInBtn').click();

  await page.waitForURL(/\/shop/);
  await expect(page).toHaveURL(/\/shop/);

  const productCard = page.locator('.card').filter({ hasText: 'iphone X' }).first();
  await expect(productCard).toBeVisible();
  await productCard.getByRole('button', { name: 'Add' }).click();

  const checkoutLink = page.locator('a:has-text("Checkout")').first();
  await expect(checkoutLink).toBeVisible();
  await checkoutLink.click();

  await expect(page.locator('body')).toContainText('iphone X');
  await expect(page.locator('body')).toContainText('by Sim cart');
  await expect(page.locator('body')).toContainText('Total');
  await expect(page.locator('body')).toContainText('₹. 100000');
});
