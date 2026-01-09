import { useState } from "react";
import { Send, Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert("Thank you for subscribing! We'll send you the best travel deals.");
    setEmail("");
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#ff8b06] to-[#ff6f09]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="mb-6">
          <Mail size={56} className="mx-auto mb-4" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-oswald mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Get exclusive travel deals, insider tips, and destination inspiration delivered to your inbox
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-[#2c2c2c] text-white px-8 py-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Send size={20} />
              Subscribe Now
            </button>
          </div>
          <p className="text-sm mt-4 text-white/80">
            Join 10,000+ travelers getting amazing deals. Unsubscribe anytime.
          </p>
        </form>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">✈️</div>
            <h3 className="text-lg mb-2">Exclusive Deals</h3>
            <p className="text-sm text-white/80">First access to limited-time offers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">🗺️</div>
            <h3 className="text-lg mb-2">Travel Tips</h3>
            <p className="text-sm text-white/80">Expert advice and hidden gems</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="text-lg mb-2">Special Offers</h3>
            <p className="text-sm text-white/80">Member-only discounts and perks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
