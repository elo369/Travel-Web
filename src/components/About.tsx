import { Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#fff4ed] to-[#f3e7e0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#ff8b06] text-lg mb-2">ABOUT SOULTRAVEL</p>
            <h2 className="text-4xl md:text-5xl font-oswald mb-6">
              Your Journey,<br />Our Passion
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Founded in 2010, SoulTravel has been crafting unforgettable travel experiences for over a decade. We believe that travel is more than just visiting places – it's about creating memories, discovering cultures, and connecting with the world.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our team of travel experts works tirelessly to curate the perfect journeys, from exotic adventures to luxurious getaways. With partnerships across 200+ destinations worldwide, we bring your dream vacation to life.
            </p>

            {/* Company Values */}
            <div className="space-y-4">
              <ValueCard 
                icon={Target}
                title="Our Mission"
                description="To make world-class travel accessible and memorable for everyone"
              />
              <ValueCard 
                icon={Eye}
                title="Our Vision"
                description="To be the world's most trusted and innovative travel company"
              />
              <ValueCard 
                icon={Heart}
                title="Our Values"
                description="Excellence, integrity, sustainability, and customer-first approach"
              />
            </div>
          </div>

          {/* Right Content - Team/Image Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#ff8b06] rounded-2xl p-8 text-white">
                  <div className="text-5xl font-oswald mb-2">13+</div>
                  <p className="text-lg">Years of Excellence</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-oswald text-[#ff8b06] mb-2">150+</div>
                  <p className="text-gray-700">Expert Team Members</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-oswald text-[#ff8b06] mb-2">50K+</div>
                  <p className="text-gray-700">Happy Customers</p>
                </div>
                <div className="bg-[#2c2c2c] rounded-2xl p-8 text-white">
                  <div className="text-5xl font-oswald mb-2">4.9★</div>
                  <p className="text-lg">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#ff8b06] rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ff8b06] rounded-full opacity-20 blur-3xl" />
          </div>
        </div>

        {/* Our Story Timeline */}
        <div className="mt-20 pt-12 border-t border-gray-300">
          <h3 className="text-3xl font-oswald text-center mb-12">Our Journey</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <TimelineCard 
              year="2010"
              title="Founded"
              description="Started with a small team and a big dream"
            />
            <TimelineCard 
              year="2015"
              title="Expansion"
              description="Reached 50 destinations and 10K customers"
            />
            <TimelineCard 
              year="2020"
              title="Innovation"
              description="Launched digital booking platform"
            />
            <TimelineCard 
              year="2024"
              title="Global Leader"
              description="200+ destinations, 50K+ happy travelers"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-[#ff8b06] rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="text-white" size={24} />
      </div>
      <div>
        <h4 className="text-lg mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function TimelineCard({
  year,
  title,
  description
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-[#ff8b06] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-oswald">
        {year}
      </div>
      <h4 className="text-xl mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
