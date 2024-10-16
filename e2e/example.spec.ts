import { test } from '@playwright/test';

test('has title', async ({ page }) => {
  // await page.route(
  //   '*/**/gatherings?type=달램핏&page=0&size=10&sortBy=registrationEnd&sortOrder=ASC',
  //   async route => {
  //     await route.fulfill({
  //       status: 200,
  //       contentType: 'application/json',
  //       body: JSON.stringify(gatheringsDummyData),
  //     });
  //   },
  // );
  // await page.goto('http://localhost:3000');
  // await page.getByRole('img', { name: '로고 이미지' }).click();
});

test('get started link', async ({ page }) => {
  // await page.goto('http://localhost:3000');
});
