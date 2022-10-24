import { DataSource } from "typeorm";
import { Connection } from "../entities/Connection";
import { Message } from "../entities/Message";
import { Setting } from "../entities/Setting";
import { User } from "../entities/User";
import { CreateSettings1666525963593 as CreateSettings } from "./migrations/1666525963593-CreateSettings";
import { CreateUsers1666531350355 as CreateUsers } from "./migrations/1666531350355-CreateUsers";
import { CreateMessages1666533431464 as CreateMessages } from "./migrations/1666533431464-CreateMessages";
import { CreateConnections1666565099946 as CreateConnections } from "./migrations/1666565099946-CreateConnections";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  migrations: [CreateSettings, CreateUsers, CreateMessages, CreateConnections],
  entities: [Setting, User, Message, Connection],
});

dataSource
  .initialize()
  .then(() => console.log("Data Source started."))
  .catch((err) => console.log(err));
