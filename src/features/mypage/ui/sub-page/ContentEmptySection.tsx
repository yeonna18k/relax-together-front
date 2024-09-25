interface ContentEmptySectionProps {
  description: string;
}
export default function ContentEmptySection({
  description,
}: ContentEmptySectionProps) {
  return (
    <section className="mt-6 flex min-h-[calc(100vh-370px)] w-full items-center justify-center text-sm font-medium text-gray-600 lg:min-h-[calc(100vh-428px)]">
      {description}
    </section>
  );
}
