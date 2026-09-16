"use client";

import { usePeopleRealtime } from "@/hooks/usePeopleRealtime";
import { usePostLog } from "@/hooks/usePostLog";
import { useAntennaSpaceStore } from "@/stores/antennaSpaceStore";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { AntennaIDStatus } from "@/components/ui/antenna-id-status";

import { MapsView } from "@/app/antennaSpaceViewer/views/maps";
import { LogsView } from "@/app/antennaSpaceViewer/views/logs";

export default function Page() {
  usePeopleRealtime();

  const people = useAntennaSpaceStore((state) => state.people);
  const logs = useAntennaSpaceStore((state) => state.logs);
  const antennaId = useAntennaSpaceStore((state) => state.antennaId);
  const { postLog } = usePostLog();

  return (
    <Tabs
      defaultValue="maps"
      className="relative grid h-dvh w-screen grid-rows-[auto_1fr] overflow-hidden"
    >
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between gap-4 p-6 pb-4">
        <AntennaIDStatus antennaId={antennaId} />

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
        <MapsView people={people} />
      </TabsContent>

      {/* Logs */}
      <TabsContent
        value="logs"
        className="relative z-10 m-0 min-h-0 w-full p-4"
      >
        <LogsView
          logs={logs}
          onSubmit={(message) => {
            void postLog(message, "i am elon musk");
          }}
        />
      </TabsContent>
    </Tabs>
  );
}