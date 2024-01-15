import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { Check, Pencil, Trash2 } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const TodoRow = ({ eachTodo, index }) => {
    const { title, description, status } = eachTodo;

    const statusMap = {
        todo: "To Do",
        inprogress: "In Progress",
        done: "Done",
    };

    return (
        <TableRow className="cursor-pointer">
            <TableCell className="font-medium">{index}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell className="hidden md:block">{description}</TableCell>
            <TableCell>{statusMap[status]}</TableCell>
            <TableCell>
                <div className="flex gap-2 justify-end">
                    <Button variant="outline" className="p-3 h-[40px]">
                        <Pencil size={17} />
                    </Button>

                    <Button
                        className="p-3 h-[40px] bg-green-700 opacity-70 hover:opacity-100 hover:bg-green-700"
                        variant="outline"
                    >
                        <Check size={17} />
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    );
};

export default TodoRow;
