import { gatheringsDetailApiService } from '@/entities/gatherings-detail/api/service/GatheringsDetailApiService';
import type { Metadata } from 'next';
import { GatheringsDetail } from './page';

export async function generateMetadata({
  params,
}: GatheringsDetail): Promise<Metadata> {
  const { id } = params;

  const gatheringDetail =
    await gatheringsDetailApiService.getGatheringsInfo(id);

  const title =
    gatheringDetail.type !== '워케이션'
      ? `달램핏 ${gatheringDetail.type} | 같이 달램`
      : `${gatheringDetail.type} ${gatheringDetail.name} | 같이 달램`;

  const image = {
    url: gatheringDetail.imageUrl,
    width: 1200,
    height: 630,
    alt: '모임 콘텐츠 이미지',
  };

  return {
    title,
    description:
      '모임 상세 페이지에서 해당 모임의 정보와 사용자 리뷰를 확인하고, 모임에 참여해보세요. 주최자일 경우 모임 취소와 공유하기가 가능합니다.',
    openGraph: {
      title,
      images: gatheringDetail.imageUrl ? [image] : [],
    },
    twitter: {
      title,
      images: gatheringDetail.imageUrl ? [image] : [],
    },
  };
}

export default function GatheringsDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
