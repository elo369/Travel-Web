import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-[#fff6f6] rounded-[40px] px-8 py-6 flex items-center justify-between shadow-sm">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-oswald font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-[#171717]">Soul</span>
              <span className="text-[#f08324]">Travel.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink active onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HOME</NavLink>
            <NavLink onClick={() => scrollToSection('products')}>PRODUCTS</NavLink>
            <NavLink onClick={() => scrollToSection('sections')}>SECTIONS</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>ABOUT</NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 text-[#121111] hover:text-[#fd7c0c] transition-colors">
              Sign Up
            </button>
            <button className="px-6 py-2 bg-[#fd7c0c] text-white rounded-lg hover:bg-[#e67010] transition-colors">
              Sign in
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#171717]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-[#fff6f6] rounded-3xl px-8 py-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <NavLink active mobile onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HOME</NavLink>
              <NavLink mobile onClick={() => scrollToSection('products')}>PRODUCTS</NavLink>
              <NavLink mobile onClick={() => scrollToSection('sections')}>SECTIONS</NavLink>
              <NavLink mobile onClick={() => scrollToSection('about')}>ABOUT</NavLink>
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">
                <button className="px-6 py-2 text-[#121111] hover:text-[#fd7c0c] transition-colors text-left">
                  Sign Up
                </button>
                <button className="px-6 py-2 bg-[#fd7c0c] text-white rounded-lg hover:bg-[#e67010] transition-colors">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ 
  children, 
  active, 
  mobile,
  onClick
}: { 
  children: React.ReactNode; 
  active?: boolean; 
  mobile?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative font-bold hover:text-[#fd7c0c] transition-colors ${
        mobile ? 'text-lg py-2 text-left w-full' : 'text-xl'
      }`}
    >
      {children}
      {active && !mobile && (
        <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#f58e18] rounded-full" />
      )}
      {active && mobile && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-[#f58e18] rounded-full" />
      )}
    </button>
  );
}