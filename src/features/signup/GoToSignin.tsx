import Link from 'next/link';

export default function GoToSignin() {
  return (
    <div className="flex justify-center gap-1 font-medium">
      <p className="text-gray-800">이미 회원이신가요?</p>
      <Link href="/signin" className="text-green-500 underline">
        로그인
      </Link>
    </div>
  );
}
