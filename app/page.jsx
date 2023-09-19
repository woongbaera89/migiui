import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Image
        className="absolute right-0 top-0 m-8 w-16"
        src="/logo.svg"
        alt="home"
        width={120}
        height={360}
      />
      <div className="absolute bottom-0 left-0 m-8 whitespace-pre-line font-serif text-3xl text-white">{`2023.10\nGrand Open`}</div>
    </main>
  );
}
