            //      Organização das pastas

import { prismaClient } from "../database/PrismaClient.js";

// Classe que contem todos todas as funções e os metodos das rotas
export class ClienteController {  
    
        // Retorna a consulta de todas as informações da tabela client (id, email e telefone)
    async findAllClients (request, response) {
        const clients = await prismaClient.client.findMany();
        response.status(200).json(clients);
    }
            // Consulta na tanela client por id
    async findClientsById (request, response) {
        const { id } = request.params;
        try { 
            const client = await prismaClient.client.findFirst({
            where: {
                id
            },
            include:{
                order:true
            }
            });
            if (!client) {   // Se não existir um cliente, a condição faz retonar o erro 404
                response.status(404).send();
            }
            response.status(200).json(client);
        } catch(erro) {
            response.status(500).send();
        }    
    }

    async createClient (request, response) {
        const {name, email, phone} = request.body; // Buscando informações do body
        const client = await prismaClient.client.create({
            data:{
                name,
                email,
                phone
            }
        });
        response.status(201).json(client);
    }

    async updateClient (request, response) {
        const { id } = request.params
        const {name, email, phone} = request.body; // Buscando informações do body
        const client = await prismaClient.client.update({
            where: {
                id
            },
            data:{
                name,
                email,
                phone
            }
        });
        response.status(200).json(client);
    }

    async deleteClient (request, response) {
        const { id } = request.params;
        const client = await prismaClient.client.delete({
            where: {
                id
            },
        });
        response.status(204).send();
    }
}