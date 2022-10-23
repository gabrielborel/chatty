import { DataSource } from "typeorm";
import { Message } from "../entities/Message";
import { Setting } from "../entities/Setting";
import { User } from "../entities/User";
import { CreateSettings1666525963593 as CreateSettings } from "./migrations/1666525963593-CreateSettings";
import { CreateUsers1666531350355 as CreateUsers } from "./migrations/1666531350355-CreateUsers";
import { CreateMessages1666533431464 as CreateMessages } from "./migrations/1666533431464-CreateMessages";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  migrations: [CreateSettings, CreateUsers, CreateMessages],
  entities: [Setting, User, Message],
});
