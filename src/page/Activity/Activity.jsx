import React, {useEffect} from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Avatar, AvatarImage} from "@/components/ui/avatar.jsx";
import {Button} from "@/components/ui/button.jsx";
import {BookmarkFilledIcon} from "@radix-ui/react-icons";
import {useDispatch, useSelector} from "react-redux";
import {addItemToWatchlist} from "@/State/Watchlist/Action.js";
import {getAllOrdersForUser} from "@/State/Order/Action.js";
import {calculateProfite} from "@/utils/calculateProfite.js";

const Activity = () => {
    const dispatch = useDispatch()
    const { order } = useSelector(store => store)

    useEffect(() => {
        dispatch(getAllOrdersForUser({jwt:localStorage.getItem("jwt")}))
    },[])

  return (

      <div className="p-5 lg:p-20">
          <h1 className="font-bold text-3xl pb-5">Activity</h1>

          <Table className="border">
              <TableHeader>
                  <TableRow>
                      <TableHead className="text-center py-5">Date & Time</TableHead>
                      <TableHead>Treading pair</TableHead>
                      <TableHead className="text-center">Buy price</TableHead>
                      <TableHead className="text-center">Selling price</TableHead>
                      <TableHead className="text-center">Order type</TableHead>
                      <TableHead className="text-center">Profit/Loss</TableHead>
                      <TableHead className="text-right">Value</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  {order.orders.map((item, index) => <TableRow key={index}>
                      <TableCell>
                          <p>2024/08/13</p>
                          <p className="text-gray-400">22:56:43</p>
                      </TableCell>
                      <TableCell className="font-medium flex items-center gap-2">
                          <Avatar className="-z-50">
                              <AvatarImage
                                  src={item.orderItem.coin.image}/>
                          </Avatar>
                          <span>{item.orderItem.coin.name}</span>
                      </TableCell>
                      <TableCell className="">${item.orderItem.buyPrice}</TableCell>
                      <TableCell>{item.orderItem.sellPrice}</TableCell>
                      <TableCell>{item.orderType}</TableCell>
                      <TableCell className="">{calculateProfite(item)}</TableCell>

                      <TableCell className="text-right">{item.price}</TableCell>
                  </TableRow>)}
              </TableBody>
          </Table>

      </div>

  );
};

export default Activity;