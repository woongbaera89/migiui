import Image from 'next/image';

export default function Garden({ params: { name } }) {
  return (
    <div className="relative z-30 flex items-center justify-center bg-white">
      <div>
        <Image
          className="hidden md:block"
          src={`/garden/d/jpeg-optimizer_${name}.jpeg`}
          alt="home"
          width={1238}
          height={1134}
        />
        <Image
          className="block md:hidden"
          src={`/garden/m/jpeg-optimizer_${name}.jpeg`}
          alt="home"
          width={400}
          height={1065}
        />
      </div>
    </div>
  );
}
