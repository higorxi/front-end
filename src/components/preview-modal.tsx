
import { X, ZoomIn, ZoomOut, Edit2, Download } from "lucide-react";

interface PreviewModalProps {
  isPreviewOpen: boolean;
  setIsPreviewOpen: (open: boolean) => void;
  previewUrl: string;
  selectedFile: { type: string; name: string } | null;
  zoom: number;
  handleZoom: (direction: "in" | "out") => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  isPreviewOpen,
  setIsPreviewOpen,
  previewUrl,
  selectedFile,
  zoom,
  handleZoom,
}) => {
  if (!isPreviewOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-6 relative max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Pré-visualização do arquivo</h2>
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="border rounded-lg p-4 flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleZoom("in")}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={() => handleZoom("out")}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ZoomOut size={20} />
              </button>
              <span className="text-sm">{zoom}%</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 hover:bg-gray-100 rounded">
                <Edit2 size={20} />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Download size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto bg-gray-100 flex items-center justify-center">
            {selectedFile?.type.includes("pdf") ? (
              <iframe
                src={previewUrl}
                className="w-full h-full"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: "center center",
                }}
              />
            ) : (
              <div className="text-center p-4">
                <p className="text-gray-500">
                  Visualização não disponível para este tipo de arquivo
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {selectedFile?.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
