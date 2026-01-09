import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-oswald mb-4">
              <span className="text-white">Soul</span>
              <span className="text-[#ff8b06]">Travel.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for unforgettable journeys around the world. Making travel dreams come true since 2010.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Youtube} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#products">Destinations</FooterLink>
              <FooterLink href="#sections">Travel Categories</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#blog">Travel Blog</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl mb-4">Our Services</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Flight Booking</FooterLink>
              <FooterLink href="#">Hotel Reservation</FooterLink>
              <FooterLink href="#">Tour Packages</FooterLink>
              <FooterLink href="#">Car Rental</FooterLink>
              <FooterLink href="#">Travel Insurance</FooterLink>
              <FooterLink href="#">Visa Assistance</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#ff8b06] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Travel Street, Adventure City, TC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#ff8b06] flex-shrink-0" size={20} />
                <a href="tel:+12345678900" className="text-gray-400 hover:text-[#ff8b06] transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#ff8b06] flex-shrink-0" size={20} />
                <a href="mailto:info@soultravel.com" className="text-gray-400 hover:text-[#ff8b06] transition-colors">
                  info@soultravel.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Customer Service Hours:</p>
              <p className="text-[#ff8b06]">24/7 Available</p>
            </div>
          </div>
        </div>

        {/* Payment & Certifications */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm text-gray-400 mb-3">We Accept:</p>
              <div className="flex gap-3 flex-wrap">
                <PaymentBadge>VISA</PaymentBadge>
                <PaymentBadge>Mastercard</PaymentBadge>
                <PaymentBadge>PayPal</PaymentBadge>
                <PaymentBadge>Amex</PaymentBadge>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-2">Certified & Trusted</p>
              <div className="flex gap-2">
                <div className="bg-[#ff8b06] px-3 py-1 rounded text-xs">ISO 9001</div>
                <div className="bg-[#ff8b06] px-3 py-1 rounded text-xs">IATA</div>
                <div className="bg-[#ff8b06] px-3 py-1 rounded text-xs">SSL Secure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SoulTravel. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#ff8b06] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff8b06] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff8b06] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff8b06] transition-colors"
    >
      <Icon size={18} />
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-[#ff8b06] transition-colors text-sm"
      >
        {children}
      </a>
    </li>
  );
}

function PaymentBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs">
      {children}
    </div>
  );
}
