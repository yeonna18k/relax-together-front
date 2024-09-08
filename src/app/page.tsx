import CommonButton from '@/shared/common/ui/common-button';
import InputText from '@/shared/common/ui/InputText';
import CommonBadge from '@/shared/common/ui/badge';
import CommonInput from '@/shared/common/ui/common-input';
import SelectBox from '@/shared/common/ui/select/index';
import TagClock from '@/shared/common/ui/tag-clock';
import { selectBoxMenuItems } from '@/shared/fixture/selectbox-menu-items';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24">
      <CommonBadge count={10} />
      <CommonBadge count={1000} />
      <SelectBox
        placeholder="장소를 선택해주세요"
        menuItems={selectBoxMenuItems}
      />
      <CommonButton
        variant="outlined"
        size="lg"
        onClick={() => console.log('click')}
      >
        생성하기
      </CommonButton>
      <InputText placeholder="내용을 입력해주세요" />
      <CommonInput />
      <TagClock message="오늘 21시 마감" variant="default" />
    </div>
  );
}
