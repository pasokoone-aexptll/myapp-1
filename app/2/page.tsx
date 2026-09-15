import { Button } from "@/components/ui/button";
import { SmartphoneNfc, ArrowUpRight } from "lucide-react";


export default function page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 space-y-2 text-center">
        <h1 className="text-xl font-bold inline-flex items-center gap-1">
          <img src="/radiowaves.svg" alt="Radiowaves" className="h-6 w-6" />
          アンテナ接続ID
        </h1>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-center gap-3">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center gap-2 rounded-2xl border border-border bg-muted/40 px-2 py-2 transition-all duration-200"
            >
              {Array.from({ length: 3 }).map((_, index) => {
                const inputIndex = groupIndex * 3 + index;
                return (
                  <input
                    key={inputIndex}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="h-12 w-9 rounded-lg border border-border bg-background text-center text-lg font-semibold text-foreground shadow-sm outline-none transition-all duration-200 focus:border-foreground focus:ring-2 focus:ring-ring/40"
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="px-3 py-2 text-center text-sm text-muted-foreground">
          6桁の認証コードを入力してください
        </div>

        <div className="flex items-center justify-center gap-4 pt-1">
          <Button
            type="button"
            className="flex items-center gap-2 rounded-full px-4 py-5 text-lg"
            size="lg"
            variant="destructive"
          >
            Cancel
          </Button>

          <Button
            type="button"
            className="flex items-center gap-2 rounded-full px-4 py-5 text-lg"
            size="lg"
          >
            Go
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
    </main>
  );
}
