import { Shield, DollarSign, Headphones, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with comprehensive travel insurance and 24/7 support"
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "We offer competitive prices and will match any lower price you find elsewhere"
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our dedicated team is always available to assist you anytime, anywhere"
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized globally for excellence in travel services and customer satisfaction"
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Quick and easy booking process with instant confirmation for your peace of mind"
  },
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Professional guides with deep knowledge of local culture and hidden gems"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff8b06] text-lg mb-2">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-oswald mb-4">We Make Travel Simple & Enjoyable</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            With years of experience and thousands of satisfied customers, we're your trusted travel partner
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <StatCard number="50K+" label="Happy Travelers" />
          <StatCard number="200+" label="Destinations" />
          <StatCard number="1000+" label="Tour Packages" />
          <StatCard number="98%" label="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group">
      <div className="w-16 h-16 bg-[#fff4ed] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#ff8b06] transition-colors">
        <Icon className="text-[#ff8b06] group-hover:text-white transition-colors" size={28} />
      </div>
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-oswald text-[#ff8b06] mb-2">
        {number}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
