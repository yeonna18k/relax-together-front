interface PageTitleProps {
  title: string;
}
export default function PageTitle({ title }: PageTitleProps) {
  return <h2 className="text-2xl font-semibold text-gray-950">{title}</h2>;
}
