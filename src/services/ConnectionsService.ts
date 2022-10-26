import { connectionsRepository } from "../repositories/ConnectionsRepository";
import { Connection } from "./../entities/Connection";

interface ICreateConnection {
  id?: string;
  user_id: string;
  socket_id: string;
  admin_id?: string;
}

export class ConnectionsService {
  async create({
    socket_id,
    user_id,
    admin_id,
    id,
  }: ICreateConnection): Promise<Connection> {
    const connectionExists = await connectionsRepository.findOne({
      where: {
        user_id,
      },
    });

    if (connectionExists) return connectionExists;

    const connection = connectionsRepository.create({
      admin_id,
      socket_id,
      id,
      user_id,
    });

    await connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string): Promise<Connection | null> {
    const connection = await connectionsRepository.findOne({
      where: {
        user_id,
      },
    });

    return connection;
  }

  async findAllWithoutAdmin(): Promise<Connection[]> {
    const connections = await connectionsRepository.find({
      where: {
        admin_id: null,
      },
      relations: ["user"],
    });

    return connections;
  }

  async findBySocketID(socket_id: string) {
    return await connectionsRepository.findOne({
      where: {
        socket_id,
      },
    });
  }

  async updateAdminID(user_id: string, admin_id: string) {
    await connectionsRepository
      .createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where("user_id = :user_id", {
        user_id,
      })
      .execute();
  }

  async deleteBySocketID(socket_id: string) {
    await connectionsRepository
      .createQueryBuilder()
      .delete()
      .where("socket_id = :socket_id", { socket_id })
      .execute();
  }
}
