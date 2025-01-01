import Image from 'next/image';

export default function AuthImage() {
  return (
    <div className="flex justify-center">
      <Image
        src="https://wfftvdtsykljejnuzibc.supabase.co/storage/v1/object/public/relax-together/auth-left-image-600-400.png"
        alt="Auth image"
        width={600}
        height={400}
        priority
        className="h-[188px] w-[290px] md:h-[270px] md:w-[410px] lg:h-[400px] lg:w-[600px]"
      />
    </div>
  );
}
