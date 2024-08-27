import React, {useEffect} from 'react';
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";
import {DotIcon} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {BookmarkFilledIcon, BookmarkIcon} from "@radix-ui/react-icons";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import TreadingForm from "@/page/Stock Details/TreadingForm.jsx";
import StockChart from "@/page/Home/StockChart.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchCoinDetails} from "@/State/Coin/Action.js";
import {addItemToWatchlist, getUserWatchlist} from "@/State/Watchlist/Action.js";
import {existInWatchlist} from "@/utils/existInWatchlist.js";

const StockDetails = () => {

    const {coin, watchlist} = useSelector(store=>store);

    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {

        dispatch(fetchCoinDetails({coinId:id, jwt:localStorage.getItem("jwt")}))
        dispatch(getUserWatchlist(localStorage.getItem("jwt")))
    }, [id]);

    const handleAddToWatchlist = ()=> {
        dispatch(addItemToWatchlist({coinId:coin.coinDetails?.id, jwt:localStorage.getItem("jwt")}))
    }

  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
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
                <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">{coin.coinDetails?.name}</p>

            </div>
            <div className="flex items-end gap-2">
                <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
                <p className="text-red-600">
                        <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                        <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
                </p>

            </div>
        </div>

      </div>
          <div className="flex items-center gap-4">
              <Button onClick={handleAddToWatchlist}>
                  {existInWatchlist(watchlist.items, coin.coinDetails) ? ( <BookmarkFilledIcon className="h-6 w-6" />  ) : ( <BookmarkIcon className="h-6 w-6"/> )}

              </Button>
              <Dialog>
                  <DialogTrigger>
                      <Button size="lg">Tread</Button>
                  </DialogTrigger>
                  <DialogContent>
                      <DialogHeader>
                          <DialogTitle>How much do you want to spend?</DialogTitle>
                  
                      </DialogHeader>
                      <TreadingForm/>
                  </DialogContent>
              </Dialog>

          </div>
      </div>
        <div className="mt-14">
            <StockChart coinId={id}/>
        </div>
    </div>
  );
};

export default StockDetails;