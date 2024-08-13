import React from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.jsx";
import {DragHandleHorizontalIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import Sidebar from "@/page/Navbar/Sidebar.jsx";

const Navbar = () => {
    return (
        <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0
    left-0 right-0 flex justify-between items-center'>

            <div className='flex items-center gap-3'>

                <Sheet>
                    <SheetTrigger>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full h-11 w-11"
                        >
                            <DragHandleHorizontalIcon className='h-7 w-7'/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        className="w-72 border-r-0 flex flex-col justify-center"
                        side="left">
                        <SheetHeader>
                            <SheetTitle>
                                <div className="text-3xl flex justify-center items-center gap-1">
                                    <Avatar>
                                        <AvatarImage src="https://i.ibb.co/znw1zMJ/2024-08-13-02-09-43-preview-rev-1.png"/>
                                    </Avatar>
                                    <div>
                                        <span className="font-bold text-orange-700">Cool</span>
                                        <span>Treading</span>
                                    </div>

                                </div>
                            </SheetTitle>
                        </SheetHeader>
                        <Sidebar/>
                    </SheetContent>
                </Sheet>

                <p className="text-sm lg:text-base cursor-pointer">
                    Makushev Treading
                </p>
                <div className="p-0 ml-9">

                    <Button variant="outline" className="flex items-center gap-3">
                        <MagnifyingGlassIcon/>
                        <span>Search</span>
                    </Button>

                </div>
            </div>
            <div>
                <Avatar>
                    <AvatarFallback>
                        Z
                    </AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};

export default Navbar;