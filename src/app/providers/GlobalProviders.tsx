import { SidebarProvider } from "@/context/sidebar-context";
import React from "react";

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
};
