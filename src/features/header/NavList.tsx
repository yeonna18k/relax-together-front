import TopTap from '@/features/header/top-tap';

type Nav = {
  path: string;
  name: string;
};
export const navList: Array<Nav> = [
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
    <ul className="flex flex-col gap-5 lg:flex-row lg:items-center">
      {navList.map(nav => (
        <li key={nav.path}>
          <TopTap
            path={nav.path}
            name={nav.name}
            className="flex items-center gap-[5px]"
          />
        </li>
      ))}
    </ul>
  );
}
