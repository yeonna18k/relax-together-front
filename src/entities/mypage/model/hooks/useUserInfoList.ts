import { User, UserInfoList } from '@/shared/model';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export function useUserInfoList(user?: AxiosResponse<User, any>) {
  const [userInfoList, setUserInfoList] = useState<UserInfoList>([]);

  useEffect(() => {
    if (user) {
      const categoryMap: { [key: string]: string } = {
        email: 'E-mail.',
        companyName: 'company.',
      };
      const filterUserInfoList = Object.entries(user?.data)
        .map(([key, value]) =>
          categoryMap[key] ? { category: categoryMap[key], value } : null,
        )
        .filter(userInfo => userInfo !== null);
      setUserInfoList(
        filterUserInfoList.sort((a, b) => a.category.localeCompare(b.category)),
      );
    }
  }, [user]);

  return userInfoList;
}
