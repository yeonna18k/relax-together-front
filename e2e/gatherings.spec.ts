import { gatheringsDummyData } from '@/shared/fixture/gatherings';
import test from '@playwright/test';
const { content, hasNext, totalElements } = gatheringsDummyData;
test.describe('모임 찾기', () => {
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

  test('모임 찾기에서 모임 목록 필터를 할 수 있다.', async ({ page }) => {
    await page.route('http://localhost:3000/api/gatherings**', async route => {
      const url = new URL(route.request().url());
      if (
        url.searchParams.get('type') === '달램핏' &&
        url.searchParams.get('location') === '건대입구' &&
        url.searchParams.get('page') === '0' &&
        url.searchParams.get('size') === '10' &&
        url.searchParams.get('sortBy') === 'registrationEnd' &&
        url.searchParams.get('sortOrder') === 'ASC'
      ) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            ...gatheringsDummyData,
            content: content.filter(
              gathering => gathering.location === '건대입구',
            ),
          }),
        });
      } else {
        await route.continue();
      }
    });
    await page.goto('http://localhost:3000');
    await page.getByText('지금 모임에 참여해보세요!').isVisible();
    await page.waitForTimeout(500);
    await page.locator('.border-b-2 > div > a').first().isVisible();
  });
});
