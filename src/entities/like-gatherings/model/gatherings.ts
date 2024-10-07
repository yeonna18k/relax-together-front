export type Gathering = {
  id: number;
  type: string;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  imageUrl: string;
  hostUser: number;
};

export type Gatherings = {
  content: Gathering[];
  hasNext: boolean;
  totalElements: number;
};
