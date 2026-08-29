import { test, expect } from '@playwright/test';

test('should complete checkout flow after adding iphone X to cart', async ({ page }) => {
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
  await expect(page.locator('body')).toContainText('Total');

  await page.locator('button:has-text("Checkout")').click();

  await expect(page.locator('body')).toContainText('Please choose your delivery location');
  await expect(page.locator('body')).toContainText('I agree with the term & Conditions');
  await expect(page.locator('body')).toContainText('Checkout ( 1 )');

  await page.locator('#country').fill('India');
  await page.locator('label[for="checkbox2"]').click();
  await page.locator('input[type="submit"][value="Purchase"]').click();

  await expect(page.locator('body')).toContainText('Success! Thank you! Your order will be delivered in next few weeks :-).');
});
