import { Setting } from "../entities/Setting";
import { dataSource } from "./../database/index";

export const settingsRepositories = dataSource.getRepository(Setting);
