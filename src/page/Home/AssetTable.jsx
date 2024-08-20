import React, {useEffect} from 'react';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Avatar, AvatarImage} from "@/components/ui/avatar.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getCoinList} from "@/State/Coin/Action.js";
import {ScrollArea} from "@/components/ui/scroll-area.jsx";

const AssetTable = ({coin, category}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

  return (
      <Table>
          <ScrollArea className={`${category==="all"?"h-[76vh]":"h-[82vh]"}`}>
              <TableHeader>
                  <TableRow>
                      <TableHead className="w-[100px]">Coin</TableHead>
                      <TableHead className="text-center">SYMBOL</TableHead>
                      <TableHead className="text-center">VOLUME</TableHead>
                      <TableHead className="text-center">MARKET CAP</TableHead>
                      <TableHead className="text-center">24h</TableHead>
                      <TableHead className="text-right">PRICE</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  {coin.map((item, index) => <TableRow key={item.id}>
                      <TableCell onClick={()=>navigate(`/market/${item.id}`)} className="font-medium flex items-center gap-2">
                          <Avatar className="-z-50">
                              <AvatarImage src={item.image}/>
                          </Avatar>
                          <span>{item.name}</span>
                      </TableCell>
                      <TableCell>{item.symbol}</TableCell>
                      <TableCell>{item.total_volume}</TableCell>
                      <TableCell>{item.market_cap}</TableCell>
                      <TableCell>{item.price_change_percentage_24h}</TableCell>
                      <TableCell className="text-right">${item.current_price}</TableCell>
                  </TableRow>)}
              </TableBody>
          </ScrollArea>
      </Table>
  );
};

export default AssetTable;