import { Device } from '@/shared/lib/constants';
import { useWindowSize } from 'usehooks-ts';

export default function useResponsiveDevice() {
  const { width } = useWindowSize();
  const isResponsiveDevice =
    width === undefined ? false : width < Device.tablet;
  return isResponsiveDevice;
}
