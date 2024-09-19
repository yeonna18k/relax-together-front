import Image from 'next/image';

export default function GatheringCreate() {
  return (
    <div>
      <div className="flex h-[92px] w-[282px] items-center justify-center gap-2 rounded-full bg-[#FF3D61] text-[32px] font-semibold text-white">
        <div>모임 만들기</div>
        <div>
          <Image
            src="/assets/red-logo.svg"
            alt="arrow-right"
            width={36}
            height={36}
          />
        </div>
      </div>
    </div>
  );
}
