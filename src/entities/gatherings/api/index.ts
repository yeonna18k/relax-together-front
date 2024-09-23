interface Gathering {
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
}

interface GatheringsResponse {
  content: Gathering[];
  hasNext: boolean;
  totalElements: number;
}

export const fetchGatherings = async (): Promise<GatheringsResponse> => {
  try {
    const response = await fetch(
      'https://dev.relax-together.shop/api/gatherings',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch gatherings');
    }

    const data: GatheringsResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching gatherings:', error);
    throw error;
  }
};

export const fetchMockedGatherings = async (): Promise<GatheringsResponse> => {
  return {
    content: [
      {
        id: 1,
        type: '오피스 스트레칭',
        name: '스트레칭 모임',
        dateTime: '2024-09-25T10:00:00',
        registrationEnd: '2024-09-20T23:59:59',
        location: '건대입구',
        participantCount: 2,
        capacity: 10,
        imageUrl: 'office_stretching_image.jpg',
        hostUser: 1,
      },
      {
        id: 2,
        type: '마인드풀니스',
        name: '명상 모임',
        dateTime: '2024-10-01T14:00:00',
        registrationEnd: '2024-09-28T23:59:59',
        location: '홍대입구',
        participantCount: 1,
        capacity: 20,
        imageUrl: 'mindfulness_image.jpg',
        hostUser: 1,
      },
    ],
    hasNext: false,
    totalElements: 2,
  };
};
