import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import PaymentDetailsForm from "@/page/Payment Details/PaymentDetailsForm.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPaymentDetails} from "@/State/Withdrawal/Action.js";

const PaymentDetails = () => {

  const { withdrawal } = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaymentDetails({jwt:localStorage.getItem("jwt")}));
  },[])

  return (
    <div className="px-20">

      <h1 className="text-3xl font-bold py-10">Payment Details</h1>

      {withdrawal.paymentDetails? (<Card>
        <CardHeader>
          <CardTitle className="text-left">
            Tinkoff Bank
          </CardTitle>
          <CardDescription className="text-left">
            A/C Number : {withdrawal.paymentDetails?.accountNumber}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">

            <p className="text-left w-32">Card Holder</p>
            <p className="text-left text-gray-400"> : {withdrawal.paymentDetails?.accountHolderName}</p>

          </div>
          <div className="flex items-center">
            <p className="text-left w-32">INN</p>
            <p className="text-left text-gray-400"> : {withdrawal.paymentDetails?.bankName}</p>
          </div>
        </CardContent>
      </Card>) : (<Dialog>
        <DialogTrigger>
          <Button className="py-6">Add payment details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>

          </DialogHeader>
          <PaymentDetailsForm/>
        </DialogContent>
      </Dialog>)}



    </div>
  );
};

export default PaymentDetails;