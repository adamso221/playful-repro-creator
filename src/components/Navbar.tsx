import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">MultiplugAI</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-gray-600 hover:text-gray-900">Product</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Price</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About us</a>
            <Button variant="outline">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};