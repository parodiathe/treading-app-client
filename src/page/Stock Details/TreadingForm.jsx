import {Input} from "@/components/ui/input.jsx";
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";
import {DotIcon} from "lucide-react";
import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getUserWallet} from "@/State/Wallet/Action.js";
import {getAssetDetails} from "@/State/Asset/Action.js";
import {payOrder} from "@/State/Order/Action.js";

const TreadingForm = () => {

    const [orderType, setOrderType] = React.useState("BUY");
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const {coin, wallet, asset} = useSelector((store) => store);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const amount = e.target.value;
        console.log("Entered amount:", amount);
        setAmount(amount);
        const volume = calculateBuyCost(
            amount,
            coin.coinDetails.market_data.current_price.usd
        );
        console.log("Calculated volume:", volume);
        setQuantity(volume)
    };

    const calculateBuyCost = (amount, price) => {
       let volume = amount / price

        let decimalPlaces = Math.max(2, price.toString().split(".")[0].length)

        return volume.toFixed(decimalPlaces);
    };

    useEffect(() => {
        console.log("Fetching user wallet and asset details...");
        dispatch(getUserWallet(localStorage.getItem("jwt")))
        dispatch(
            getAssetDetails({
                coinId: coin.coinDetails.id,
                jwt: localStorage.getItem("jwt"),
        })
        );
    }, []);

    const handleBuyCrypto=()=> {
        console.log("Order Type:", orderType);
        console.log("Amount:", amount);
        console.log("Quantity:", quantity);
        dispatch(payOrder({
                jwt: localStorage.getItem("jwt"),
                amount,
                orderData: {
                    coinId: coin.coinDetails?.id,
                    quantity,
                    orderType,

                },
            })
        );
    };

  return (
    <div className="space-y-10 p-5">

        <div>
            <div className="flex gap-4 items-center justify-between">
                <Input
                    className="py-7 focus:outline-none"
                    placeholder="Enter Amount..."
                    onChange={handleChange}
                    type="number"
                    name="amount"
                    />
                <div>
                    <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
                        {quantity}
                    </p>
                </div>
            </div>
            {false && <h1 className="text-red-600 text-center pt-4">Insufficient wallet balance to buy</h1>}
        </div>

        <div className="flex gap-5 items-center">

            <div>
                <Avatar>
                    <AvatarImage
                        src={
                            coin.coinDetails?.image.small
                        }
                    />
                </Avatar>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <p>{coin.coinDetails.symbol.toUpperCase()}</p>
                    <DotIcon className="text-gray-400"/>
                    <p className="text-gray-400">{coin.coinDetails.name}</p>

                </div>
                <div className="flex items-end gap-2">
                    <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
                    <p className="text-red-600">
                        <span>{coin.coinDetails.market_data.price_change_percentage_24h}</span>
                        <span>(24h)</span>
                    </p>

                </div>
            </div>

        </div>

        <div className="flex items-center justify-between">

            <p>Order Type</p>
            <p>{orderType}</p>

        </div>

        <div className="flex items-center justify-between">

            <p>{orderType === "BUY" ? "Available Case" : "Available Quantity"}</p>
            <p>{orderType === "BUY" ? "$" + wallet.userWallet?.balance : (asset.assetDetails?.quantity || 0)}</p>


        </div>

        <div>
            <Button
                onClick={handleBuyCrypto}
                className={`w-full py-6
             ${orderType==="SELL"?"bg-red-600 text-white":""}`}>
                {orderType}
            </Button>
            <Button
                variant="link"
                className="w-full mt-5 text-xl"
                onClick={()=>setOrderType(orderType==="BUY"?"SELL":"BUY")}>
                {orderType==="BUY"?"Or Sell":"Or Buy"}
            </Button>
        </div>

    </div>
  );
};

export default TreadingForm;