import axios from "@/config/todoAxios.config";

export const getTodoList = async (filter, page, limit) => {
    const { data } = await axios.get(
        `?status=${filter}&page=${page}&limit=${limit}`
    );
    return data;
};

export const createTodo = async (body) => {
    const { data } = await axios.post(``, body);
    return data;
};

export const updateTodo = async (id, body) => {
    const { data } = await axios.put(`/${id}`, body);
    return data;
};

export const deleteTodo = async (todoID) => {
    const { data } = await axios.delete(`/${todoID}`);
    return data;
};
