import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsControler {

    async create(request: Request, response: Response) {
        const {chat, username} = request.body;

        const settingsServices = new SettingsService();

        try {
            const settings = await settingsServices.create({chat, username})
        
            return response.json(settings);
        } catch (err) {
            return response.status(400).json({
                message: err.message,
            })
        }
    }
}

export {SettingsControler};