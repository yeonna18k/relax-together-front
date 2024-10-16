import { test } from '@playwright/test';

test.describe('회원가입', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      'http://localhost:3000/api/auths/signup',
      async route => {},
    );
    await page.goto('http://localhost:3000/signup');
  });

  test('회원가입을 할 때 이메일 인증을 받을 수 있다', async ({ page }) => {
    await page.getByPlaceholder('이메일을 입력해주세요').click();
    await page.getByPlaceholder('이메일을 입력해주세요').fill('e2e@test.com');
    await page.route(
      'http://localhost:3000/api/auths/check-email',
      async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
      },
    );
    await page.route('http://localhost:3000/api/email/signup', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });
    await Promise.all([
      page.waitForResponse('http://localhost:3000/api/auths/check-email'),
      page.waitForResponse('http://localhost:3000/api/email/signup'),
      page.getByRole('button', { name: '인증하기' }).click(),
    ]);
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('000000');
    await page.route('http://localhost:3000/api/verify-code', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: 'success' }),
      });
    });
    await Promise.all([
      page.waitForResponse('http://localhost:3000/api/verify-code'),
      page.getByRole('button', { name: '확인' }).click(),
    ]);
    await page.getByPlaceholder('이름을 입력해주세요').click();
    await page.getByPlaceholder('이름을 입력해주세요').fill('e2e');
    await page.getByPlaceholder('회사명을 입력해주세요').click();
    await page.getByPlaceholder('회사명을 입력해주세요').fill('playwright');
    await page.getByLabel('비밀번호', { exact: true }).click();
    await page.getByLabel('비밀번호', { exact: true }).fill('test1234');
    await page.getByLabel('비밀번호 확인').click();
    await page.getByLabel('비밀번호 확인').fill('test1234');

    await page.route('http://localhost:3000/api/auths/signup', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });
    // await Promise.all([
    //   page.waitForResponse('http://localhost:3000/api/auths/signup'),
    // page.getByRole('button', { name: '확인' }).click(),
    // ]);
  });
});
