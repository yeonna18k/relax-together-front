'use client';

import useAdditionalParams from '@/features/gatherings/model/hook/useAdditionalParams';
import ReviewHearts from '@/shared/common/ui/review-card/ReviewHearts';
import { Progress } from '@/shared/ui/progress';
import { useReviewScoreQuery } from '../../api/queries/reviews';

export default function ReviewScore() {
  const { additionalParams } = useAdditionalParams();
  const { type } = additionalParams;
  const { data } = useReviewScoreQuery({ type });

  const scoreArray = data ? Object.values(data) : [];
  const scoreCount = scoreArray.reduce((sum, count) => sum + count, 0);
  const scoreAverage = Math.floor(
    scoreArray.reduce((sum, count, index) => {
      return sum + count * (scoreArray.length - index);
    }, 0) / scoreCount,
  );
  return (
    <div className="mt-2.5 flex h-[184px] w-full justify-center border-y-2 border-y-gray-200 bg-white py-8 md:mt-5 lg:mt-6">
      <div className="flex w-[294px] justify-between gap-6 md:w-[550px] md:gap-[120px] lg:w-[610px] lg:gap-[180px]">
        <div className="flex w-[128px] flex-col items-center justify-center gap-2">
          <div className="flex gap-0.5 text-xl font-semibold md:text-2xl">
            <span className="text-gray-900">
              {Number.isNaN(scoreAverage) ? '0' : scoreAverage.toFixed(1)}
            </span>
            <span className="text-gray-400">/5</span>
          </div>
          <div className="flex gap-0.5 text-xl font-semibold">
            <ReviewHearts score={scoreAverage} />
          </div>
        </div>
        <div className="flex w-[146px] flex-col gap-1 md:w-[302px]">
          {scoreArray.map((score, index) => {
            return (
              <div
                key={`${5 - index}-star-rating`}
                className="flex gap-3 text-sm font-medium"
              >
                <div className="flex w-[117px] items-center justify-between gap-3 md:w-[273px]">
                  <span className="whitespace-nowrap text-gray-700">
                    {scoreArray.length - index}점
                  </span>
                  <Progress
                    capacity={Number.isNaN(scoreAverage) ? 100 : scoreCount}
                    reviews={true}
                    value={score}
                    className="w-full bg-gray-200"
                  />
                </div>
                <span className="text-gray-400">{score}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
