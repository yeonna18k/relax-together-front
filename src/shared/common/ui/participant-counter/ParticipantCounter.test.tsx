import ParticipantCounter from '@/shared/common/ui/participant-counter';
import { render, screen } from '@testing-library/react';

describe('ParticipantCounter Component', () => {
  test('화면에 렌더링 된다.', () => {
    const { debug } = render(
      <ParticipantCounter
        participantCount={0}
        iconColor="fill-gray-700"
        valueColor="text-gray-700"
      />,
    );

    const personIcon = screen.getByTestId('person-icon');
    const participantCount = screen.getByText('0/20');

    expect(personIcon).toBeInTheDocument();
    expect(participantCount).toBeInTheDocument();
  });
});
