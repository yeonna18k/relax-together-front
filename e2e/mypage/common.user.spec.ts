import { myGatheringsDummyData } from '@/shared/fixture/my-gatherings';
import { dummyUser } from '@/shared/fixture/user';
import test from '@playwright/test';

test.describe('공통', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('*/**/me', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(dummyUser),
      });
    });
    await page.route('*/**/gatherings/joined?page=0&size=10', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(myGatheringsDummyData),
      });
    });
  });
  test('나의 프로필을 확인 할 수 있다.', async ({ page }) => {
    await page.goto('/mypage?subPage=my-gatherings');

    await page.getByRole('heading', { name: '마이 페이지' }).isVisible();
    await page.getByRole('main').getByRole('img', { name: 'user' }).isVisible();
    await page
      .getByRole('heading', { name: '권철진님 안녕하세요!' })
      .isVisible();
    await page.getByText('company.코드잇-퇴사').isVisible();
    await page
      .locator('div')
      .filter({ hasText: /^company\.코드잇-퇴사E-mail\.chkftm12@gmail\.com$/ })
      .first()
      .isVisible();
  });
});
