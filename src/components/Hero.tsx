import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleWaitingList = () => {
    window.open("https://forms.gle/oV8NqLTyBLWAFgNs7", "_blank");
  };

  return (
    <div className="pt-24 pb-16 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 heading-gradient">
          Stop Manually Adjusting Prices—Automate and Focus on Growth.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Save time and effort with AI-powered pricing for modern businesses, eliminating the need to constantly reconfigure things or update manually.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" className="text-lg" onClick={handleWaitingList}>
            Join the waiting list
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="feature-card bg-red-50/50">
            <h3 className="font-semibold mb-4">Without Multiplug</h3>
            <ul className="text-left space-y-3 text-gray-600">
              <li>• Wasting hours on manual updates</li>
              <li>• Losing revenue with outdated models</li>
              <li>• Missing competitive pricing insights</li>
              <li>• Wasting time on manual price changes</li>
            </ul>
          </div>
          
          <div className="feature-card bg-green-50/50">
            <h3 className="font-semibold mb-4">With Multiplug</h3>
            <ul className="text-left space-y-3 text-gray-600">
              <li>• Focus on scaling while pricing runs itself</li>
              <li>• Save hours with automated pricing</li>
              <li>• Stay competitive with dynamic pricing</li>
              <li>• Make smarter decisions with AI insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};