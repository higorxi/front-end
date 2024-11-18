import { Button } from "@/components/ui/button";

const Pagination = () => {
  return (
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
  );
};

export default Pagination;
