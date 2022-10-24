import { dataSource } from "../database";
import { Connection } from "../entities/Connection";

export const connectionsRepository = dataSource.getRepository(Connection);
