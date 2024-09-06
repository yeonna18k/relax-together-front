import SelectBox from '@/shared/common/ui/select/index';
import { selectBoxMenuItems } from '@/shared/fixture/selectbox-menu-items';

import CommonButton from '@/shared/common/ui/CommonButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-5 p-24">
      {/* 각자 만든 컴포넌트 불러오기 */}
      {/* <ExampleComponent />  */}
      <SelectBox
        placeholder="장소를 선택해주세요"
        menuItems={selectBoxMenuItems}
      />
      <CommonButton variant="outlined" size="lg" content="생성하기" />
    </main>
  );
}
