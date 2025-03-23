import { MainLayout } from "@/components/layout/main-layout";
import LocationMap from "@/components/map/location-map";

export default function Home() {
  return (
    <MainLayout activeItem="Google Map">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">Location Map</h1>
        <p className="text-gray-600 mb-6">
          This map shows your current location. Allow location access when
          prompted.
        </p>

        <LocationMap height="400px" className="shadow-lg" />
      </div>
    </MainLayout>
  );
}
