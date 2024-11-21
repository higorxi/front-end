import { SidebarProvider } from "@/context/sidebar-context";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <ToastContainer/>
      {children}
    </SidebarProvider>
  );
};
