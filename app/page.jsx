import localFont from 'next/font/local';

const nanum = localFont({
  src: './nanum.otf',
});

export default function Home() {
  return (
    <div className={nanum.className}>
      <div className="flex min-h-screen w-full flex-col items-start justify-between bg-gray-700/90 p-8 text-white">
        <div className="whitespace-pre-line text-sm">
          {`아직 읽지 못한 책
들어보지 못한 음악
처음 만나는 작품
맛보지 않은 음식
가보지 않은 정원

그리고
돌, 나무, 물이 있는 곳
미지의`}
        </div>
        <div className="flex flex-col justify-between gap-8 lg:w-full lg:flex-row lg:items-end lg:gap-4">
          <div className="whitespace-pre-line text-sm">
            {`미지의는 자연과 어우러진 
라운지,  카페, 갤러리, 아트샵이 함께하는 공간입니다. 

자연과 내면의 이야기를 담은 10개의 정원,
정원을 재해석한 15명의 작가 작품,
공간을 감싸는 낯설지만 익숙한 소리와 향
그리고 처음 경험하는 음식들

미지의 시간과 공간안에서 
조용히 자신을 마주하는 시간이 되시길 바랍니다.`}
          </div>
          <div className="text-xs">
            미지의
            <br />
            울산 울주군 상북면 송락골길 130
            <br />
            052 264 2501~2
          </div>
          <div className="text-xs">
            1층 카페<span className="hidden lg:inline"> · </span>
            <br className="block lg:hidden" />
            월-금 10:30-21:00, 토-일 10:00-21:00
            <br />
            2층 라운지<span className="hidden lg:inline"> · </span>
            <br className="block lg:hidden" />
            11:00-13:00, 13:30-15:30, 16:00-18:00, 18:30-20:30
            <br />
            아트샵<span className="hidden lg:inline"> · </span>
            <br className="block lg:hidden" />
            월-금 10:00-21:00, 토-일 9:30-21:00
          </div>
        </div>
      </div>
    </div>
  );
}
