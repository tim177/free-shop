"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Plus } from "lucide-react";

interface MapSidebarProps {
  onAddPin: () => void;
  onSelectMarkerColor: (color: string) => void;
  selectedColor: string;
  isAddingMarker: boolean;
}

const MapSidebar: React.FC<MapSidebarProps> = ({
  onAddPin,
  onSelectMarkerColor,
  selectedColor,
  isAddingMarker,
}) => {
  const markerColors = ["red", "blue", "green", "purple", "orange", "yellow"];

  return (
    <div className="w-20 bg-white border-r flex flex-col items-center py-4 space-y-6">
      <div className="flex flex-col items-center">
        <Button
          variant={isAddingMarker ? "default" : "outline"}
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={onAddPin}
        >
          <MapPin className="h-6 w-6" />
        </Button>
        <span className="text-xs mt-1">Add Pin</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full"
          >
            <div
              className="h-6 w-6 rounded-full"
              style={{ backgroundColor: selectedColor }}
            />
          </Button>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md rounded-md p-2 z-10">
            <div className="grid grid-cols-3 gap-1">
              {markerColors.map((color) => (
                <button
                  key={color}
                  className={`h-5 w-5 rounded-full ${
                    selectedColor === color
                      ? "ring-2 ring-offset-1 ring-black"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => onSelectMarkerColor(color)}
                />
              ))}
            </div>
          </div>
        </div>
        <span className="text-xs mt-1">Marker</span>
      </div>

      <div className="flex flex-col items-center">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full"
        >
          <Plus className="h-6 w-6 text-green-500" />
        </Button>
        <span className="text-xs mt-1">Add Tools</span>
      </div>
    </div>
  );
};

export default MapSidebar;
