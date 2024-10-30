import { gatheringsDummyData } from '@/shared/fixture/gatherings';
import test from '@playwright/test';

test.describe('찜한 모임', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('http://localhost:3000/api/gatherings**', async route => {
      const url = new URL(route.request().url());
      if (
        url.searchParams.get('type') === '달램핏' &&
        url.searchParams.get('page') === '0' &&
        url.searchParams.get('size') === '10' &&
        url.searchParams.get('sortBy') === 'registrationEnd' &&
        url.searchParams.get('sortOrder') === 'ASC'
      ) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(gatheringsDummyData),
        });
      } else {
        await route.continue();
      }
    });
  });

  test('찜한 모임에서 찜한 모임 목록을 확인 할 수 있다.', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('.flex > div > .inline-flex').first().click();
    await page.getByLabel('/like-gatherings로 이동').click();
    await page.waitForTimeout(1000);
  });
});
