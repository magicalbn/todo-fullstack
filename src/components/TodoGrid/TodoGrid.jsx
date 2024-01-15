import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import TodoRow from "./TodoRow";

const TodoGrid = ({ todoList, fetchList }) => {
    return (
        <Table>
            <TableCaption>A list of your ToDos.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:block">
                        Description
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[150px]"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todoList.map((eachTodo, index) => {
                    return (
                        <TodoRow
                            key={eachTodo._id}
                            eachTodo={eachTodo}
                            index={index + 1}
                            fetchList={fetchList}
                        />
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default TodoGrid;
