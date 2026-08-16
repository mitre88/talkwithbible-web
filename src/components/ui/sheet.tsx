"use client";

import type { ComponentProps } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children,
  ...props
}: ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-midnight/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border bg-background p-6 shadow-xl",
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-border text-muted-foreground">
          <X className="size-4" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
