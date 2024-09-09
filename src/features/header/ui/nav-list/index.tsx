import TopTap from '@/features/header/ui/top-tap';

type Nav = {
  path: string;
  name: string;
};
const navList: Array<Nav> = [
  {
    path: '/gatherings',
    name: '모임 찾기',
  },
  {
    path: '/like-gatherings',
    name: '찜한 모임',
  },
  {
    path: '/reviews',
    name: '모든 리뷰',
  },
];

export default function NavList() {
  return (
    <ul className="flex flex-col gap-6 md:flex-row md:items-center">
      {navList.map(nav => (
        <TopTap
          key={nav.path}
          path={nav.path}
          name={nav.name}
          className="flex items-center gap-[5px]"
        />
      ))}
    </ul>
  );
}
