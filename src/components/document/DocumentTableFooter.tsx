import { Table, TableFooter, TableRow, TableCell } from "../ui/table"; 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DocumentTableFooter({ data }: { data: any }) {
  const formatCurrency = (value: number) => {
    return value
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      .replace("R$", "R$ ").replace(",", ".");
  };

  const totalTributosReal = data.totalTributos / 100;
  const totalValorLiquidoReal = data.totalValorLiquido / 100;

  return (
    <Table className="w-full">
      <TableFooter className="bg-gray-100 mr-12">
        <TableRow className="flex justify-between mx-12">
          <TableCell className="w-1/6">
            <span className="size-3">Total</span>
            <div className="flex flex-col items-start">
              <span className="font-normal size-3.5">
                {data.totalDocuments}
              </span>
            </div>
          </TableCell>
          <TableCell className="w-1/6 ml-28">
            <span className="size-3">n de emitentes</span>
            <div className="flex flex-col items-start">
              <span className="font-normal size-3.5">
                {data.uniqueEmitentes}
              </span>
            </div>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3">Total de tributos</span>
            <div className="flex flex-col items-start">
              <span className="font-normal size-3.5" style={{ whiteSpace: 'nowrap' }}>
                {formatCurrency(totalTributosReal)}
              </span>
            </div>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3">Total valor liquido</span>
            <div className="flex flex-col items-start">
              <span className="font-normal size-3.5" style={{ whiteSpace: 'nowrap' }}>
                {formatCurrency(totalValorLiquidoReal)}
              </span>
            </div>
          </TableCell>
          <TableCell className="w-1/6">
          </TableCell>
          <TableCell className="w-1/6">
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
