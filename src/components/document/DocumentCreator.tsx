"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import DocumentModal from "../document-creator";

const DocumentCreator = () => {
    const [isModalCreatorOpen, setIsModalCreatorOpen] = useState(false); 

    const toggleCreatorModal = () => {
    setIsModalCreatorOpen(!isModalCreatorOpen);
    }
   
  return (
    <div className="relative">
    <div className="flex items-center gap-4">
      <Button onClick={toggleCreatorModal}>
        <PlusIcon className="mr-2 h-4 w-4" />
        Novo documento
      </Button>
    </div>
    {isModalCreatorOpen && (
         <DocumentModal isOpen={isModalCreatorOpen} onClose={toggleCreatorModal} />
      )}
    </div>
  );
};

export default DocumentCreator;
