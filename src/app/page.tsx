import CommonButton from '@/shared/common/ui/CommonButton';
import CommonInput from '@/shared/common/ui/commoninput';

import InputText from '@/shared/common/ui/InputText';
import SelectBox from '@/shared/common/ui/select/index';
import { selectBoxMenuItems } from '@/shared/fixture/selectbox-menu-items';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24">
      <SelectBox
        placeholder="장소를 선택해주세요"
        menuItems={selectBoxMenuItems}
      />
      <CommonButton
        variant="outlined"
        size="lg"
        content="생성하기"
        onClickHandler={() => console.log('click')}
      />
      <InputText placeholder="내용을 입력해주세요" />
      <CommonInput />
    </div>
  );
}
