export default function GatheringsDetail() {
  return <div>모임 상세 페이지</div>;
}

export async function generateStaticParams() {
  //TODO:추후 api 연동시에 추가 해줄 것
  // 필요한 id 목록을 가져옵니다 (예: API 호출 또는 데이터베이스)
  // const gatherings = await fetch('https://api.example.com/gatherings');
  // const gatheringsData = await gatherings.json();

  // 각 경로에 대해 params를 리턴합니다

  return [
    {
      id: '1',
    },
  ];
}
