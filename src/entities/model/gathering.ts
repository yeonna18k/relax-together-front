export type GatheringType =
  | 'DALLAEMFIT'
  | 'OFFICE_STRETCHING'
  | 'MINDFULNESS'
  | 'WORKATION';
export type GatheringLocation = '건대입구' | '을지로3가' | '신림' | '홍대입구';

export interface Gathering {
  id?: number;
  type?: GatheringType;
  name?: string;
  /** @format date-time */
  dateTime?: string;
  /** @format date-time */
  registrationEnd?: string;
  location?: GatheringLocation;
  participantCount?: number;
  capacity?: number;
  image: string;
  /** @format date-time */
  canceledAt?: string;
}
