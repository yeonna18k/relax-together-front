import ReviewCard from '@/features/review-card';

export default function Signup() {
  return (
    <div className="w-[375px] md:w-[744px] lg:w-full">
      <div className="mx-auto flex w-[343px] flex-col bg-white p-4 md:w-[696px] md:gap-6 md:p-6 lg:w-[996px]">
        <div className="bg-red-300 text-black">리뷰페이지 리뷰 부분</div>
        <ReviewCard
          page="reviews"
          score={3}
          user_name="럽윈즈올"
          content="따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요."
          place="달램핏 오피스 스트레칭 이용"
          address="을지로 3가"
          date="2024.01.25"
        />
        <div className="bg-red-300 text-black">마이페이지 리뷰 부분</div>
        <ReviewCard
          page="mypage"
          score={5}
          user_name="럽윈즈올"
          content="두번째 이용이에요! 만족합니다."
          place="달램핏 오피스 스트레칭 이용"
          address="을지로 3가"
          date="2024.01.25"
        />
        <div className="bg-red-300 text-black">모임 상세페이지 리뷰 부분</div>
        <ReviewCard
          page="search"
          score={2}
          user_name="럽윈즈올"
          content="따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요."
          place="달램핏 오피스 스트레칭 이용"
          address="을지로 3가"
          date="2024.01.25"
        />
        <ReviewCard
          page="search"
          score={3}
          user_name="동글동글이"
          content="두번째 이용이에요! 만족합니다."
          place="달램핏 오피스 스트레칭 이용"
          address="을지로 3가"
          date="2024.01.25"
        />{' '}
        <ReviewCard
          page="search"
          score={4}
          user_name="모닝러너"
          content="강사분도 친절하시고 ~ ^^ 너무 좋은 공간에서 긴장과 스트레스 모두 잘 풀고 가요 ~ ^^"
          place="달램핏 오피스 스트레칭 이용"
          address="을지로 3가"
          date="2024.01.25"
        />
      </div>
    </div>
  );
}
