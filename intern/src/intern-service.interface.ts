import { Intern } from "./models/intern.schema";

export interface InternService {
    save(intern: Intern): Promise<Intern | any>
    update(intern: Intern): Promise<Intern | any>
    findOne(payload: any): Promise<Intern | any>
    findAll(): Promise<Array<Intern>>
}
