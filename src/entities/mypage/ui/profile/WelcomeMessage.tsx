interface WelcomeMessageProps {
  name: string;
}
export default function WelcomeMessage({ name }: WelcomeMessageProps) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 md:text-2xl">
      {name}님 안녕하세요!
    </h3>
  );
}
