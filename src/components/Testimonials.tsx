import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "SoulTravel made our honeymoon to Santorini absolutely magical! Every detail was perfectly planned, and the local guide showed us hidden gems we would have never found on our own. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Best travel experience ever! The team was incredibly professional and responsive. They handled everything from flights to accommodations, and even arranged special surprises for my wife's birthday during our Paris trip.",
    image: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "As a solo female traveler, I felt completely safe and supported throughout my Bali adventure. The itinerary was perfect, and the customer service was outstanding. Already planning my next trip with them!",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 4,
    name: "David Martinez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "Took my family of five on an unforgettable tour of the Swiss Alps. Everything was seamless, from the booking process to the amazing activities. The kids are still talking about it months later!",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 5,
    name: "Priya Patel",
    location: "Mumbai, India",
    rating: 5,
    text: "Exceptional service and attention to detail. They customized our Dubai trip perfectly according to our preferences. The 24/7 support was a lifesaver when we needed help with a last-minute change.",
    image: "https://i.pravatar.cc/150?img=9"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#ff8b06] text-lg mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-oswald mb-4">What Our Travelers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real experiences from real travelers who trusted us with their adventures
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <Quote className="text-[#ff8b06] mb-6" size={48} />
          
          <div className="mb-8">
            <div className="flex gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="fill-[#ffa500] text-[#ffa500]" size={20} />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-6">
              "{current.text}"
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img 
              src={current.image}
              alt={current.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="text-xl">{current.name}</div>
              <div className="text-gray-400">{current.location}</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 justify-center">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#ff8b06] hover:bg-[#e67010] transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#ff8b06] hover:bg-[#e67010] transition-colors flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#ff8b06] w-8' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <TrustBadge text="Verified Reviews" />
          <TrustBadge text="Secure Booking" />
          <TrustBadge text="Best Price" />
          <TrustBadge text="24/7 Support" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
      <div className="text-[#ff8b06] text-2xl mb-2">✓</div>
      <p className="text-sm">{text}</p>
    </div>
  );
}
