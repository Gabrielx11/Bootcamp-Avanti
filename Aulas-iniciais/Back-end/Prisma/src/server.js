import express from "express"
import { routes } from "./routes/index.js";
import { ClienteController } from "./controller/ClientController.js";

const app = express();

app.use(express.json());

app.use(routes)

app.use(ClienteController)

app.listen(3000, () => {
    console.log("Running server")
});