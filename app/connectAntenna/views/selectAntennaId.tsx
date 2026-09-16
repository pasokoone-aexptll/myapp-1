import { Button } from "@/components/ui/button";
import { AntennaIdInput } from "@/components/ui/antenna-id-input";
import { ArrowUpRight } from "lucide-react";

type SelectAntennaIdViewProps = {
  antennaId: string;
  onAntennaIdChange: (value: string) => void;
  onCancel: () => void;
  onGo: () => void;
  isLoading: boolean;
  error: string | null;
};

export default function SelectAntennaIdView({
  antennaId,
  onAntennaIdChange,
  onCancel,
  onGo,
  isLoading,
  error,
}: SelectAntennaIdViewProps) {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 space-y-2 text-center">
        <h1 className="inline-flex items-center gap-1 text-xl font-bold">
          <img
            src="/radiowaves.svg"
            alt="Radiowaves"
            className="h-6 w-6"
          />
          アンテナ接続ID
        </h1>
      </div>

      <div className="space-y-5">
        <AntennaIdInput
          value={antennaId}
          onChange={onAntennaIdChange}
          disabled={isLoading}
        />

        <div className="px-3 py-2 text-center text-sm text-muted-foreground">
          6桁の認証コードを入力してください
        </div>

        {error && (
          <p className="text-center text-sm text-destructive">
            {error}
          </p>
        )}

        <div className="flex items-center justify-center gap-4 pt-1">
          <Button
            type="button"
            className="flex items-center gap-2 rounded-full px-4 py-5 text-lg"
            variant="destructive"
            disabled={isLoading}
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            type="button"
            className="flex items-center gap-2 rounded-full px-4 py-5 text-lg"
            disabled={isLoading || antennaId.length !== 6}
            onClick={onGo}
          >
            {isLoading ? "接続中..." : "Go"}
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
  );
}