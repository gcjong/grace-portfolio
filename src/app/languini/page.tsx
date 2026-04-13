'use client';

import Link from 'next/link';

export default function LanguiniPage() {
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
        <source src="/backgroundforworks.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="font-medium text-base md:text-lg hover:underline">grace jong</Link>
        <div className="flex gap-4 md:gap-6 text-sm md:text-base">
          <Link href="/#work" className="hover:underline">work</Link>
          <Link href="/#about" className="hover:underline">about</Link>
        </div>
      </nav>

      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <Link href="/#work" className="text-[#ece1c9] hover:underline text-sm md:text-base">
          ← back to projects
        </Link>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Video Caption */}
        <p className="text-xs text-[#F7DC6F] mb-4">
          taipei streets in 2025
        </p>
        
        {/* Slide Deck Link */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-4 md:p-6 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <p className="text-[#ece1c9] text-sm md:text-base mb-2">
            don't want to read? here is my slide deck!
          </p>
          <a 
            href="https://docs.google.com/presentation/d/1ylfCRAa6MOMkoX_5SUuG4NacP2hTxCdH29eFf4ZScHI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ece1c9] hover:underline text-sm md:text-base"
          >
            view slide deck →
          </a>
        </div>
        
        {/* Logo Section */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <img 
            src="/App%20Logo%201.png" 
            alt="languini logo" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>

        {/* Title */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            languini project
          </h1>
        </div>

        {/* project overview */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">project overview</h2>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">role</h3>
              <p className="text-[#ece1c9] text-sm md:text-base">
                ui/ux designer, graphic designer
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">timeline</h3>
              <p className="text-[#ece1c9] text-sm md:text-base">
                2023 winter quarter
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">team</h3>
              <p className="text-[#ece1c9] text-sm md:text-base">
                jamie chau, olivia lammertin, owen chen, kiera fong, grace jong, amy fong
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">about</h3>
              <p className="text-[#ece1c9] text-sm md:text-base mb-4">
                to cultivate the bond between students and their cultural identities, our solution is to design a platform promoting the learning of language and culture through an activity rich in both: cooking.
              </p>
              <p className="text-[#ece1c9] text-sm md:text-base">
                welcome to languini, an app that offers interactive fact and language learning lessons tailored to each recipe, ensuring that every cooking session also doubles as a culture learning experience.
              </p>
            </div>
          </div>
        </div>

        {/* key features */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">key features</h2>

          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">01</div>
              <p className="text-[#ece1c9] text-sm md:text-base">
                interactive fact and language learning integrated within the recipe
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">02</div>
              <p className="text-[#ece1c9] text-sm md:text-base">
                a personalized algorithm to help users find recipes that are within their onboarded data
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">03</div>
              <p className="text-[#ece1c9] text-sm md:text-base">
                a sticker-reward system to guarantee that users feel completion
              </p>
            </div>
          </div>
        </div>

        {/* research */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">research</h2>

          <div className="space-y-6 md:space-y-8">
            <div>
              <p className="text-[#ece1c9] text-sm md:text-base mb-4">
                following the surveys, we conducted 10 interviews, uncovering key insights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#ece1c9]">
                <li>people spend 30 mins to 1.5 hours cooking and prefer shorter recipes for busy schedules.</li>
                <li>learning cultural foods and languages strengthens bonds with loved ones.</li>
                <li>pictures and videos improve learning and enhance the user experience.</li>
                <li>users enjoy rewards for completing tasks.</li>
                <li>simpler instructions and concise recipes are preferred.</li>
              </ul>
              <p className="text-[#ece1c9] text-sm md:text-base mt-4">
                these findings guide our app's design, making it engaging, efficient, and rewarding while fostering cultural appreciation.
              </p>
            </div>
          </div>
        </div>

        {/* results */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">results</h2>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-3">key takeaways & reflections</h3>
            <p className="text-[#ece1c9] text-sm md:text-base mb-4">
              throughout this process, i learned that design is never final, there's always room for improvement through continuous iteration. a user-centered approach is essential for creating interactive and engaging experiences, and true innovation thrives in a collaborative environment.
            </p>
            <p className="text-[#ece1c9] text-sm md:text-base mb-4">
              one of the most valuable lessons was the importance of gathering insights from people outside of our team, especially when designing graphics, since fresh perspectives can lead to unexpected and meaningful improvements.
            </p>
            <p className="text-[#ece1c9] text-sm md:text-base mb-4">
              looking back, conducting more extensive research earlier on, such as building user personas, and incorporating additional iterations later in the process would have further refined our design decisions.
            </p>
            <p className="text-[#ece1c9] text-sm md:text-base">
              most importantly, this was the first design portfolio project for many of us, making it an exciting and invaluable learning experience!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 border-t border-zinc-200">
        <p className="text-xs md:text-sm text-[#ece1c9]">
          2026 grace jong
        </p>
      </footer>
    </div>
  );
}
