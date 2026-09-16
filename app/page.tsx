"use client";

import { useEffect } from "react";
import { useNavigation } from "@/hooks/useNavigation";

export default function Page() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.goToConnectAntenna();
  }, [navigation]);

  return <div>iPhone Duoは名前からしてダサい。/connectAntennaへ移行中...</div>;
}
