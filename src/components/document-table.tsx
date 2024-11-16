"use client"

import * as React from "react"
import { CaretSortIcon, DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { FileIcon, FilterIcon, PlusIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Sidebar from "./sidebar"

export function DocumentTable() {
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
    {
      id: "0000",
      name: "Nome do documento",
      sender: "Courtney Henry",
      totalValue: "R$200,00",
      netValue: "R$200,00",
      createdAt: "12 de abril 2024",
      updatedAt: "12 de abril 2024",
    },
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
      {/* Sidebar fixa no lado esquerdo */}
      <Sidebar/>

      {/* Conteúdo principal */}
      <div className="flex-1 w-full max-w-7xl mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Documentos</h1>
            <p className="text-muted-foreground">
              Crie, gerencie e visualize os documentos
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar documentos"
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
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
                <SelectItem value="nota-fiscal">
                  Nota fiscal de serviço
                </SelectItem>
                <SelectItem value="contrato">Contrato</SelectItem>
                <SelectItem value="recibo">Recibo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Novo documento
          </Button>
        </div>

        <div className="border rounded-lg overflow-x-auto">
          <Table>
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
                <TableHead className="min-w-[150px]">
                  Valor total dos tributos
                </TableHead>
                <TableHead className="min-w-[150px]">Valor líquido</TableHead>
                <TableHead className="min-w-[150px]">Data de criação</TableHead>
                <TableHead className="min-w-[150px]">
                  Última atualização
                </TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((document, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <input type="checkbox" className="form-checkbox" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Cód. {document.id}</span>
                      <span className="text-muted-foreground">
                        {document.name}
                      </span>
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
                        <DropdownMenuItem>Visualizar</DropdownMenuItem>
                        <DropdownMenuItem>Excluir documento</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between px-4 py-2 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Total</span>
              <span>9 documentos</span>
              <span>•</span>
              <span>nº de emitentes</span>
              <span>8 emitentes</span>
              <span>•</span>
              <span>Total de tributos</span>
              <span>R$1.800,00</span>
              <span>•</span>
              <span>Total valor líquido</span>
              <span>R$1.800,00</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">09 de 100</span>
              <Button variant="outline" size="sm">
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
