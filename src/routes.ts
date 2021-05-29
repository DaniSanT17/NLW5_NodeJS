import {Router} from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsControler } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();

const userController = new UsersController();
const settingsController = new SettingsControler();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create); 
routes.get("/settings/:username", settingsController.findByUsername); 
routes.put("/settings/:username", settingsController.update); 

routes.post("/users", userController.create); 

routes.post("/messages", messagesController.create); 
routes.get("/messages/:id", messagesController.showByUser); 

export {routes};