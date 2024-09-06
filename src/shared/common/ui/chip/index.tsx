// content : 전체 / 오피스 스트레칭 / 마인드풀니스    -> props
// 선택 되었을 때 gray-900 선택 안되었을 때 gray-200  -> props
// sm - 모바일, lg - 태블릿, 모니터  -> 반응형

interface ChipProps {
  selected: boolean;
  content: string;
}

export default function Chip({ selected, content }: ChipProps) {
  return (
    <div
      className={`h-10 p-3 md:p-4 ${selected ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} rounded-xl text-sm font-medium`}
    >
      {content}
    </div>
  );
}
