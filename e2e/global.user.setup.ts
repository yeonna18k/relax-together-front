import { dummyAccessToken, dummyUser } from '@/shared/fixture/user';
import { expect, test as setup } from '@playwright/test';
import { USER_STORAGE_STATE } from '../playwright.config';

setup('사용자 로그인', async ({ page }) => {
  await page.route('*/**/login', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(dummyAccessToken),
    });
  });
  await page.route('*/**/me', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(dummyUser),
    });
  });
  await page.goto('/signin');
  await page.getByPlaceholder('이메일을 입력해주세요').click();
  await page
    .getByPlaceholder('이메일을 입력해주세요')
    .fill('chkftm12@gmail.com');
  await page.getByPlaceholder('비밀번호를 입력해주세요').click();
  await page
    .getByPlaceholder('비밀번호를 입력해주세요')
    .fill(`${process.env.NEXT_PUBLIC_USER_PASSWORD!}`);
  await page.getByLabel('로그인').click();

  await page.waitForURL('/gatherings?subPage=dalaemfit&filter=all');
  await expect(
    page.getByRole('button', { name: 'user 권철진님' }),
  ).toBeVisible();
  await expect(
    page.getByText(
      '바쁜 일상 속, 잠시 휴식과따뜻한 모임이 필요할 때.달램핏워케이션',
    ),
  ).toBeVisible();

  await page.context().storageState({ path: USER_STORAGE_STATE });
});
