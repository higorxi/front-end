import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InfoIcon from "../ui/info-icon";
import { isMobile } from 'react-device-detect';

const DocumentSelectors = () => {
  return (
    <div className={`flex ${isMobile ? 'flex-col gap-4 w-full' : 'gap-8'}`}>
      <div className="flex flex-col text-start w-full sm:w-full md:w-[180px]">
        <label
          htmlFor="origem-do-documento"
          className="font-bold text-[14px] text-gray-600 mb-2 flex items-center gap-2"
        >
          Origem do documento
          <InfoIcon
            message="Escolha a origem do documento a fim de filtrar."
            title="Origem do Documento"
          />
        </label>
        <Select defaultValue="digitalizado">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="digitalizado">Digitalizado</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="importado">Importado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col text-start w-full sm:w-full md:w-[180px]">
        <label
          htmlFor="tipo-documental"
          className="font-bold text-[14px] text-gray-600 mb-2 flex items-center gap-2"
        >
          Tipo documental
          <InfoIcon
            message="Escolha o tipo do documento a fim de filtrar."
            title="Tipo Documental"
          />
        </label>
        <Select defaultValue="nota-fiscal">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nota-fiscal">Nota fiscal de serviço</SelectItem>
            <SelectItem value="contrato">Contrato</SelectItem>
            <SelectItem value="recibo">Recibo</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DocumentSelectors;
