import React, { useEffect, useState } from "react";
import Layout from "./Shared/Layout";
import { getTodoList } from "@/lib/todo-lib";

const Home = () => {

    const [todoList, setTodoList] = useState([]);
    const [totalItems, setTotalItems] = useState(1);

    useEffect(() => {
        fetchList();
    }, []);

    const fetchList = () => {
        getTodoList()
            .then((res) => {
                console.log(res)
                setTodoList(res.data);
                setTotalItems(res.pagination?.total);
            })
            .catch((e) => console.log(e));
    };
    return <Layout>sample</Layout>;
};

export default Home;
