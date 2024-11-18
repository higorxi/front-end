import Sidebar from "./sidebar";
import { Table, TableBody } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import DocumentSelectors from "./document/DocumentSelectors";
import DocumentTableHeader from "./document/DocumentTableHeader";
import DocumentTableRow from "./document/DocumentTableRow";
import Pagination from "./document/Pagination";
import SearchAndFilter from "./document/SearchAndFilter";
import DocumentCreator from "./document/DocumentCreator";

export function Documents() {
  const documents = [
    {
      id: "0000",
      name: "Nome do documento",
      sender: "Courtney Henry",
      totalValue: "R$200,00",
      netValue: "R$200,00",
      createdAt: "12 de abril 2024",
      updatedAt: "12 de abril 2024",
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 w-full  mx-12 p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Documentos</h1>
            <p className="text-muted-foreground">
              Crie, gerencie e visualize os documentos
            </p>
          </div>
          <SearchAndFilter />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <DocumentSelectors />
          <DocumentCreator/>
        </div>

        <div className="border rounded-lg overflow-x-auto">
          <Table>
            <DocumentTableHeader />
            <TableBody>
              {documents.map((document) => (
                <DocumentTableRow key={document.id} document={document} />
              ))}
            </TableBody>
          </Table>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
