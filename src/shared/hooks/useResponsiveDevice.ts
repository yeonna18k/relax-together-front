import { useWindowSize } from 'usehooks-ts';

export default function useResponsiveDevice() {
  const { width } = useWindowSize();
  const isResponsiveDevice = width === undefined ? false : width < 769;
  return isResponsiveDevice;
}
