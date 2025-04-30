import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from "next/link"

export function TableUser(props: { columns: any, data: any }) {

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        {props.columns.map((column: any) => {
                            return (
                                <TableHead key={column.id}>{column.Header}</TableHead>
                            )
                        })}
                    
                    </TableRow>
                </TableHeader>
            <TableBody>
                
                
                {props.data.map((row: any) => {
                    return (
                        <TableRow key={row.id}>
                                
                                    <TableCell className="font-medium"><Link href={`teste/${row.id}`}>{row.title}</Link></TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.category}</TableCell>
                                
                            </TableRow>
                    )
                }) }
                
                
            </TableBody>
            </Table>

    )
}