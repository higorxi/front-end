import { CaretSortIcon, FileIcon } from "@radix-ui/react-icons";
import { TableHead, TableRow, TableHeader } from "@/components/ui/table";

const DocumentTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-12">
          <input type="checkbox" className="form-checkbox" />
        </TableHead>
        <TableHead className="min-w-[200px]">
          <div className="flex items-center gap-2">
            <FileIcon className="h-4 w-4 text-muted-foreground" />
            Nome do documento
            <CaretSortIcon className="h-4 w-4" />
          </div>
        </TableHead>
        <TableHead className="min-w-[150px]">Emitente</TableHead>
        <TableHead className="min-w-[150px]">Valor total dos tributos</TableHead>
        <TableHead className="min-w-[150px]">Valor líquido</TableHead>
        <TableHead className="min-w-[150px]">Data de criação</TableHead>
        <TableHead className="min-w-[150px]">Última atualização</TableHead>
        <TableHead className="w-[50px]"></TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default DocumentTableHeader;
