import localFont from 'next/font/local';

const nanum = localFont({
  src: './nanum.woff2',
});

export default function Home() {
  return (
    <div className={nanum.className}>
      <div className="flex min-h-screen items-end bg-gray-700/90 p-8 text-xs text-white lg:items-start">
        <div className="whitespace-pre-line">
          {`우리는 항상 ‘미지’의 대상을
찾기를 원한다.

‘미지’는
우리의 익숙함 속의 낯선 순간들이나
기억 속에 소외된 조각이나 희미해진 순간들로
우리에게 새로운 자신을 마주할 수 있는
기회를 준다고 믿기 때문이다.

첫 번째 ‘미지’는 ‘자연’이다.

자연은 변하지 않는 본질을 담고 있다.
자연의 본질은 개인의 감정과 시간을 거치며
내면의 위로가 된다.

.
미지의는 자연과 어우러진 
레스토랑, 카페, 갤러리, 아트샵이 함께하는
위로와 영감의 공간입니다.


2003.10
‘미지의’가 시작됩니다.
`}
        </div>
      </div>
    </div>
  );
}
