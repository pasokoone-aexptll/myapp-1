"use client";

import { useRouter } from "next/navigation";

export function useNavigation() {
  const router = useRouter();

  return {
    goToConnectAntenna: () => {
      router.push("/connectAntenna");
    },
    goToAntennaSpace: () => {
      router.push("/antennaSpaceViewer");
    },
  };
}