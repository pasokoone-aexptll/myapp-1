import { MapView } from "@/components/ui/map-view";
import type { Person } from "@/stores/antennaSpaceStore";

type MapsViewProps = {
  people: Person[];
};

export function MapsView({ people }: MapsViewProps) {
  return (
    <div className="h-full w-full">
      <MapView people={people} />
    </div>
  );
}