import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Maps() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src="/radiowaves.svg" alt="Radiowaves" className="h-[148px] w-[148px]" />
      <p className="mb-4 text-base text-black/40">
        NFCステッカーにタッチしてください
      </p>

      <Button
        type="button"
        className="flex items-center gap-2 rounded-full px-4 py-6 text-lg"
        size="lg"
      >
        ログイン
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}