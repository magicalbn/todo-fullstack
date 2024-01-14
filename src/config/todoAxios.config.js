import axios from "axios";

const instance = axios.create({
    baseURL: "https://todo-fullstack-backend.vercel.app/todo",
});

export default instance;
