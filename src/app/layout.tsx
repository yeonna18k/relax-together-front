// 카드 컴포넌트
const Card = () => {
  return (
    <div className="relative flex rounded-lg border p-4 shadow-lg">
      {/* 왼쪽 이미지와 뱃지 */}
      <div className="relative w-1/3">
        <img
          src="https://via.placeholder.com/150"
          alt="Card Image"
          className="h-full w-full rounded-lg object-cover"
        />
        <span className="absolute left-2 top-2 rounded bg-yellow-500 px-2 py-1 text-xs text-white">
          NEW
        </span>
      </div>

      {/* 오른쪽 콘텐츠 */}
      <div className="ml-4 flex w-2/3 flex-col justify-between">
        {/* 상단: 제목, 날짜 선택 */}
        <div>
          <h2 className="mb-2 text-xl font-bold">카드 제목</h2>
          <div className="mb-4 flex space-x-2">
            <button className="rounded bg-gray-200 px-3 py-1">
              2024-09-15
            </button>
            <button className="rounded bg-gray-200 px-3 py-1">
              2024-09-16
            </button>
          </div>
        </div>

        {/* 프로그레스 바 */}
        <div className="mb-4">
          <div className="mb-1 flex justify-between">
            <span className="text-sm font-medium">참여 인원</span>
            <span className="text-sm font-medium">75%</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>

        {/* 찜하기 버튼 */}
        <button className="absolute right-2 top-2 text-gray-600">❤️</button>

        {/* Join Now 버튼 */}
        <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Card;
