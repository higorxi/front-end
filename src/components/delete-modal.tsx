import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { deleteDocumentById } from "@/service/DocumentService";

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  idDoc: string;
}

export default function DeleteModal({
  isOpen,
  onClose,
  idDoc,
}: DeleteDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteDocumentById(idDoc)
      toast.success("Documento excluída com sucesso");
      onClose();
    } catch (error) {
      console.error("Erro ao excluir o documento:", error);
      toast.error("Erro ao excluir o documento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-96">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Confirmar exclusão</h2>
          <p className="text-sm text-gray-500">
            Tem certeza de que deseja excluir? Essa ação não poderá ser revertida.
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            variant="outline"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            variant="destructive"
            className="bg-red-600 text-white hover:bg-red-700"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Excluindo..." : "Excluir"}
          </Button>
        </div>
      </div>
    </div>
  );
}
