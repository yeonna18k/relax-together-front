import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '@/shared/fixture/information';
import { render, screen } from '@testing-library/react';
import Information from '.';

describe('Information Component', () => {
  test('화면에 올바르게 렌더링 된다.', () => {
    render(
      <Information
        gatheringsInfo={dummyGatheringsInfo}
        participantList={dummyParticipantList}
      />,
    );

    expect(screen.getByText('달램핏 오피스 스트레칭')).toBeInTheDocument();
    expect(
      screen.getByText('을지로 3가 서울시 중구 청계천로 100'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('participantCount')).toHaveTextContent('5명');
    expect(screen.getByTestId('capacity')).toHaveTextContent('5명');
  });

  test('참여 유저 목록이 올바르게 렌더링 된다.', () => {
    render(
      <Information
        gatheringsInfo={dummyGatheringsInfo}
        participantList={dummyParticipantList}
      />,
    );

    expect(screen.getAllByAltText('참여 유저 프로필 이미지').length).toBe(4);
    expect(screen.getByText('+1')).toBeInTheDocument();
  });

  test('참여자 수가 5명 이상일 때 OpenBadge(개설확정)가 렌더링 된다.', () => {
    render(
      <Information
        gatheringsInfo={dummyGatheringsInfo}
        participantList={dummyParticipantList}
      />,
    );

    expect(screen.getByText('개설확정')).toBeInTheDocument();
  });

  test('참여자 수가 20명일 때 텍스트 색이 주황색이 된다.', () => {
    const fullgatheringsInfo = {
      ...dummyGatheringsInfo,
      participantCount: 20,
    };

    render(
      <Information
        gatheringsInfo={fullgatheringsInfo}
        participantList={dummyParticipantList}
      />,
    );

    expect(screen.getByTestId('maxCapacity')).toHaveClass('text-orange-400');
  });
});
