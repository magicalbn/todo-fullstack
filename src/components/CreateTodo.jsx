import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import TodoModal from "./TodoModal";
import { createTodo } from "@/lib/todo-lib";
import { useToast } from "@/components/ui/use-toast";

const CreateTodo = ({ fetchList }) => {
    const [openModal, setOpenModal] = useState(false);
    const { toast } = useToast();

    const createTodoHandler = (body) => {
        createTodo(body)
            .then(() => {
                toast({
                    title: "Todo Item Created",
                    description: title.value,
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
            <Button onClick={() => setOpenModal(true)}>
                <Plus className="mr-1" /> Create
            </Button>
            <TodoModal
                create={true}
                open={openModal}
                onClose={setOpenModal}
                onSubmit={createTodoHandler}
            />
        </>
    );
};

export default CreateTodo;
