import BottomFloatingBar from '@/features/bottom-floating-bar/ui';
import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '@/shared/fixture/information';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useParams: () => ({
    id: '1',
  }),
  usePathname: jest.fn(() => '/currentPath'),
  useSearchParams: jest.fn(() => ({
    toString: () => 'param1=value1&param2=value2',
  })),
}));

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQueryClient: () => ({
    invalidateQueries: jest.fn(),
  }),
}));

const queryClient = new QueryClient();

describe('BottomFloatingBar Component', () => {
  test('화면에 렌더링 된다.', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BottomFloatingBar
          id="1"
          isHost={false}
          gatheringsInfo={dummyGatheringsInfo}
          participantList={dummyParticipantList}
        />
      </QueryClientProvider>,
    );

    expect(
      screen.getByText(/더 건강한 나와 팀을 위한 프로그램/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        '국내 최고 웰니스 전문가와 프로그램을 통해 지친 몸과 마음을 회복해봐요',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '참여하기' }),
    ).toBeInTheDocument();
  });

  test('주최자일 경우, 공유 독려 텍스트와 취소/공유하기 버튼이 렌더링 된다.', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BottomFloatingBar
          id="1"
          isHost={true}
          gatheringsInfo={dummyGatheringsInfo}
          participantList={dummyParticipantList}
        />
      </QueryClientProvider>,
    );

    expect(
      screen.getByText(
        '모임을 공유해서 더 많은 사람들이 참여할 수 있도록 독려해봐요',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '취소하기' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '공유하기' }),
    ).toBeInTheDocument();
  });
});
