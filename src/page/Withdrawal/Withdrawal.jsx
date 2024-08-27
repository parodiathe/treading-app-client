import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getWithdrawalHistory} from "@/State/Withdrawal/Action.js";

const Withdrawal = () => {

    const dispatch = useDispatch();
    const { wallet, withdrawal } = useSelector(store => store);

    useEffect(() => {
        dispatch(getWithdrawalHistory(localStorage.getItem("jwt")));
    },[])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    };

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
            {withdrawal.history.map((item, index) => <TableRow key={index}>
              <TableCell>
                <p>{formatDate(item.date)}</p>
              </TableCell>

              <TableCell className="">Bank</TableCell>

              <TableCell className="">${item.amount}</TableCell>

              <TableCell className="text-right">{item.status}</TableCell>
            </TableRow>)}
          </TableBody>
        </Table>

      </div>
  );
};

export default Withdrawal;