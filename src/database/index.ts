import { DataSource } from "typeorm";
import { Setting } from "../entities/Setting";
import { CreateSettings1666525963593 as CreateSettings } from "./migrations/1666525963593-CreateSettings";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  migrations: [CreateSettings],
  entities: [Setting],
});
