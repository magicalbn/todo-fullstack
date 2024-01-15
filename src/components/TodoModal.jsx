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

const TodoModal = ({ open, onClose, create, onSubmit }) => {
    const [title, setTitle] = useState({ value: "", error: false });

    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("todo");

    const closeModal = (val) => {
        setTitle({ value: "", error: false });
        setDescription("");
        setStatus("todo");
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
            console.log({ title: title.value, description, status });

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
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {create ? "Create" : "Update"} Todo
                        </DialogTitle>
                        <DialogDescription>
                            {create ? "Create" : "Update"} a New Todo Item
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
                        <Button onClick={submitHandler} type="submit">
                            {create ? "Create" : "Update"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default TodoModal;
