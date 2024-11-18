import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DocumentSelectors = () => {
  return (
    <div className="flex items-center gap-4">
      <Select defaultValue="digitalizado">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Origem do documento" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="digitalizado">Digitalizado</SelectItem>
          <SelectItem value="manual">Manual</SelectItem>
          <SelectItem value="importado">Importado</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="nota-fiscal">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo documental" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nota-fiscal">Nota fiscal de serviço</SelectItem>
          <SelectItem value="contrato">Contrato</SelectItem>
          <SelectItem value="recibo">Recibo</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DocumentSelectors;
