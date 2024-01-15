import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import TodoModal from "./TodoModal";

const EditTodo = ({ todoData, fetchList }) => {
    const [openModal, setOpenModal] = useState(false);
    const { toast } = useToast();

    const updateTodoHandler = () => {};

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
