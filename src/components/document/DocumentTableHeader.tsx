import { TableHead, TableRow, TableHeader } from "@/components/ui/table";
import { ChevronsUpDown } from "lucide-react";

const DocumentTableHeader = () => {
  const headers = [
    { label: "Nome do documento", width: "min-w-[200px]" },
    { label: "Emitente", width: "min-w-[150px]" },
    { label: "Valor total dos tributos", width: "min-w-[150px]" },
    { label: "Valor líquido", width: "min-w-[150px]" },
    { label: "Data de criação", width: "min-w-[150px]" },
    { label: "Última atualização", width: "min-w-[150px]" },
  ];

  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-12">
          <input type="checkbox" className="form-checkbox" />
        </TableHead>
        {headers.map((header, index) => (
          <TableHead key={index} className={header.width}>
            <div className="flex items-center gap-2">
              {header.label}
              <ChevronsUpDown className="h-4 w-4" />
            </div>
          </TableHead>
        ))}
        <TableHead className="w-[50px]"></TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default DocumentTableHeader;
