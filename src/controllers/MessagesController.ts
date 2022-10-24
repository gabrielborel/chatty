import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

export class MessagesController {
  async create(req: Request, res: Response): Promise<Response> {
    const { user_id, text, admin_id } = req.body;

    const messagesService = new MessagesService();

    const message = await messagesService.create({ text, user_id, admin_id });

    return res.status(201).json(message);
  }

  async listByUser(req: Request, res: Response): Promise<Response> {
    const { id: user_id } = req.params;

    const messagesService = new MessagesService();

    const messages = await messagesService.listByUser(user_id);

    return res.status(200).json(messages);
  }
}
