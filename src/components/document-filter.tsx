import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import InfoBox from "./ui/tooltip";

interface DocumentFilterProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DocumentFilter({ open, onOpenChange }: DocumentFilterProps) {
  const [date, setDate] = React.useState<Date | undefined>();
  const [documentType, setDocumentType] = React.useState<string | undefined>();
  const [issuer, setIssuer] = React.useState<string | undefined>();
  const [totalTax, setTotalTax] = React.useState<string | undefined>();
  const [netValue, setNetValue] = React.useState<string | undefined>();

  const isFormValid =
    documentType && issuer && totalTax && netValue && date;

  const clearFilters = () => {
    setDate(undefined);
    setDocumentType(undefined);
    setIssuer(undefined);
    setTotalTax(undefined);
    setNetValue(undefined);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:w-1/2 lg:w-1/3 xl:w-[400px] sm:max-w-none"
      >
        <SheetHeader className="space-y-2">
          <div className="flex items-center justify-between">
            <SheetTitle>Filtrar documentos</SheetTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Indique os dados necessários para realizar a filtragem
          </p>
        </SheetHeader>
        <div className="space-y-6 pt-6">
          <div className="space-y-2">
            <InfoBox text="Selecione o tipo de documento necessário para, a partir dele, selecionar os tipos de indices para a filtragem" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Período de criação</label>
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center border border-gray-300 rounded-lg w-full p-2 cursor-pointer">
                  <span className="text-sm font-normal flex-1">
                    {date
                      ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                      : "Selecionar período"}
                  </span>
                  <CalendarIcon className="ml-2 h-4 w-4 text-gray-500" />
                </div>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={ptBR}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Tipo de documento</label>
            <Select onValueChange={setDocumentType}>
              <SelectTrigger>
                <SelectValue placeholder="Nota fiscal de serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nfs">Nota fiscal de serviço</SelectItem>
                <SelectItem value="nfe">Nota fiscal eletrônica</SelectItem>
                <SelectItem value="recibo">Recibo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Emitente</label>
            <Input
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              placeholder="Razão social do emitente"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Valor total dos tributos
            </label>
            <Input
              value={totalTax}
              onChange={(e) => setTotalTax(e.target.value)}
              placeholder="Valor em R$"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Valor líquido</label>
            <Input
              value={netValue}
              onChange={(e) => setNetValue(e.target.value)}
              placeholder="Valor em R$"
              type="number"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={clearFilters}>
              Limpar
            </Button>
            <Button disabled={!isFormValid}>Aplicar filtro</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
