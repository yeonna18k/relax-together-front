interface PageTitleProps {
  title: string;
}
export default function PageTitle({ title }: PageTitleProps) {
  return (
    <h2 className="text-lg font-semibold text-gray-950 md:text-2xl">{title}</h2>
  );
}
