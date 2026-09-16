"use client";

import { useState } from "react";

export function useDialog() {
  const [open, setOpen] = useState(false);

  return {
    open,
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
    onOpenChange: setOpen,
  };
}