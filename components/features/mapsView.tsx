import { Map } from "@/components/ui/map-component";
import "maplibre-gl/dist/maplibre-gl.css"

export function MapsView() {  
  return (
    <div className="h-full w-full">
      <Map />
    </div>
  );
}