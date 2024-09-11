interface PlaceTagProps {
  place: string;
  address: string;
}

export default function ReviewPlaceTag({ place, address }: PlaceTagProps) {
  return (
    <div className="flex gap-1 text-xs font-medium">
      <span>{place}</span>
      <span>·</span>
      <span>{address}</span>
    </div>
  );
}
