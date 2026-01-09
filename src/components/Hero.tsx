import imgGirlWithSuitcase from "figma:asset/73ca52cfce3e6e19acc4d8ab7c85666ca9057cfe.png";
import imgPlane from "figma:asset/897f2b22ad76129a1b70cd962d9e0688bdbaeb55.png";

export function Hero() {
  return (
    <section className="relative min-h-screen pb-20 pt-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border-[80px] border-[#F3E1D0] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute top-32 right-0 w-[500px] h-[500px] rounded-full border-[60px] border-[#F3E1D0] translate-x-1/4 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="space-y-2">
              <div className="text-6xl md:text-7xl lg:text-8xl font-oswald font-medium">
                LET'S GO!
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl font-oswald font-medium">
                THE <span className="text-[#ff8b06]">ADVENTURE</span> IS
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl font-oswald font-medium">
                WAITING FOR YOU
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#2e2e2e] leading-relaxed max-w-xl">
              Pack your luggage and pick your destination, we will provide you the flight ticket, hotel booking and best guides
            </p>
          </div>

          {/* Right Content - Image with decorations */}
          <div className="relative">
            {/* Orange gradient circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[380px] rounded-full bg-gradient-to-b from-[#FF6F09] to-[#F3CFAA]" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img 
                src={imgGirlWithSuitcase} 
                alt="Traveler with suitcase" 
                className="w-full max-w-[600px] mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Plane decoration */}
            <div className="absolute top-1/3 left-0 w-32 h-32 -translate-x-1/4">
              <img src={imgPlane} alt="Plane" className="w-full h-full object-contain" />
            </div>

            {/* Service badges */}
            <ServiceBadge 
              icon="🏨" 
              text="HOTEL BOOKING" 
              className="absolute top-12 left-4 lg:left-0"
            />
            <ServiceBadge 
              icon="✈️" 
              text="FLIGHT TICKETS" 
              className="absolute top-8 right-0"
            />
            <ServiceBadge 
              icon="🗺️" 
              text="TOUR GUIDE" 
              className="absolute top-1/2 right-0"
            />
            <ServiceBadge 
              icon="🎉" 
              text="LOCAL EVENTS" 
              className="absolute bottom-20 left-8"
            />

            {/* Customer service card */}
            <div className="absolute bottom-0 right-0 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#EB8006] flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M23.5 16.5V19.5C23.5 20.6 22.6 21.5 21.5 21.5H19.5C18.4 21.5 17.5 20.6 17.5 19.5V16.5C17.5 15.4 18.4 14.5 19.5 14.5H21.5C22.6 14.5 23.5 15.4 23.5 16.5ZM6.5 14.5H4.5C3.4 14.5 2.5 15.4 2.5 16.5V19.5C2.5 20.6 3.4 21.5 4.5 21.5H6.5C7.6 21.5 8.5 20.6 8.5 19.5V16.5C8.5 15.4 7.6 14.5 6.5 14.5ZM21.5 12.5C19.3 12.5 17.5 10.7 17.5 8.5C17.5 6.3 19.3 4.5 21.5 4.5C23.7 4.5 25.5 6.3 25.5 8.5C25.5 10.7 23.7 12.5 21.5 12.5ZM4.5 12.5C2.3 12.5 0.5 10.7 0.5 8.5C0.5 6.3 2.3 4.5 4.5 4.5C6.7 4.5 8.5 6.3 8.5 8.5C8.5 10.7 6.7 12.5 4.5 12.5Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#fe7e0d]">CUSTOMER SERVICE</p>
                  <p className="text-lg">+12 345 6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBadge({ icon, text, className }: { icon: string; text: string; className?: string }) {
  return (
    <div className={`bg-white rounded-lg px-4 py-3 shadow-md flex items-center gap-2 ${className}`}>
      <span className="text-2xl">{icon}</span>
      <span className="text-sm whitespace-nowrap">{text}</span>
    </div>
  );
}
