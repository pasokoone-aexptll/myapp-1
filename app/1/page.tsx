import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main className="grid min-h-screen grid-rows-[auto_1fr_auto] p-8">
      <header className="flex items-start justify-center">
        <div className="flex w-full max-w-5xl items-center justify-between gap-4">
          <img src="/DreamCloud.png" alt="DreamCloud Logo" width={98.5 * 1.3} height={22 * 1.3} />
          <Button type="button" className="rounded-full px-3 py-4" variant="default" >
            街の様子を見る
          </Button>
        </div>
      </header>

      <section className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src="/radiowaves.svg" alt="Radiowaves" className="h-[148px] w-[148px]" />
          <p className="mb-4 text-base text-black/40">NFCステッカーにタッチしてください</p>
          <Button type="button" className="flex items-center gap-2 rounded-full px-4 py-6 text-lg" size="lg">
            ログイン
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <footer className="flex items-end justify-center" />
    </main>
  );
}
