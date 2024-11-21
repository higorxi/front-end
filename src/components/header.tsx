"use client";

import { Bell, Menu, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/context/sidebar-context";
import Image from "next/image";
import Logo from "../../public/logo/logo.png";
import { isMobile } from "react-device-detect";

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" width={32} height={32} />
            <p className={`${isMobile ? "text-lg" : "text-xl font-medium"}`}>
              e-paper
            </p>
          </div>
        </div>

        <Separator orientation="vertical" className="mx-4 h-8" />

        <Button variant="ghost" className="gap-2">
          <LayoutGrid className="h-4 w-4" />
          {!isMobile && <p>Soluções</p>}
        </Button>

        <div className="ml-auto flex items-center gap-4">
          {!isMobile && (
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className={`${
                isMobile ? "h-12 w-32 p-2 gap-2" : "h-12 w-60p-2 gap-2"
              }`}
            >
              <Button variant="outline">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                {!isMobile && (
                  <div className="flex flex-col items-start text-sm font-bold">
                    <span>Nome do usuário</span>
                    <span className="text-muted-foreground text-xs font-normal">
                      Organização
                    </span>
                  </div>
                )}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                >
                  <path
                    d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
