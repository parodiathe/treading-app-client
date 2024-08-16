import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Avatar, AvatarImage} from "@/components/ui/avatar.jsx";
import {Button} from "@/components/ui/button.jsx";
import {BookmarkFilledIcon} from "@radix-ui/react-icons";

const Activity = () => {
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
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <TableRow key={index}>
                      <TableCell>
                          <p>2024/08/13</p>
                          <p className="text-gray-400">22:56:43</p>
                      </TableCell>
                      <TableCell className="font-medium flex items-center gap-2">
                          <Avatar className="-z-50">
                              <AvatarImage
                                  src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"/>
                          </Avatar>
                          <span>Bitcoin</span>
                      </TableCell>
                      <TableCell className="">$69429</TableCell>
                      <TableCell>1364881428323</TableCell>
                      <TableCell>-0.20009</TableCell>
                      <TableCell className="">$69429</TableCell>

                      <TableCell className="text-right">345</TableCell>
                  </TableRow>)}
              </TableBody>
          </Table>

      </div>

  );
};

export default Activity;