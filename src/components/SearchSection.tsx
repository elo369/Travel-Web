import { useState } from "react";
import { MapPin, Calendar, Plane, Hotel, Car } from "lucide-react";

export function SearchSection() {
  const [activeTab, setActiveTab] = useState<'flight' | 'hotel' | 'rent'>('flight');
  const [destination, setDestination] = useState('Tokyo,Japan');
  const [date, setDate] = useState('01 dev 2023');

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 -mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 ">
          <TabButton 
            active={activeTab === 'flight'} 
            onClick={() => setActiveTab('flight')}
            icon={<Plane size={20} />}
            
          >
            FLIGHT
          </TabButton>
          <TabButton 
            active={activeTab === 'hotel'} 
            onClick={() => setActiveTab('hotel')}
            icon={<Hotel size={20} />}
          >
            HOTEL
          </TabButton>
          <TabButton 
            active={activeTab === 'rent'} 
            onClick={() => setActiveTab('rent')}
            icon={<Car size={20} />}
          >
            RENT
          </TabButton>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            {/* Destination Input */}
            <div className="flex-1">
              <label className="block text-sm text-[#7c7979] mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F77A40]" size={20} />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-r border-[#e5e5e5] focus:outline-none"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="flex-1">
              <label className="block text-sm text-[#7c7979] mb-2">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F77A40]" size={20} />
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 focus:outline-none"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-[#ff9807] text-black px-8 py-3 rounded-lg hover:bg-[#e68806] transition-colors font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabButton({ 
  active, 
  onClick, 
  icon, 
  children,
  className
}: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
        active 
          ? 'bg-white text-[#da8815] shadow-md' 
          : 'bg-[#efeeee] text-[#686766] hover:bg-white'
      } ${className ?? ''}`}
    >
      <span className={active ? 'text-[#F77A40]' : 'text-current'}>{icon}</span>
      <span className="font-medium text-sm">{children}</span>
    </button>
  );
}
