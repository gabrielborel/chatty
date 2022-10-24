import { Message } from "../entities/Message";
import { dataSource } from "./../database/index";

export const messagesRepository = dataSource.getRepository(Message);
