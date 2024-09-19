interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return <main className="w-full bg-gray-50">{children}</main>;
}
