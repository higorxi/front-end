"use client";
import { useSidebar } from "@/context/sidebar-context";
import { FileText, FileType, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Sidebar() {
  const { isExpanded } = useSidebar();
  const [activeItem, setActiveItem] = useState<number | null>(null);


  const navItems = [
    { id: 1, label: "Soluções", icon: LayoutGrid, href: "#" },
    { id: 2, label: "Documentos", icon: FileText, href: "#" },
    { id: 3, label: "Papel T", icon: FileType, href: "#" },
    { id: 4, label: "Menu", icon: List, href: "#" },
  ];

  return (
    <aside
      className={`flex ${
        isExpanded ? "w-48" : "w-12"
      } flex-col bg-white items-center text-white py-4 transition-all duration-300 border-r border-gray-200`}
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div
        className={`flex items-center ${
          isExpanded ? "justify-start " : "justify-center"
        } mb-4`}
      >
        <div
          className={`rounded-full bg-gray-700 p-2 mb-4 ${
            isExpanded ? "h-12 w-12" : "h-8 w-8"
          } flex items-center justify-center`}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <nav
        className={`flex flex-1 flex-col gap-2 ${
          isExpanded ? "items-start px-4" : "items-center"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center gap-2 w-full px-2 py-2 rounded-md ${
              activeItem === item.id
                ? "bg-greenLight text-grayIcons"
                : "text-grayIcons hover:bg-greenLight hover:text-grayIcons"
            }`}
          >
            <item.icon className="h-5 w-5" />
            {isExpanded && (
              <span className="text-sm font-medium truncate">{item.label}</span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
