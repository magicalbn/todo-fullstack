import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import StatusDropDown from "./Shared/StatusDropDown";
import DeleteTodo from "./DeleteTodo";

const TodoModal = ({ open, onClose, create, onSubmit, data }) => {
    const [title, setTitle] = useState({
        value: data ? data.title : "",
        error: false,
    });

    const [description, setDescription] = useState(
        data ? data.description : ""
    );
    const [status, setStatus] = useState(data ? data.status : "todo");

    const closeModal = (val) => {
        if (create) {
            setTitle({ value: "", error: false });
            setDescription("");
            setStatus("todo");
        }
        onClose(val);
    };

    const onChangeHandler = (e, val) => {
        switch (val) {
            case "title": {
                setTitle({
                    value: e.target.value,
                    error: false,
                });
                break;
            }
            case "description": {
                setDescription(e.target.value);
                break;
            }
            case "status": {
                setStatus(e);
                break;
            }
            default:
                return;
        }
    };

    const validate = () => {
        if (title.value.trim().length) {
            return true;
        } else {
            setTitle({ ...title, error: true });
            return false;
        }
    };

    const submitHandler = () => {
        const isValid = validate();
        if (isValid) {
            const body = {
                title: title.value,
                description,
                status,
            };
            onSubmit(body);
        }
    };

    return (
        <>
            <Dialog open={open} onOpenChange={closeModal}>
                <DialogContent className="w-[80%]">
                    <DialogHeader>
                        <DialogTitle>
                            {create ? "Create" : "Update"} Todo
                        </DialogTitle>
                        <DialogDescription>
                            {create ? "Create a New " : "Update an existing "}
                            Todo Item
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                value={title.value}
                                onChange={(e) => onChangeHandler(e, "title")}
                                defaultValue={data ? data.title : ""}
                                id="title"
                                className={`col-span-3 ${
                                    title.error ? "border-red-600" : null
                                }`}
                                placeholder="Type your Title here"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                                htmlFor="description"
                                className="text-right self-start"
                            >
                                Description
                            </Label>

                            <Textarea
                                value={description}
                                onChange={(e) =>
                                    onChangeHandler(e, "description")
                                }
                                defaultValue={data ? data.description : ""}
                                placeholder="Type your Descrption here"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">
                                Status
                            </Label>

                            <StatusDropDown
                                onValueChange={(e) =>
                                    onChangeHandler(e, "status")
                                }
                                defaultValue={status}
                                filter={false}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <div className="flex justify-end items-center">
                            {!create && data && (
                                <DeleteTodo
                                    todoId={data._id}
                                    fetchList={data.fetchList}
                                />
                            )}
                            <Button onClick={submitHandler} type="submit">
                                {create ? "Create" : "Update"}
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default TodoModal;
