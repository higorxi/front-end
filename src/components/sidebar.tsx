"use client"
import { useSidebar } from "@/context/sidebar-context";
import { File, Grid, Menu, Paperclip } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar } from "./ui/avatar";

export default function Sidebar() {
  const { isExpanded } = useSidebar();
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const navItems = [
    { id: 1, label: "Soluções", icon: Grid, href: "#" },
    { id: 2, label: "Documentos", icon: File, href: "#" },
    { id: 3, label: "Papel T", icon: Paperclip, href: "#" },
    { id: 4, label: "Menu", icon: Menu, href: "#" },
  ];

  return (
    <aside
      className={`flex h-[90vh] ${
        isExpanded ? "w-48" : "w-12"
      } flex-col bg-white items-center text-white py-4 transition-all duration-300`}
    >
      <div
        className={`flex items-center ${
          isExpanded ? "justify-start " : "justify-center"
        } mb-4`}
      >
        <div
          className={`rounded-full bg-gray-700 p-2 ${
            isExpanded ? "h-12 w-12" : "h-8 w-8"
          } flex items-center justify-center`}
        >
          <Avatar  className={`${isExpanded ? "h-8 w-8" : "h-5 w-5"}`}/>
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
                ? "bg-emerald-500 text-white"
                : "text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <item.icon className="h-5 w-5" />
            {isExpanded && (
              <span className="text-sm font-medium truncate">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
