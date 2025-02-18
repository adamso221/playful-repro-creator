
import { Button } from "@/components/ui/button";

export const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      <div className="bg-[#E6FFFC] rounded-lg p-4 flex justify-between items-center">
        <h1 className="text-lg font-medium">Mes engagements</h1>
        <Button className="bg-[#BFD4FF] text-black hover:bg-[#A8C1FF]">
          + créer un nouveau projet
        </Button>
      </div>
    </main>
  );
};
