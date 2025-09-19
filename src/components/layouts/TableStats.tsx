import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import stats from "../../../data/statsData";
const TableStats = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-bold text-blue-700 mb-4">Statistiques des tâches</h2>
            <div className="w-full max-w-md">
                <Table className="border rounded-lg shadow-md bg-white">
                <TableCaption className="text-lg text-gray-600 mb-2">Stats</TableCaption>
                <TableHeader className="bg-blue-200">
                    <TableRow>
                    <TableHead className="w-1/2 text-center font-bold text-lg">Tâche Statut</TableHead>
                    <TableHead className="w-1/2 text-center font-bold text-lg">Nombre</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {stats.map((stat, index: number) => (
                        <TableRow className="hover:bg-blue-50" key={index}>
                        <TableCell className="font-medium text-center text-lg text-gray-700">{stat.state}</TableCell>
                        <TableCell className="text-center text-lg text-gray-700"> {stat.count} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
        </div>
     );
}
 
export default TableStats;