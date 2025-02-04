import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Steps />
      
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stop Guessing Your Pricing.<br />
            Start Scaling Smart.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get instant insights from real-time experiments and build exactly what your customers need.
          </p>
          <Button size="lg" className="text-lg">
            Try it now
          </Button>
        </div>
      </section>
      
      <FAQ />
    </div>
  );
};

export default Index;