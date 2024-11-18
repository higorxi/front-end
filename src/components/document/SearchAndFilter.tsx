"use client"

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
      <div className="flex items-center gap-2">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar documentos" className="pl-8" />
        </div>
        <Button variant="outline" onClick={toggleFilterPanel}>
          <FilterIcon className="mr-2 h-4 w-4" />
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


