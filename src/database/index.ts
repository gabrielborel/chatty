import { DataSource } from "typeorm";
import { Setting } from "../entities/Setting";
import { CreateSettings1666525963593 as CreateSettings } from "./migrations/1666525963593-CreateSettings";
import { CreateUsers1666531350355 as CreateUsers } from "./migrations/1666531350355-CreateUsers";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  migrations: [CreateSettings, CreateUsers],
  entities: [Setting],
});
