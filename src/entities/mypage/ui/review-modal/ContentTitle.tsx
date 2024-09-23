interface ContentTileProps {
  title: string;
}
export default function ContentTitle({ title }: ContentTileProps) {
  return <h3 className="font-semibold text-gray-800">{title}</h3>;
}
