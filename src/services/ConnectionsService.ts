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
}
