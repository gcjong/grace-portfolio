'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const sparkleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sparkleContainerRef.current;
    if (!container) return;

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div');
      sparkle.style.position = 'fixed';
      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';
      sparkle.style.width = '8px';
      sparkle.style.height = '8px';
      sparkle.style.borderRadius = '50%';
      sparkle.style.background = 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #FFFFFF 100%)';
      sparkle.style.boxShadow = '0 0 10px rgba(192, 192, 192, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '9999';
      sparkle.style.animation = 'sparkle 1s ease-out forwards';
      
      container.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.7) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen text-[#ece1c9] relative leading-relaxed font-eb-garamond">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -20, opacity: 0.95 }}
              >
        <source src="/backgroundpart2real.mp4" type="video/mp4" />
      </video>
      
      {/* Sparkle Container */}
      <div ref={sparkleContainerRef}></div>
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 flex justify-between items-center sticky top-0 z-50">
        <a href="#" className="flex items-center gap-2">
          <img src="/favicon.png" alt="Grace Jong Logo" className="h-12 w-auto" />
          <span className="font-medium text-base md:text-lg">grace jong</span>
        </a>
        <div className="flex gap-4 md:gap-6 text-sm md:text-base">
          <a href="#work" className="hover:underline">work</a>
          <a href="#about" className="hover:underline">about</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Video Caption */}
        <p className="text-xs text-[#F7DC6F] mb-4">
          a short video i took leaving big bear in 2024
        </p>
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.05] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            grace jong
          </h1>
          <p className="text-xl md:text-2xl text-[#ece1c9] mb-3 md:mb-4">
            software engineering student at uc irvine, interested in ui/ux design.
          </p>
          <p className="text-lg md:text-xl text-[#ece1c9] mb-6 md:mb-8">
            building digital experiences at the intersection of engineering and design or just trying my best
          </p>
          <p className="text-lg md:text-xl text-[#ece1c9] mb-8 md:mb-12">
            welcome to my digital archive of works
          </p>
        </div>
      </main>

      {/* Work Section */}
      <section id="work" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">work</h2>
          
          <div className="flex gap-8">
            {/* Projects */}
            <div className="flex-1 space-y-8 md:space-y-12">
              <div>
                <Link href="/knick-knack" className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="/kklogo.png" alt="Knick Knack Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-lg md:text-xl font-medium mb-2 hover:underline cursor-pointer">
                    knick knack
                  </span>
                </Link>
                <p className="text-[#ece1c9] mb-2 text-base md:text-lg">
                  an online marketplace that empowers collectors to buy, sell, and collect with confidence and passion
                </p>
                <p className="text-sm md:text-base text-[#ece1c9]">
                  figma, ui/ux design, graphic design, product design, prototyping, development
                </p>
              </div>

              <div>
                <Link href="/zotbins" className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="/zotbins.png" alt="Zotbins Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-lg md:text-xl font-medium mb-2 hover:underline cursor-pointer">
                    zotbins
                  </span>
                </Link>
                <p className="text-[#ece1c9] mb-2 text-base md:text-lg">
                  a waste-management ios app
                </p>
                <p className="text-sm md:text-base text-[#ece1c9]">
                  figma, ui/ux design, graphic design, user research, usability testing
                </p>
              </div>

              <div>
                <Link href="/languini" className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="/app-logo-1.png" alt="Languini Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-lg md:text-xl font-medium mb-2 hover:underline cursor-pointer">
                    languini
                  </span>
                </Link>
                <p className="text-[#ece1c9] mb-2 text-base md:text-lg">
                  an app that offers interactive fact and language learning lessons tailored to each recipe
                </p>
                <p className="text-sm md:text-base text-[#ece1c9]">
                  figma, ui/ux design, graphic design
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="hidden md:block w-48 border-l border-zinc-300 pl-6">
              <h3 className="text-lg md:text-xl font-medium mb-6 md:mb-8">timeline</h3>
              <div className="space-y-8 md:space-y-12">
                <div>
                  <p className="text-sm md:text-base text-[#ece1c9] font-bold">2025</p>
                  <p className="text-xs md:text-sm text-[#ece1c9]">knick knack</p>
                </div>
                <div>
                  <p className="text-sm md:text-base text-[#ece1c9] font-bold">2024-2025</p>
                  <p className="text-xs md:text-sm text-[#ece1c9]">zotbins</p>
                </div>
                <div>
                  <p className="text-sm md:text-base text-[#ece1c9] font-bold">2024</p>
                  <p className="text-xs md:text-sm text-[#ece1c9]">languini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">about</h2>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Photo Area */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden bg-white/[0.05] aspect-square flex items-center justify-center">
                <img src="/profile.png" alt="Grace Jong" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 space-y-4 md:space-y-6">
              <p className="text-[#ece1c9] text-base md:text-lg">
                when i'm not coding or designing, you'll find me painting, recording random video diaries, and continuing my fame on spotify.
              </p>
              <div>
                <p className="text-[#ece1c9] text-base md:text-lg mb-2">
                  things i can talk about for hours:
                </p>
                <ul className="text-[#ece1c9] text-base md:text-lg space-y-1 ml-4">
                  <li>noah kahan</li>
                  <li>the film wolf children</li>
                  <li>the lyrics of 500 miles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">skills</h3>
            <div className="flex flex-wrap gap-2 text-sm md:text-base">
              <span className="text-[#ece1c9]">figma</span>
              <span className="text-[#ece1c9]">•</span>
              <span className="text-[#ece1c9]">react</span>
              <span className="text-[#ece1c9]">•</span>
              <span className="text-[#ece1c9]">next.js</span>
              <span className="text-[#ece1c9]">•</span>
              <span className="text-[#ece1c9]">typescript</span>
              <span className="text-[#ece1c9]">•</span>
              <span className="text-[#ece1c9]">tailwind css</span>
              <span className="text-[#ece1c9]">•</span>
              <span className="text-[#ece1c9]">user research</span>
              <span className="text-[#ece1c9]">•</span>
              <span className="text-[#ece1c9]">prototyping</span>
              <span className="text-[#ece1c9]">•</span>
              <span className="text-[#ece1c9]">talking</span>
              <span className="text-[#ece1c9]">•</span>
              <span className="text-[#ece1c9]">picking out good edits from bad edits</span>
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">external</h2>
          
          <ul className="space-y-2">
            <li>
              <a href="https://www.linkedin.com/in/gracejong/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm md:text-base">
                linkedin
              </a>
            </li>
            <li>
              <a href="mailto:gracejong1996@gmail.com" className="hover:underline text-sm md:text-base">
                email
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 border-t border-zinc-200">
        <p className="text-xs md:text-sm text-[#ece1c9]">
          2026 grace jong
        </p>
      </footer>
    </div>
  );
}
