import { myWrittenReviewsDummyData } from '@/shared/fixture/my-written-reviews';

export default function ReviewList() {
  const reviews = myWrittenReviewsDummyData.content;
  console.log(myWrittenReviewsDummyData);
  return <div>ReviewList</div>;
}
