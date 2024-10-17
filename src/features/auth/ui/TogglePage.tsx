import { TogglePageType } from '@/shared/lib/constants';
import { ValueOf } from '@/shared/types/utility';
import Link from 'next/link';

type TogglePageValue = {
  span: string;
  href: string;
  link: string;
};

type TogglePageKey = ValueOf<typeof TogglePageType>;

export default function TogglePage({ page }: { page: TogglePageKey }) {
  const PageMap: Record<TogglePageKey, TogglePageValue> = {
    signup: {
      span: '이미 회원이신가요?',
      href: '/signin',
      link: '로그인',
    },
    signin: {
      span: '같이 달램이 처음이신가요?',
      href: '/signup',
      link: '회원가입',
    },
    forgotPassword: {
      span: '같이 달램이 처음이신가요?',
      href: '/signup',
      link: '회원가입',
    },
  };

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <p className="text-gray-800">{PageMap[page].span}</p>
      <Link
        href={PageMap[page].href}
        className="text-green-500 underline"
        aria-label={PageMap[page].link}
      >
        {PageMap[page].link}
      </Link>
    </div>
  );
}
