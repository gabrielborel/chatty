import { Message } from "../entities/Message";
import { messagesRepository } from "../repositories/MessagesRepository";

interface ICreateMessage {
  admin_id?: string;
  text: string;
  user_id: string;
}

export class MessagesService {
  async create({ admin_id, text, user_id }: ICreateMessage): Promise<Message> {
    const message = messagesRepository.create({
      user_id,
      admin_id,
      text,
    });

    await messagesRepository.save(message);

    return message;
  }

  async listByUser(user_id: string): Promise<Message[]> {
    const messages = await messagesRepository.find({
      where: {
        user_id,
      },
      relations: ["user"],
    });

    return messages;
  }
}
