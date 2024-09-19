import localFont from 'next/font/local';
const paperlogy = localFont({
  src: '../../../../public/fonts/Paperlogy-8ExtraBold.ttf',
  variable: '--font-paperlogy',
});

export default function BannerText() {
  return (
    <div
      className={`${paperlogy.className} h-[180px] w-[708px] text-center text-[64px] uppercase leading-[140%] tracking-[0.01em] text-[#222222]`}
    >
      <h1>바쁜 일상 속, 잠시 휴식과</h1>
      <h1>따뜻한 모임이 필요할 때.</h1>
    </div>
  );
}
