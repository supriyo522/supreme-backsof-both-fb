'use client';

export default function MainContainer() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/automotive.224e7418884105595114.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-2">Driven by performance</p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-thin">
          <span>
            Soft trims and <span className="text-blue-400 font-semibold">NVH solutions</span>
          </span>
        </p>
      </div>
    </div>
  );
}
