"use client";

import { Toaster } from "@proptech-admin/ui/components/sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/utils/trpc";
import { SessionWatcher } from "./session-watcher";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
      themes={[
        "light",
        "dark",
        "midnight",
        "softPop",
        "nature",
        "bubbleGum",
        "system",
      ]}
    >
      <QueryClientProvider client={queryClient}>
        <SessionWatcher />
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
      <Toaster richColors />
    </ThemeProvider>
  );
}
