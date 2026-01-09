import { Clock, Tag, TrendingUp } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Early Bird Special",
    discount: "30% OFF",
    description: "Book 60 days in advance and save big on your next adventure",
    validUntil: "Dec 31, 2024",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 2,
    title: "Summer Escape",
    discount: "25% OFF",
    description: "Exclusive summer packages to tropical destinations",
    validUntil: "Aug 31, 2024",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 3,
    title: "Group Travel Deals",
    discount: "40% OFF",
    description: "Traveling with 5+ people? Get massive group discounts",
    validUntil: "Limited Time",
    color: "from-green-500 to-green-700"
  }
];

export function SpecialOffers() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Tag className="text-[#ff8b06]" size={24} />
            <p className="text-[#ff8b06] text-lg">LIMITED TIME OFFERS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-oswald mb-4">Special Deals & Discounts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't miss out on these incredible savings for your next journey
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {offers.map((offer) => (
            <OfferCard key={offer.id} {...offer} />
          ))}
        </div>

        {/* Hot Deals Banner */}
        <div className="bg-gradient-to-r from-[#ff8b06] to-[#ff6f09] rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={28} />
                <span className="text-xl">Hot Deal Alert!</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-oswald mb-3">
                Flash Sale: Up to 50% Off Selected Destinations
              </h3>
              <p className="text-white/90 text-lg mb-4">
                Hurry! These exclusive deals won't last long. Book now and save big on your dream vacation.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>Offer ends in: 2 days 14 hours</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-[#ff8b06] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg whitespace-nowrap">
                View All Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferCard({
  title,
  discount,
  description,
  validUntil,
  color
}: {
  title: string;
  discount: string;
  description: string;
  validUntil: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      <div className={`bg-gradient-to-r ${color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <div className="text-5xl font-oswald mb-2">{discount}</div>
          <div className="text-xl">{title}</div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={14} />
            <span>Valid until: {validUntil}</span>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-[#ff8b06] hover:text-white transition-colors group-hover:bg-[#ff8b06] group-hover:text-white">
          Claim Offer
        </button>
      </div>
    </div>
  );
}
