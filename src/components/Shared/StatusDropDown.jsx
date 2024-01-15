import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const StatusDropDown = ({ onValueChange, defaultValue, filter }) => {
    return (
        <>
            <Select
                defaultValue={defaultValue}
                onValueChange={(e) => {
                    onValueChange(e);
                }}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue value="todo" placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                    {filter && <SelectItem value="all">All</SelectItem>}
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="inprogress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                </SelectContent>
            </Select>
        </>
    );
};

export default StatusDropDown;
