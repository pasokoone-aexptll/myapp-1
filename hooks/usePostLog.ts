"use client";

import { useAntennaSpaceStore } from "@/stores/antennaSpaceStore";

export function usePostLog() {
  const addLog = useAntennaSpaceStore((state) => state.addLog);

  async function postLog(message: string, authorId: string) {
    const log = {
      id: crypto.randomUUID(),
      authorId,
      date: new Date().toLocaleString("ja-JP"),
      message,
    };

    // Supabaseへのinsertはここに置き、成功後にstoreを更新する。
    await Promise.resolve();
    addLog(log);
  }

  return { postLog };
}