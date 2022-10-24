import { settingsRepositories } from "./../repositories/SettingsRepositories";
import { Setting } from "./../entities/Setting";
import { UpdateResult } from "typeorm";

interface ICreateSetting {
  username: string;
  chat: boolean;
}

export class SettingsService {
  async create({ chat, username }: ICreateSetting): Promise<Setting> {
    const settings = settingsRepositories.create({ username, chat });

    const userAlreadyExists = await settingsRepositories.findOne({
      where: {
        username,
      },
    });

    if (userAlreadyExists) throw new Error("User already exists.");

    await settingsRepositories.save(settings);

    return settings;
  }

  async findByUsername(username: string): Promise<Setting> {
    const settings = await settingsRepositories.findOne({
      where: {
        username,
      },
    });

    return settings;
  }

  async update(username: string, chat: boolean): Promise<UpdateResult> {
    const settings = await settingsRepositories
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where("username = :username", { username })
      .execute();

    return settings;
  }
}
