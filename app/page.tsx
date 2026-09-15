import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Maps } from "@/components/features/maps";
import { Logs } from "@/components/features/logs";
import { AntennaIDStatus } from "@/components/ui/antenna-id-status";

export default function Page() {
  return (
    <Tabs className="grid h-dvh grid-rows-[auto_1fr_auto] p-6 pb-0">
      <header className="flex justify-between gap-4">
        <AntennaIDStatus antennaId="323 998" />
        <TabsList>
          <TabsTrigger value="maps" className="p-2">マップ</TabsTrigger>
          <TabsTrigger value="logs" className="p-2">掲示板</TabsTrigger>
        </TabsList>
      </header>
      <TabsContent value="maps" className="flex items-center justify-center h-full w-full">
        <Maps />
      </TabsContent>
      <TabsContent value="logs" className="flex items-center justify-center h-full w-full">
        <Logs />
      </TabsContent>
    </Tabs>
  );
}
