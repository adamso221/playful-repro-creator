
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-2xl">
        <h1 className="text-xl font-medium mb-6">Lets us get to know you better</h1>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-medium">Profil Business</h2>
            <p className="text-sm text-gray-500">
              Définisez votre entreprise pour un meilleur matching des sujets
            </p>
            <Input 
              placeholder="Write site"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <h2 className="font-medium">Problems clients</h2>
            <Input 
              placeholder="Quelle problème votre entreprise résout-elle ?"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <h2 className="font-medium">Bénéfices</h2>
            <Input 
              placeholder="Quels sont les principaux bénéfices pour vos clients ?"
              className="w-full"
            />
          </div>

          <div className="flex justify-center">
            <Button
              className="px-8"
              variant="outline"
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
