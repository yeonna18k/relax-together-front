import Image from 'next/image';

export default function AuthImage() {
  return (
    <div className="flex justify-center">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/relax-together.appspot.com/o/images%2Fauth-img.svg?alt=media&token=ce608fd0-2caf-4999-969e-ec0dcfc6b4df"
        alt="Auth image"
        width={600}
        height={400}
        priority
        className="h-[188px] w-[290px] md:h-[270px] md:w-[410px] lg:h-[400px] lg:w-[600px]"
      />
    </div>
  );
}
