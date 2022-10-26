import { MessagesController } from "./controllers/MessagesController";
import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

export const router = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

router.post("/settings", settingsController.create);
router.get("/settings/:username", settingsController.findByUsername);
router.put("/settings/:username", settingsController.update);

router.post("/users", usersController.create);

router.post("/messages", messagesController.create);
router.get("/messages/:id", messagesController.listByUser);
