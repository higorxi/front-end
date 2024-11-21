"use client";

import { isMobile } from "react-device-detect";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { useState } from "react";
import { DocumentFilter } from "../document-filter";

const SearchAndFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilterPanel = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="relative">
      <div
        className={`flex ${isMobile ? "flex-col gap-4" : "items-center gap-4"}`}
      >
        <div className={`relative ${isMobile ? "w-full" : "flex-1"}`}>
          <Input
            type="search"
            placeholder="Buscar documentos"
            className="pr-10 pl-4 text-lg py-3"
          />
          <MagnifyingGlassIcon className="absolute right-2.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>

        <Button
          variant="outline"
          onClick={toggleFilterPanel}
          className={`py-3 px-4 ${isMobile ? "w-full" : ""}`}
        >
          <FilterIcon className="mr-2 h-5 w-5" />
          Filtrar
        </Button>
      </div>

      {isFilterOpen && (
        <DocumentFilter open={isFilterOpen} onOpenChange={setIsFilterOpen} />
      )}
    </div>
  );
};

export default SearchAndFilter;
