import { settingsRepositories } from "./../repositories/SettingsRepositories";
import { Request, Response } from "express";

export class SettingsController {
  async create(req: Request, res: Response): Promise<Response> {
    const { username, chat } = req.body;

    const settings = settingsRepositories.create({ username, chat });

    await settingsRepositories.save(settings);

    return res.status(201).json(settings);
  }
}
