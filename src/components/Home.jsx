import React, { useEffect, useState } from "react";
import Layout from "./Shared/Layout";
import { getTodoList } from "@/lib/todo-lib";
import TodoGrid from "./TodoGrid/TodoGrid";
import CreateTodo from "./CreateTodo";
import FilterTodo from "./FilterTodo";
import TodoPaginations from "./TodoPagination/TodoPaginations";

const Home = () => {
    const [todoList, setTodoList] = useState([]);
    const [totalItems, setTotalItems] = useState(1);
    const [filter, setFilter] = useState("all");

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    useEffect(() => {
        fetchList();
    }, [filter, currentPage]);

    const fetchList = () => {
        getTodoList(filter, currentPage)
            .then((res) => {
                setTodoList(res.data);
                setTotalItems(res.pagination?.total);
            })
            .catch((e) => console.log(e));
    };

    const changePageHandler = (next) => {
        const totalPages = Math.ceil(totalItems / rowsPerPage);
        if (next) {
            if (currentPage >= totalPages) {
                return;
            }
            setCurrentPage(currentPage + 1);
        } else {
            if (currentPage === 1) {
                return;
            }

            setCurrentPage(currentPage - 1);
        }
    };

    const filterChangeHadnler = (val) => {
        setFilter(val);
        if (currentPage != 1) {
            setCurrentPage(1);
        }
    };

    return (
        <Layout>
            <div className="mt-10 container">
                <div className="flex justify-between gap-5 m-5">
                    <FilterTodo filter={true} setFilter={filterChangeHadnler} />
                    <CreateTodo fetchList={fetchList} />
                </div>
                <TodoGrid todoList={todoList} fetchList={fetchList} />
                <TodoPaginations
                    totalPages={Math.ceil(totalItems / rowsPerPage)}
                    currentPage={currentPage}
                    changePageHandler={changePageHandler}
                />
            </div>
        </Layout>
    );
};

export default Home;
