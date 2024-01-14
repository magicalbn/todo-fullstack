import axios from "@/config/todoAxios.config";

export const getTodoList = async (page, limit) => {
    const { data } = await axios.get(`?page=${page}&limit=${limit}`);
    return data;
};

export const createTodo = async (body) => {
    const { data } = await axios.post(``, body);
    return data;
};

export const deleteTodo = async (todoID) => {
    const { data } = await axios.delete(`/${todoID}`);
    return data;
};
