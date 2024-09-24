import Link from 'next/link';

type TogglePagePropsMap = {
  signup: {
    span: string;
    href: string;
    link: string;
  };
  signin: {
    span: string;
    href: string;
    link: string;
  };
};

export default function TogglePage({
  page,
}: {
  page: keyof TogglePagePropsMap;
}) {
  const PageMap: TogglePagePropsMap = {
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
  };

  return (
    <div className="flex justify-center gap-1 text-[15px] font-medium">
      <p className="text-gray-800">{PageMap[page].span}</p>
      <Link href={PageMap[page].href} className="text-green-500 underline">
        {PageMap[page].link}
      </Link>
    </div>
  );
}
