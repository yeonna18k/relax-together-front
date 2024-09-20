import UserInfoText, {
  UserInfoTextProps,
} from '@/entities/mypage/ui/profile/UserInfoText';
import WelcomeMessage from '@/entities/mypage/ui/profile/WelcomeMessage';

interface UserInfoContainerProps {
  name: string;
  userInfo: Array<UserInfoTextProps>;
}
export default function UserInfoContainer({
  name,
  userInfo,
}: UserInfoContainerProps) {
  return (
    <div className="flex h-full w-full flex-col justify-center md:flex-row md:items-center md:justify-between">
      <WelcomeMessage name={name} />
      <div className="flex w-full flex-col items-start md:w-[calc(100%-221px)] md:items-center">
        <div className="w-full md:w-[200px] md:min-w-[200px]">
          {userInfo.map(info => (
            <UserInfoText
              key={info.category}
              category={info.category}
              value={info.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
