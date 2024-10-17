import CommonSelect from '@/shared/common/ui/common-select';
import { commonSelectItems } from '@/shared/fixture/select-items';
import { FilterIconType } from '@/shared/lib/constants/ui';
import { render, screen } from '@testing-library/react';

describe('Select Component', () => {
  test('화면에 렌더링이 된다.', () => {
    const handleValueChange = jest.fn();
    const selectedValue = 'ALL';
    render(
      <CommonSelect
        filterIconType={FilterIconType.DEFAULT}
        placeholder="지역 전체"
        menuItems={commonSelectItems}
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
      />,
    );

    const placeholder = screen.getByText('지역 전체');

    expect(placeholder).toBeInTheDocument();
  });
});
