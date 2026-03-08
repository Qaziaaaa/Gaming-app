import { useEffect, useRef } from 'react';

const logos = [
  { name: 'Netflix', svg: (
    <svg viewBox="0 0 120 30" className="h-6 lg:h-8 w-auto">
      <text x="0" y="24" className="fill-black text-2xl font-bold tracking-wider">NETFLIX</text>
    </svg>
  )},
  { name: 'Amazon', svg: (
    <svg viewBox="0 0 100 30" className="h-6 lg:h-8 w-auto">
      <text x="0" y="22" className="fill-black text-xl font-normal">amazon</text>
      <path d="M10 25 Q50 30 90 22" stroke="black" strokeWidth="2" fill="none" />
      <path d="M85 18 L92 22 L85 26" fill="black" />
    </svg>
  )},
  { name: 'Dribbble', svg: (
    <svg viewBox="0 0 100 30" className="h-6 lg:h-8 w-auto">
      <text x="0" y="22" className="fill-black text-xl font-normal italic">dribbble</text>
    </svg>
  )},
  { name: 'Zoom', svg: (
    <svg viewBox="0 0 80 30" className="h-6 lg:h-8 w-auto">
      <text x="0" y="22" className="fill-black text-xl font-bold">zoom</text>
    </svg>
  )},
  { name: 'Notion', svg: (
    <svg viewBox="0 0 100 30" className="h-6 lg:h-8 w-auto">
      <rect x="0" y="5" width="20" height="20" rx="4" fill="none" stroke="black" strokeWidth="2" />
      <text x="8" y="19" className="fill-black text-sm font-bold">N</text>
      <text x="26" y="22" className="fill-black text-xl font-normal">Notion</text>
    </svg>
  )},
  { name: 'HubSpot', svg: (
    <svg viewBox="0 0 100 30" className="h-6 lg:h-8 w-auto">
      <text x="0" y="22" className="fill-black text-xl font-semibold">HubSp<tspan className="fill-none stroke-black stroke-2" style={{fontSize: '14px'}}>o</tspan>t</text>
    </svg>
  )},
];

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div
          ref={scrollRef}
          className="flex gap-12 lg:gap-20 items-center overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
