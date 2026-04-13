'use client';

import Link from 'next/link';

export default function KnickKnackPage() {
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
        <Link href="/" className="flex items-center gap-2">
          <img src="/favicon.png" alt="Grace Jong Logo" className="h-12 w-auto" />
          <span className="font-medium text-base md:text-lg">grace jong</span>
        </Link>
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
            href="https://canva.link/jumxdj27bobskye"
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
            src="/kklogo.png" 
            alt="knick knack logo" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>

        {/* Title */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            knick knack
          </h1>
        </div>

        {/* project overview */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">project overview</h2>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">role</h3>
              <p className="text-[#ece1c9] text-sm md:text-base">
                ui/ux designer, product design lead
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">timeline</h3>
              <p className="text-[#ece1c9] text-sm md:text-base">
                2025
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">team</h3>
              <p className="text-[#ece1c9] text-sm md:text-base">
                grace jong, kyle shih, amelia jukita, mukund nair, caden lee
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">about</h3>
              <p className="text-[#ece1c9] text-sm md:text-base">
                a secure, collector-driven online marketplace that empowers collectors to buy, sell, and collect with confidence and passion. a niche marketplace catered towards collectors
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
                users can craft unique profiles to express their identity and build a personal brand around their collection
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">02</div>
              <p className="text-[#ece1c9] text-sm md:text-base">
                a wishlist so collectors can display what they own and what they're looking for, sparking connections with one another
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">03</div>
              <p className="text-[#ece1c9] text-sm md:text-base">
                photo verification and image recognition so that all listings are verified through a one-time code to ensure a trusted marketplace experience. figurines are recognized and auto-filed details ease searchability and save time
              </p>
            </div>
          </div>
        </div>

        {/* results */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">results</h2>

          <div>
            <p className="text-[#ece1c9] text-sm md:text-base">
              won first place for product fellowship 2025
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
