export type GatheringType =
  | '달램핏'
  | '오피스 스트레칭'
  | '마인드풀니스'
  | '워케이션';
export type GatheringLocation = '건대입구' | '을지로3가' | '신림' | '홍대입구';

export interface Gathering {
  id: number;
  type: GatheringType;
  name: string | null;
  dateTime: string;
  registrationEnd: string;
  location: GatheringLocation;
  participantCount: number;
  capacity: number;
  imageUrl: string;
  hostUser: number;
  ended: boolean;
}
