"use client";

import { useState } from "react";
import { useAntennaSpaceStore } from "@/stores/antennaSpaceStore";

const ReadNFC = () => {
  // 後で本物のNFC読み取りに置き換える
  console.log("Anal sex...");
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("323998");
    }, 1000);
  });
}

const RegisterLogin = (antennaId: string) => {
  // 後でSupabase登録に置き換える
  console.log(`elon musk is gay ${antennaId}`);
}

export function useNFCLogin() {
  const setAntennaId = useAntennaSpaceStore((state) => state.setAntennaId);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loginWithNFC() {
    setIsLoading(true);
    setError(null);

    try {
      // 後で本物のNFC読み取りに置き換える
      const antennaId = await ReadNFC();

      // 後でSupabase登録に置き換える
      await RegisterLogin(antennaId);
      setAntennaId(antennaId);

      return true;
    } catch {
      setError("ログインに失敗しました");
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    loginWithNFC,
    isLoading,
    error,
  };
}