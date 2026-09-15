import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { MapsView } from "@/components/features/mapsView";
import { LogsView } from "@/components/features/logsView";
import { AntennaIDStatus } from "@/components/ui/antenna-id-status";

export default function Page() {
  return (
    <Tabs
      defaultValue="maps"
      className="relative grid h-dvh w-screen grid-rows-[auto_1fr] overflow-hidden"
    >
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between gap-4 p-6 pb-4">
        <AntennaIDStatus antennaId="323 998" />

        <TabsList>
          <TabsTrigger value="maps" className="p-2">
            マップ
          </TabsTrigger>

          <TabsTrigger value="logs" className="p-2">
            掲示板
          </TabsTrigger>
        </TabsList>
      </header>

      {/* Map */}
      <TabsContent
        value="maps"
        className="absolute inset-0 z-0 m-0 h-full w-full"
      >
        <MapsView />
      </TabsContent>

      {/* Logs */}
      <TabsContent
        value="logs"
        className="relative z-10 m-0 min-h-0 w-full p-4"
      >
        <LogsView />
      </TabsContent>
    </Tabs>
  );
}