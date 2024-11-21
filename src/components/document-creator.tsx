/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import { X, Upload, FileText } from "lucide-react";
import PreviewModal from "./preview-modal";
import CodeInput from "./ui/code-input";
import { createDocument } from "@/service/DocumentService";
import InfoIcon from "./ui/info-icon";

interface DocumentCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentCreationModal = ({
  isOpen,
  onClose,
}: DocumentCreationModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const [origem, setOrigem] = useState("");
  const [tipo, setTipo] = useState("");
  const [code, setCode] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const sender = "Empresa RLV";
  const totalValue = "12500.00";
  const netValue = "234";

  const createDoc = async () => {
    try {
      setLoading(true);
      const dataSend = {
        sender,
        totalValue,
        netValue,
        name: fileName,
        id: code,
        type: tipo,
      };
      const response = await createDocument(dataSend);
      if (response) {
        onClose();
      }
    } catch (error) {
      console.error("Error ao criar documento", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const maxFileSize = 10 * 1024 * 1024; // 10MB
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileSelect = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const handleZoom = (direction: string) => {
    if (direction === "in" && zoom < 200) {
      setZoom((prev) => prev + 25);
    } else if (direction === "out" && zoom > 25) {
      setZoom((prev) => prev - 25);
    }
  };

  const handleDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const canPreview = selectedFile && origem && tipo;
  //const canCreate = step === 3 || (canPreview && fileName);

  const FileUploadInfo = () => {
    if (!selectedFile) return null;

    const fileSize = selectedFile.size;
    const percentageUsed = (fileSize / maxFileSize) * 100;

    return (
      <div>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <FileText className="text-green-500" size={24} />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">
                {selectedFile.name}
              </p>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${percentageUsed}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {formatFileSize(fileSize)} de {formatFileSize(maxFileSize)}
              </p>
            </div>
          </div>
        </div>
        {canPreview && (
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="px-4 py-2 text-green-600 hover:text-green-700 font-medium"
          >
            Pré-visualizar
          </button>
        )}
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="bg-white rounded-lg w-full max-w-xl p-6 relative z-40">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Criar novo documento</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Insira os dados necessários para criar
        <InfoIcon
          message="Caso nenhum código seja informado, um código aleatório será gerado"
          title="Código"
        />
      </p>

      <div className="space-y-4">
        <div>
          <CodeInput onCodeChange={handleCodeChange} />
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Origem do documento
          </label>
          <select
            className="w-full border rounded-md p-2 text-gray-600"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          >
            <option value="">Selecionar a origem do documento</option>
            <option value="digitalizado">Digitalizado</option>
            <option value="eletronico">Eletrônico</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo do documento
          </label>
          <select
            className="w-full border rounded-md p-2 text-gray-600"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Selecionar tipo do documento</option>
            <option value="NF_SERVICE">Nota fiscal de serviço</option>
            <option value="NF_ELECTRONIC">Nota fiscal eletrônica</option>
            <option value="RECEIPT">Recibo</option>
          </select>
        </div>

        {!canPreview && (
          <div
            className="border-2 border-dashed border-green-500 rounded-lg p-8"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-green-500 mb-2">
                <Upload size={24} />
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Arraste e solte aqui ou selecione o arquivo para upload
              </p>
              <label className="cursor-pointer">
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                  accept=".pdf,.doc,.docx"
                />
                <span className="text-sm text-[#191E29] border border-gray-300 bg-white px-4 py-2 rounded-md" >
                  Procurar e selecionar arquivo
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-2">Tamanho max.: 10MB</p>
            </div>
          </div>
        )}

        <FileUploadInfo />

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => setStep(2)}
          >
            Criar documento
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="bg-white rounded-lg w-full max-w-xl p-6 relative z-40">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Criar novo documento</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome do arquivo PDF
          </label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="w-full border rounded-md p-2"
            placeholder="Digite o nome do arquivo"
          />
        </div>

        <FileUploadInfo />

        <div className="flex justify-between mt-6 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>

          <button
            onClick={createDoc}
            disabled={!fileName || loading}
            className={`px-4 py-2 bg-green-500 text-white rounded-md ${
              fileName ? "hover:bg-green-600" : "opacity-50 cursor-not-allowed"
            }`}
          >
            Criar documento
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
      </div>
      <PreviewModal
        isPreviewOpen={isPreviewOpen}
        setIsPreviewOpen={setIsPreviewOpen}
        previewUrl={previewUrl}
        selectedFile={selectedFile}
        zoom={zoom}
        handleZoom={handleZoom}
      />
    </>
  );
};

export default DocumentCreationModal;
