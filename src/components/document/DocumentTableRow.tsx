import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { TableRow, TableCell } from "@/components/ui/table";
import { Trash, FileText, View } from "lucide-react";
import { Document } from "@/types/interface/Document";

const DocumentTableRow = ({ document }: { document: Document }) => {
  return (
    <TableRow>
      <TableCell>
        <input type="checkbox" className="form-checkbox" />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-muted-foreground" />
          <div className="flex flex-col">
            <span className="font-medium">Cód. {document.id}</span>
            <span className="text-muted-foreground ">{document.name}</span>
          </div>
        </div>
      </TableCell>
      <TableCell>{document.sender}</TableCell>
      <TableCell>{document.totalValue}</TableCell>
      <TableCell>{document.netValue}</TableCell>
      <TableCell>{document.createdAt}</TableCell>
      <TableCell>{document.updatedAt}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex items-center gap-2">
              <View className="h-4 w-4" /> Visualizar
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Trash className="h-4 w-4" /> Excluir documento
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default DocumentTableRow;
