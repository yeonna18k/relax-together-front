import { Control } from 'react-hook-form';
import { z } from 'zod';

export const createGatheringSchema = z.object({
  name: z.string().nullable().optional(),
  location: z.union([
    z.literal('건대입구'),
    z.literal('을지로3가'),
    z.literal('신림'),
    z.literal('홍대입구'),
  ]),
  imageUrl: z.string().optional(),
  type: z.union([
    z.literal('오피스 스트레칭'),
    z.literal('마인드풀니스'),
    z.literal('워케이션'),
    z.literal('달램핏'),
  ]),
  dateTime: z.string(),
  registrationEnd: z.string(),
  capacity: z.number().gte(5),
});

export type CreateGathering = z.infer<typeof createGatheringSchema>;

export interface CreateGatheringCommonProps {
  control: Control<CreateGathering>;
  selectedFilter?: SwitchFiler;
}

export type SwitchFiler = '달램핏' | '워케이션';
