import { Router } from "express";
import { ClienteController } from "../controller/ClientController.js";
import { OrderCrontroller } from "../controller/OrderController.js";
 
     //      Organização das pastas

const routes = Router();
const clienteController = new ClienteController();
const orderController = new OrderCrontroller();

          //  ROTAS CLIENT
routes.get("/", clienteController.findAllClients)
routes.get("/client/:id", clienteController.findClientsById)
routes.post("/client", clienteController.createClient)
routes.put("/client/:id", clienteController.updateClient)
routes.delete("/client/:id", clienteController.deleteClient)

          //  ROTAS ORDER
routes.post("/order", orderController.createOrder )

export {routes}