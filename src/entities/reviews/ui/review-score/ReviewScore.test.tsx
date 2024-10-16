import Provider from '@/app/provider';
import { BASE_URL } from '@/shared/lib/constants';
import { server } from '@/shared/mocks/node';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { useSearchParams } from 'next/navigation';
import ReviewScore from './index';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

function renderWithQueryClient() {
  return render(
    <Provider>
      <ReviewScore />
    </Provider>,
  );
}

describe('ReviewScore Component', () => {
  // 테스트 시작전 msw 서버 실행, 각 테스트마다 핸들러 초기화, 모든 테스트 후 msw 서버 종료
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  test('데이터가 없을 때 별점이 0점으로 렌더링된다.', async () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('some-type'), // 필요한 쿼리 파라미터를 반환하도록 설정
    });
    // 핸들러를 초기화하여 빈 데이터 반환
    server.use(
      rest.get(`${BASE_URL}/api/reviews/scores`, (req, res, ctx) => {
        return res(ctx.json({}));
      }),
    );

    renderWithQueryClient();

    // 평균 점수는 0으로 표시
    expect(await screen.findByText('0')).toBeInTheDocument();
  });

  test('데이터를 받아서 점수를 화면에 보여주고 평균을 계산한다.', async () => {
    server.use(
      rest.get(`${BASE_URL}/api/reviews/scores`, (req, res, ctx) => {
        return res(
          ctx.json({
            fivePoints: 79,
            fourPoints: 20,
            threePoints: 10,
            twoPoints: 5,
            onePoints: 1,
          }),
        );
      }),
    );
    renderWithQueryClient();
    // 평균 점수가 잘 계산되었는지 테스트
    expect(await screen.findByText('4.0')).toBeInTheDocument();
    // 각 점수가 화면에 렌더링되는지 테스트
    expect(await screen.findByText('79')).toBeInTheDocument();
    expect(await screen.findByText('20')).toBeInTheDocument();
    expect(await screen.findByText('10')).toBeInTheDocument();
    expect(await screen.findByText('5')).toBeInTheDocument();
    expect(await screen.findByText('1')).toBeInTheDocument();
  });
});
