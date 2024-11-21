"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import DocumentModal from "../document-creator";
import { isMobile } from "react-device-detect";

const DocumentCreator = () => {
  const [isModalCreatorOpen, setIsModalCreatorOpen] = useState(false);

  const toggleCreatorModal = () => {
    setIsModalCreatorOpen(!isModalCreatorOpen);
  };

  return (
    <div className="relative">
      {isMobile ? (
        <div
          className="fixed bottom-48 right-8 bg-greenPrimary text-white rounded-full p-4 shadow-lg cursor-pointer"
          onClick={toggleCreatorModal}
        >
          <PlusIcon className="h-6 w-6" />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button onClick={toggleCreatorModal}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Novo documento
          </Button>
        </div>
      )}

      {isModalCreatorOpen && (
        <DocumentModal isOpen={isModalCreatorOpen} onClose={toggleCreatorModal} />
      )}
    </div>
  );
};

export default DocumentCreator;
