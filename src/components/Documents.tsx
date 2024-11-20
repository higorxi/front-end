"use client"
import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import { Table, TableBody } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import DocumentSelectors from "./document/DocumentSelectors";
import DocumentTableHeader from "./document/DocumentTableHeader";
import DocumentTableRow from "./document/DocumentTableRow";
import SearchAndFilter from "./document/SearchAndFilter";
import DocumentCreator from "./document/DocumentCreator";
import Footer from "./Footer";
import { DocumentTableFooter } from "./document/DocumentTableFooter";
import { getAllDocuments } from "@/service/DocumentService";
import { Document } from "@/types/interface/Document";

export function Documents() {
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchDocuments = async (page = 1) => {
    try {
      const response = await getAllDocuments(page);

      if (!response) {
        throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
      }
  
      setDocuments(response.data);
      setTotalPages(response.totalPages);
      setCurrentPage(response.currentPage);
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
    }
  };

  useEffect(() => {
    fetchDocuments(currentPage);
  }, [currentPage]);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 mx-12 p-4 space-y-4">
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
            <DocumentCreator />
          </div>

          <div className="border rounded-lg overflow-x-auto">
            <Table>
              <DocumentTableHeader />
              <TableBody>
                {documents.map((document: Document) => (
                  <DocumentTableRow key={document.id} document={document} />
                ))}
              </TableBody>
            </Table>
            <DocumentTableFooter />
          </div>

          <div className="flex justify-end items-center mt-4">
            <span className="mr-4 text-sm text-gray-500">
              Página {currentPage} de {totalPages}
            </span>
            <div className="flex space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                Anterior
              </button>
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
