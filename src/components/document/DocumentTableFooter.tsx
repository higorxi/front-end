import { Table, TableFooter, TableRow, TableCell } from "../ui/table";

export function DocumentTableFooter() {
  return (
    <Table className="w-full">
      <TableFooter className="bg-gray-100">
        <TableRow className="flex justify-between mx-8">
          <TableCell className="mb-4 w-1/6">
            <span className="size-3">Total</span>
            <span className="block font-normal size-3.5">9</span>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3">n de emitentes</span>
            <span className="block font-normal size-3.5">8</span>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3">Total de tributos</span>
            <span className="block font-normal size-3.5">R$1.800,00</span>
          </TableCell>
          <TableCell className="w-1/6">
            <span className="size-3">Total valor liquido</span>
            <span className="block font-normal size-3.5">R$18.000,00</span>
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
