"use client";

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
import { Document, DocumentSend } from "@/types/interface/Document";
import { isMobile } from 'react-device-detect';

function calculateFooterData(documents: DocumentSend[]) {
  if (!documents || documents.length === 0) {
    return {
      totalDocuments: 0,
      uniqueEmitentes: 0,
      totalTributos: 0,
      totalValorLiquido: 0,
    };
  }

  const totalDocuments = documents.length;

  const emitentes = new Set(documents.map((doc) => doc.sender));
  const uniqueEmitentes = emitentes.size;

  const totalTributos = documents.reduce((sum, doc) => {
    const total = parseFloat(doc.totalValue.replace(/[^\d,-]/g, '').replace(',', '.'));
    return sum + total;
  }, 0);

  const totalValorLiquido = documents.reduce((sum, doc) => {
    const net = parseFloat(doc.netValue.replace(/[^\d,-]/g, '').replace(',', '.'));
    return sum + net;
  }, 0);

  return {
    totalDocuments,
    uniqueEmitentes,
    totalTributos,
    totalValorLiquido,
  };
}

export function Documents() {
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [footerData, setFooterData] = useState({
    totalDocuments: 0,
    uniqueEmitentes: 0,
    totalTributos: 0,
    totalValorLiquido: 0,
  });

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

  useEffect(() => {
    setFooterData(calculateFooterData(documents));
  }, [documents]);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className={`${isMobile ? "flex-1 mx-6 p- space-y-4" : "flex-1 mx-12 p-4 space-y-4"}`}>
          <div className={`flex ${isMobile ? "flex-col gap-4" : "justify-between items-center"}`}>
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

          <div className="border rounded-lg overflow-hidden">
            <div
              className={`relative ${isMobile ? "max-w-[290px] max-h-[500px] overflow-x-auto" : "w-full"}`}
            >
              <Table>
                <DocumentTableHeader />
                <TableBody>
                  {documents.map((document: Document) => (
                    <DocumentTableRow key={document.id} document={document} />
                  ))}
                </TableBody>
              </Table>

              {!isMobile && <DocumentTableFooter data={footerData} />}
            </div>
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
