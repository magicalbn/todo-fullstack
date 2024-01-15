import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import TodoModal from "./TodoModal";
import { updateTodo } from "@/lib/todo-lib";

const EditTodo = ({ todoData, fetchList }) => {
    const [openModal, setOpenModal] = useState(false);
    const { toast } = useToast();

    const updateTodoHandler = (body) => {
        updateTodo(todoData._id, body)
            .then(() => {
                toast({
                    title: "Todo Item Updated",
                    description: body.title,
                });
                setOpenModal(false);
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
                onClick={() => setOpenModal(true)}
                variant="outline"
                className="p-3 h-[40px]"
            >
                <Pencil size={17} />
            </Button>
            <TodoModal
                create={false}
                open={openModal}
                onClose={setOpenModal}
                onSubmit={updateTodoHandler}
                data={{ ...todoData, fetchList }}
            />
        </>
    );
};

export default EditTodo;
