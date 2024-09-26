import { render, screen } from '@testing-library/react';
import React from 'react';
import SliderButtonWithIcon from './index';

const MockIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <svg
    data-testid="mock-icon"
    fill={isActive ? 'active-color' : 'inactive-color'}
  />
);

describe('SliderButtonWithIcon', () => {
  test('컴포넌트가 올바르게 렌더링된다', () => {
    render(
      <SliderButtonWithIcon
        label="테스트 버튼"
        isActive={true}
        onClick={() => {}}
        IconComponent={MockIcon}
      />,
    );

    expect(screen.getByText('테스트 버튼')).toBeInTheDocument();
  });
});
