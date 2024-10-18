import { Oval } from 'react-loader-spinner';

interface LoadingSpinnerProps {
  width?: string;
  height?: string;
  color?: string;
}
export default function LoadingSpinner({
  width = '20',
  height = '20',
  color = '#0aaf3b',
}: LoadingSpinnerProps) {
  return (
    <Oval
      visible={true}
      height={height}
      width={width}
      color={color}
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass="w-full flex justify-center items-center"
    />
  );
}
