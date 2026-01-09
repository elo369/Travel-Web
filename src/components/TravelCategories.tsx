const categories = [
  {
    id: 1,
    title: "Adventure Tours",
    description: "For thrill-seekers and nature lovers",
    image: "https://images.unsplash.com/photo-1729365948862-6aedcaa2513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBoaWtpbmclMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY2NjAxNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    packages: 48
  },
  {
    id: 2,
    title: "Luxury Escapes",
    description: "Premium experiences and five-star comfort",
    image: "https://images.unsplash.com/photo-1729717949780-46e511489c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjY1Njk5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    packages: 62
  },
  {
    id: 3,
    title: "Family Vacations",
    description: "Fun and safe trips for the whole family",
    image: "https://images.unsplash.com/photo-1552249352-02a0817a2d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB2YWNhdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2NjY2Njc0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    packages: 35
  },
  {
    id: 4,
    title: "Budget Travel",
    description: "Affordable adventures without compromise",
    image: "https://images.unsplash.com/photo-1710349926597-2ad5e77a78ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFja2VyJTIwdHJhdmVsfGVufDF8fHx8MTc2NjY2Njc0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    packages: 71
  },
  {
    id: 5,
    title: "Cruise Packages",
    description: "Sail the seas in style and comfort",
    image: "https://images.unsplash.com/photo-1568033043438-4d6a22d928aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwb2NlYW58ZW58MXx8fHwxNzY2NjY2NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    packages: 29
  },
  {
    id: 6,
    title: "Business Travel",
    description: "Efficient solutions for corporate trips",
    image: "https://images.unsplash.com/photo-1730084783279-5b51d3b6d49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYXZlbCUyMGFpcnBvcnR8ZW58MXx8fHwxNzY2NjY2NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    packages: 54
  }
];

export function TravelCategories() {
  return (
    <section id="sections" className="py-20 px-6 md:px-12 lg:px-20 bg-[#f3e7e0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#ff8b06] text-lg mb-2">TRAVEL CATEGORIES</p>
          <h2 className="text-4xl md:text-5xl font-oswald mb-4">Find Your Perfect Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you're seeking adventure or relaxation, we have the perfect travel experience for you
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  title,
  description,
  image,
  packages
}: {
  title: string;
  description: string;
  image: string;
  packages: number;
}) {
  return (
    <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2">
          <span className="bg-[#ff8b06] px-3 py-1 rounded-full text-sm">
            {packages} Packages
          </span>
        </div>
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
        
        <button className="mt-4 text-[#ff8b06] hover:text-white transition-colors flex items-center gap-2">
          Explore More →
        </button>
      </div>
    </div>
  );
}
