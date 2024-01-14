const dev = process.env.NODE_ENV !== "production";
const port = 3002;

import app from "./app.js";

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on PORT ${port} => http://localhost:${port}`);
});
