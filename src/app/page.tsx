import SelectBox from '@/shared/common/ui/select/index';
import { selectBoxMenuItems } from '@/shared/fixture/selectbox-menu-items';

import CommonButton from '@/shared/common/ui/CommonButton';
import InputText from '@/shared/common/ui/InputText';
import CommonBadge from '@/shared/common/ui/badge';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24">
      <CommonBadge count={10} />
      <CommonBadge count={1000} />
      <SelectBox
        placeholder="장소를 선택해주세요"
        menuItems={selectBoxMenuItems}
      />
      <CommonButton variant="outlined" size="lg" content="생성하기" />
      <InputText placeholder="내용을 입력해주세요" />
    </div>
  );
}
