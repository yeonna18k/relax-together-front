import { SwitchFiler } from '@/features/gatherings/model/create-gathring';
import { commonSelectItems } from '@/shared/fixture/select-items';
import { useEffect, useState } from 'react';

export default function useSelectLocation(filter?: SwitchFiler) {
  const modalMenuItems = commonSelectItems.filter(item => item.value !== 'ALL');
  const defaultValue = modalMenuItems[0].value;
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return { selectedValue, setSelectedValue, modalMenuItems };
}
