import React from 'react';
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";
import {DotIcon} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {BookmarkIcon} from "@radix-ui/react-icons";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import TreadingForm from "@/page/Stock Details/TreadingForm.jsx";
import StockChart from "@/page/Home/StockChart.jsx";

const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">

          <div>
            <Avatar>
              <AvatarImage
                  src={
                    "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                  }
                  />
            </Avatar>
          </div>
            <div>
            <div className="flex items-center gap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Bitcoin</p>

            </div>
            <div className="flex items-end gap-2">
                <p className="text-xl font-bold">$6554</p>
                <p className="text-red-600">
                        <span>-1319049822.578</span>
                        <span>(-0.29803%)</span>
                </p>

            </div>
        </div>

      </div>
          <div className="flex items-center gap-4">
              <Button>
                  {true? ( <BookmarkIcon className="h-6 w-6" />  ) : ( <BookmarkIcon className="h-6 w-6"/> )}

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
            <StockChart/>
        </div>
    </div>
  );
};

export default StockDetails;