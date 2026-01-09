import { Star, MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NjU3NzkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$1,299",
    duration: "7 Days",
    rating: 4.9,
    tours: 156
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1729606559758-15542fc58607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwYmVhY2glMjByZXNvcnR8ZW58MXx8fHwxNzY2NjIzODI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$899",
    duration: "5 Days",
    rating: 4.8,
    tours: 203
  },
  {
    id: 3,
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1718789967298-09132d1404bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc2NjU2NzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$1,599",
    duration: "6 Days",
    rating: 4.7,
    tours: 187
  },
  {
    id: 4,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1617424967924-cb1ee1bc5a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG9jZWFuJTIwdmlsbGF8ZW58MXx8fHwxNzY2NTUyMjUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$2,499",
    duration: "8 Days",
    rating: 5.0,
    tours: 142
  },
  {
    id: 5,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY2NjM5ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$1,799",
    duration: "6 Days",
    rating: 4.9,
    tours: 178
  },
  {
    id: 6,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1633942515338-6bfe46d316d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY2NTg2MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$2,199",
    duration: "9 Days",
    rating: 4.8,
    tours: 124
  }
];

export function PopularDestinations() {
  return (
    <section id="products" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#ff8b06] text-lg mb-2">EXPLORE THE WORLD</p>
          <h2 className="text-4xl md:text-5xl font-oswald mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our handpicked destinations that offer unforgettable experiences and breathtaking views
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#ff8b06] text-white px-8 py-4 rounded-lg hover:bg-[#e67010] transition-colors text-lg">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ 
  name, 
  image, 
  price, 
  duration, 
  rating, 
  tours 
}: { 
  name: string;
  image: string;
  price: string;
  duration: string;
  rating: number;
  tours: number;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
          <span className="text-[#ff8b06]">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin size={16} className="text-[#ff8b06]" />
          <span className="text-sm">{duration}</span>
        </div>
        
        <h3 className="text-2xl mb-3">{name}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-[#ffa500] text-[#ffa500]" />
            <span>{rating}</span>
            <span className="text-gray-500 text-sm">({tours} tours)</span>
          </div>
          
          <button className="text-[#ff8b06] hover:text-[#e67010] transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}
