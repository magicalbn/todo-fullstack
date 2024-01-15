import React, { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { Check, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import AlertModal from "../Shared/AlertModal";
import { updateTodo } from "@/lib/todo-lib";

const TodoRow = ({ eachTodo, index, fetchList }) => {
    const { title, description, status } = eachTodo;
    const [showConfirm, setshowConfirm] = useState(false);
    const { toast } = useToast();

    const statusMap = {
        todo: "To Do",
        inprogress: "In Progress",
        done: "Done",
    };

    const showConfirmationModal = () => {
        setshowConfirm(true);
    };

    const markTodoDone = () => {
        if (status === "done") {
            return;
        }
        const body = {
            title,
            description,
            status: "done",
        };
        console.log("marked as done");
        updateTodo(eachTodo._id, body)
            .then(() => {
                toast({
                    title: "Item Status changed to done",
                    description: title,
                });
                fetchList();
            })
            .catch((e) => {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Something went wrong",
                });
            });
    };

    return (
        <>
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
                            onClick={showConfirmationModal}
                        >
                            <Check size={17} />
                        </Button>
                        <AlertModal
                            open={showConfirm}
                            onClose={setshowConfirm}
                            onConfirm={markTodoDone}
                            content={{
                                title:
                                    status === "done"
                                        ? "Todo already marked as Done"
                                        : "Do you mark this item as Done?",
                                description: "",
                            }}
                        />
                    </div>
                </TableCell>
            </TableRow>
        </>
    );
};

export default TodoRow;
