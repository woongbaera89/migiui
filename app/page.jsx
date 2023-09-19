import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-center">
      <Image
        className="absolute right-0 top-0 w-16 m-8"
        src="/logo.svg"
        alt="home"
        width={120}
        height={360}
      />
      <div className="absolute left-0 bottom-0 font-serif text-3xl m-8 text-white whitespace-pre-line">{`2023.10\nGrand Open`}</div>
    </main>
  );
}
