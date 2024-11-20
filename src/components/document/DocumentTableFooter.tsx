import { Table, TableFooter, TableRow, TableCell } from "../ui/table";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DocumentTableFooter({data}: {data : any}) {
  return (
    <Table className="w-full">
      <TableFooter className="bg-gray-100">
        <TableRow className="flex justify-between mx-8">
          <TableCell className="mb-4 w-1/6">
            <span className="size-3">Total</span>
            <span className="block font-normal size-3.5">{data.totalDocuments}</span>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3">n de emitentes</span>
            <span className="block font-normal size-3.5">{data.uniqueEmitentes}</span>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3">Total de tributos</span>
            <span className="block font-normal size-3.5">R$ {data.totalTributos}</span>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3">Total valor liquido</span>
            <span className="block font-normal size-3.5">R$ {data.totalValorLiquido}</span>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3"></span>
            <span className="block font-normal size-3.5"></span>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3"></span>
            <span className="block font-normal size-3.5"></span>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
