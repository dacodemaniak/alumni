import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findOne(payload: any): import("./models/intern.type").InternType;
    findAll(): import("./models/intern.type").InternType[];
}
