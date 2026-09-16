// hooks/useSelectAntennaId.ts
"use client";

import { useState } from "react";
import { useDialog } from "./useDialog";
import { useAntennaSpaceStore } from "@/stores/antennaSpaceStore";


export function useSelectAntennaId() {
  const saveAntennaId = useAntennaSpaceStore((state) => state.setAntennaId);
  const dialog = useDialog();
  const [antennaId, setAntennaId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateAntennaId(value: string) {
    setAntennaId(value.replace(/\D/g, "").slice(0, 6));
  }

  function RegisterAntennaId(antennaId: string) {
    // 後でSupabase登録に置き換える
    console.log(`Registering antenna ID: ${antennaId}`);
  }

  async function selectAntennaId() {
    if (antennaId.length !== 6) {
      setError("6桁の認証コードを入力してください");
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      // 後でSupabase登録に置き換える
      await RegisterAntennaId(antennaId);
      saveAntennaId(antennaId);

      dialog.closeDialog();
      return true;
    } catch {
      setError("アンテナ接続に失敗しました");
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    ...dialog,
    antennaId,
    updateAntennaId,
    selectAntennaId,
    isLoading,
    error,
  };
}