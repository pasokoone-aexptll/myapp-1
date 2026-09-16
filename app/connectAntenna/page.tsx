"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { useNFCLogin } from "@/hooks/useNFCLogin";
import { useSelectAntennaId } from "@/hooks/useSelectAntennaId";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import LoginView from "./views/login";
import SelectAntennaIdView from "./views/selectAntennaId";

export default function Page() {
  const navigation = useNavigation();
  const nfcLogin = useNFCLogin();
  const selectAntennaId = useSelectAntennaId();

  async function handleNFCLogin() {
    const succeeded = await nfcLogin.loginWithNFC();

    if (succeeded) {
      navigation.goToAntennaSpace();
    }
  }

  async function handleSelectAntennaId() {
    const succeeded = await selectAntennaId.selectAntennaId();

    if (succeeded) {
      navigation.goToAntennaSpace();
    }
  }

  return (
    <>
      <LoginView
        openDialog={selectAntennaId.openDialog}
        onLogin={handleNFCLogin}
        isLoading={nfcLogin.isLoading}
      />

      <Dialog
        open={selectAntennaId.open}
        onOpenChange={selectAntennaId.onOpenChange}
      >
        <DialogContent>
          <SelectAntennaIdView
            antennaId={selectAntennaId.antennaId}
            onAntennaIdChange={selectAntennaId.updateAntennaId}
            onCancel={selectAntennaId.closeDialog}
            onGo={handleSelectAntennaId}
            isLoading={selectAntennaId.isLoading}
            error={selectAntennaId.error}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}