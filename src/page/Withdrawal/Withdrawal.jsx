import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Avatar, AvatarImage} from "@/components/ui/avatar.jsx";

const Withdrawal = () => {
  return (
      <div className="p-5 lg:p-20">
        <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>

        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center py-5">Date</TableHead>
              <TableHead className="text-center">Method</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <TableRow key={index}>
              <TableCell>
                <p>August 14, 2024 at 22:48</p>
              </TableCell>

              <TableCell className="">Bank</TableCell>

              <TableCell className="">$69429</TableCell>

              <TableCell className="text-right">345</TableCell>
            </TableRow>)}
          </TableBody>
        </Table>

      </div>
  );
};

export default Withdrawal;