import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/todo", (req, res) => {
    res.json({
        msg: "APIs here",
    });
});

app.use(express.static(process.cwd() + "/dist"));

// app.use("*", (req, res) => {
//     res.json({
//         message: "routes available at /todo",
//     });
// });

export default app;
