import type React from "react";
import { Button } from "@/components/ui/button";
import { Layers, Filter, Download, Share, Settings } from "lucide-react";

const MapToolbar: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 bg-white rounded-md shadow-md">
      <div className="flex flex-col p-1 space-y-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Layers className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Download className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Share className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MapToolbar;
