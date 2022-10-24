import { io } from "../app";
import { ConnectionsService } from "../services/ConnectionsService";
import { MessagesService } from "../services/MessagesService";
import { UsersService } from "../services/UsersService";

interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on("client_first_access", async (params: IParams) => {
    const socket_id = socket.id;
    const { text, email } = params;

    const user = await usersService.create(email);

    await connectionsService.create({
      socket_id,
      user_id: user.id,
    });

    await messagesService.create({
      text,
      user_id: user.id,
    });
  });
});
