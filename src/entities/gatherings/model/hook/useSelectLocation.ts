import { SwitchFiler } from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringSwitchButtonGroup';
import { commonSelectItems } from '@/shared/fixture/select-items';
import { useEffect, useState } from 'react';

export default function useSelectLocation(filter?: SwitchFiler) {
  const modalMenuItems = commonSelectItems.filter(item => item.value !== 'ALL');
  const defaultValue = modalMenuItems[0].value;
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [filter]);

  return { selectedValue, setSelectedValue, modalMenuItems };
}
