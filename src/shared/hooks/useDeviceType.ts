'use client';
import { DESKTOP, DeviceType, TABLET } from '@/shared/lib/constants/viewport';
import { ValueOf } from '@/shared/types/utility';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export type DeviceValueType = ValueOf<typeof DeviceType>;

export default function useDeviceType() {
  const { width = 0 } = useWindowSize();

  const [deviceType, setDeviceType] = useState<DeviceValueType>(
    DeviceType.DESKTOP,
  );

  useEffect(() => {
    if (width < TABLET) {
      setDeviceType(DeviceType.MOBILE);
    } else if (width >= TABLET && width < DESKTOP) {
      setDeviceType(DeviceType.TABLET);
    } else {
      setDeviceType(DeviceType.DESKTOP);
    }
  }, [width]);
  return { deviceType };
}
