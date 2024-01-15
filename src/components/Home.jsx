import React, { useEffect, useState } from "react";
import Layout from "./Shared/Layout";
import { getTodoList } from "@/lib/todo-lib";
import TodoGrid from "./TodoGrid/TodoGrid";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import CreateTodo from "./CreateTodo";
import FilterTodo from "./FilterTodo";

const Home = () => {
    const [todoList, setTodoList] = useState([]);
    const [totalItems, setTotalItems] = useState(1);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        fetchList();
    }, [filter]);

    const fetchList = () => {
        getTodoList(filter)
            .then((res) => {
                setTodoList(res.data);
                setTotalItems(res.pagination?.total);
            })
            .catch((e) => console.log(e));
    };
    return (
        <Layout>
            <div className="mt-10 container">
                <div className="flex justify-between gap-5 m-5">
                    <FilterTodo filter={true} setFilter={setFilter} />
                    <CreateTodo fetchList={fetchList} />
                </div>
                <TodoGrid todoList={todoList} fetchList={fetchList} />
            </div>
        </Layout>
    );
};

export default Home;
