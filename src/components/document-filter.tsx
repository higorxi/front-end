'use client'

import * as React from 'react'
import { CalendarIcon} from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface DocumentFilterProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DocumentFilter({ open, onOpenChange }: DocumentFilterProps) {
  const [date, setDate] = React.useState<Date>()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] sm:max-w-none">
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
            <div className="text-sm font-medium">
              Selecione o tipo de documento necessário para, a partir dele, selecione os tipos de índice para a filtragem.
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Período de criação</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : "Selecionar período"}
                </Button>
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
            <Select>
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
            <Input placeholder="Razão social do emitente" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Valor total dos tributos</label>
            <Input placeholder="Valor em R$" type="number" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Valor líquido</label>
            <Input placeholder="Valor em R$" type="number" />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Limpar</Button>
            <Button>Aplicar filtro</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}