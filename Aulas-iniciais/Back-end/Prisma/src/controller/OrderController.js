import { prismaClient } from "../database/PrismaClient.js";

export class OrderCrontroller {

    async createOrder (request, response) {
        const {description, price, client_id} = request.body; // Buscando informações do body
        const client = await prismaClient.order.create({
            data:{
              description,
              price,
              client 
            }
        });
        response.status(201).json(client);
    }


}