import React, { useState } from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import AlertModal from "./Shared/AlertModal";
import { deleteTodo } from "@/lib/todo-lib";

const DeleteTodo = ({ todoId, fetchList }) => {
    const [showConfirm, setshowConfirm] = useState(false);
    const { toast } = useToast();

    const deleteTodoHandler = () => {
        deleteTodo(todoId)
            .then(() => {
                toast({
                    title: "Item Deleted",
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
            <Button
                className="p-3 h-[40px] mr-3"
                variant="destructive"
                onClick={() => setshowConfirm(true)}
                type="submit"
            >
                <Trash2 size={17} />
            </Button>

            <AlertModal
                open={showConfirm}
                onClose={setshowConfirm}
                onConfirm={deleteTodoHandler}
                content={{
                    title: "Are you sure you want to Delete this item?",
                    description:
                        "This action cannot be undone adn the item will be delted from our server",
                }}
            />
        </>
    );
};

export default DeleteTodo;
