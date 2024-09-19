import CommonSelect from '@/shared/common/ui/common-select';
import DatePicker from '@/shared/common/ui/date-picker';

export default function SearchFilter() {
  return (
    <div className="mt-12 text-black">
      <div className="flex gap-4">
        <CommonSelect
          filterIconType="default"
          placeholder="Select an option"
          menuItems={[{ label: '서울', value: 'seol' }]}
        />
        <DatePicker date={new Date()} setDate={() => {}} />
      </div>
    </div>
  );
}
