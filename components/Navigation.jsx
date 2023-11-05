'use client';

export default function Navigation() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 m-8 flex flex-col justify-start text-white lg:flex-row lg:items-end">
      <div className="mt-6 flex grow flex-col justify-start gap-2 text-lg lg:flex-row lg:gap-8">
        <button
          type="button"
          className="text-left"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight + 200, behavior: 'smooth' });
          }}
        >
          about migiui
        </button>
        <a href="mailto:info@migiui.com">info@migiui.com</a>
        <a href="https://www.instagram.com/migiui" target="_blank">
          instagram
        </a>
      </div>
    </div>
  );
}
