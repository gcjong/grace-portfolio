'use client';

import Link from 'next/link';

export default function KithPage() {
  return (
    <div className="min-h-screen text-[#ece1c9] relative leading-relaxed font-eb-garamond">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -20, opacity: 0.85 }}
      >
        <source src="/newkith.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

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
          video we took after out first round of presentations during the design-a-thon
        </p>
        
        {/* Case Study Link */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-4 md:p-6 bg-white/[0.1] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <p className="text-[#ece1c9] text-sm md:text-base mb-2">
            interested in more? here is my case study!
          </p>
          <a 
            href="https://www.figma.com/deck/FuU4bQl96AzsZz3GbEHv4s/KITH-Pitch-Deck?node-id=293-261&t=LDsrQ4x2rBp3Owx4-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ece1c9] hover:underline text-sm md:text-base"
          >
            view case study →
          </a>
        </div>
        
        {/* Logo Section */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <img 
            src="/kithlogo.png" 
            alt="kith logo" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>

        {/* Title */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.1] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            kith
          </h1>
        </div>

        {/* project overview */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.1] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
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
                2026, 3 days
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">team</h3>
              <p className="text-[#ece1c9] text-sm md:text-base">
                grace jong, maiella nuqui, jessica jahja, reyna phan
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">about</h3>
              <p className="text-[#ece1c9] text-sm md:text-base mb-4">
                as life gets busier and distances grow, the rituals that once kept us close — sharing a meal, dropping by unannounced — quietly disappear. we get swept up in the current of our own lives, putting off our stories for "later." but later becomes never, and silence becomes distance.introducing kith. through one-tap updates and passive widgets, kith keeps you in the loop on your friends' lives between the sporadic calls, the texts, and the visits — so when you finally get together, you're already caught up
              </p>
            </div>
          </div>
        </div>

        {/* key features */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.1] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">key features</h2>

          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">01</div>
              <div>
                <p className="text-[#ece1c9] text-sm md:text-base font-bold mb-2">
                  widgets
                </p>
                <p className="text-[#ece1c9] text-sm md:text-base">
                  your closest friends' latest updates, right on your home screen — no app-opening required
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">02</div>
              <div>
                <p className="text-[#ece1c9] text-sm md:text-base font-bold mb-2">
                  re-direct message
                </p>
                <p className="text-[#ece1c9] text-sm md:text-base">
                  jump straight from a post into a conversation, no switching apps or extra steps
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">03</div>
              <div>
                <p className="text-[#ece1c9] text-sm md:text-base font-bold mb-2">
                  nudges
                </p>
                <p className="text-[#ece1c9] text-sm md:text-base">
                  let someone know you're thinking of them with a single tap — sometimes that's all it takes
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#ece1c9] text-sm md:text-base font-bold min-w-[3rem]">04</div>
              <div>
                <p className="text-[#ece1c9] text-sm md:text-base font-bold mb-2">
                  smart updates
                </p>
                <p className="text-[#ece1c9] text-sm md:text-base">
                  ai-suggested updates pulled from your connected apps, shared in one tap
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* research */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.1] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">

          <div className="space-y-6 md:space-y-8">
            <div>
              <img src="/kithprev.png" alt="kith preview" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* results */}
        <div className="glass-box backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/[0.1] hover:bg-white/[0.01] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">results</h2>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-3">key takeaways & reflections</h3>
            <p className="text-[#ece1c9] text-sm md:text-base mb-4">
              built over a weekend at orange county's largest design-a-thon, this project took 1st place in the professional track out of 60+ teams and 300+ participants — and as first-timers, our biggest takeaway was: if not now, then when?
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
