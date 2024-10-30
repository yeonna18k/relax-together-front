import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '@/shared/fixture/information';
import test from '@playwright/test';

test.describe('모임 상세', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      'http://localhost:3000/api/gatherings/127',
      async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(dummyGatheringsInfo),
        });
      },
    );
    await page.route(
      'http://localhost:3000/api/gatherings/127/participants',
      async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(dummyParticipantList),
        });
      },
    );
    await page.route(
      'http://localhost:3000/api/gatherings/127/join',
      async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ data: '모임에 참여했습니다.' }),
        });
      },
    );
    await page.route(
      'http://localhost:3000/api/gatherings/127/leave',
      async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ data: '모임 참여를 취소 합니다.' }),
        });
      },
    );
  });

  test('모임에 참여, 참여 취소 할 수 있다.', async ({ page }) => {
    await page.goto('http://localhost:3000/gatherings/127');

    await page.getByLabel('참여하기').waitFor({ state: 'visible' });
    await page.getByLabel('참여하기').click();

    await page
      .getByRole('button', { name: '확인' })
      .waitFor({ state: 'visible' });
    await page.getByRole('button', { name: '확인' }).click();

    await page.getByPlaceholder('이메일을 입력해주세요').click();
    await page.getByPlaceholder('이메일을 입력해주세요').fill('test@gmail.com');
    await page.getByPlaceholder('비밀번호를 입력해주세요').click();
    await page.getByPlaceholder('비밀번호를 입력해주세요').fill('123123123');
    await page.getByLabel('로그인').click();

    await page.waitForTimeout(500);

    const joinButton = page.getByLabel('참여하기');
    const cancelButton = page.getByLabel('참여 취소하기');

    if (await joinButton.isVisible()) {
      await joinButton.click();
    } else if (await cancelButton.isVisible()) {
      await cancelButton.click();
    }
  });
});
