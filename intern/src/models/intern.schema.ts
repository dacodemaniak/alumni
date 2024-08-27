import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PoeModel } from "./poe.model";
import { CompanyModel } from "./company.model";

export type InternDocument = Intern & Document

@Schema()
export class Intern {
    @Prop()
    lastname: string

    @Prop()
    firstname: string

    @Prop()
    gender: string

    @Prop()
    emails: Array<string>

    @Prop({
        type: PoeModel
    })
    poe: PoeModel

    @Prop({
        type: CompanyModel
    })
    company: CompanyModel
    
    @Prop()
    occupation: string

    @Prop()
    phoneNumber: string
    
}

export const InternSchema = SchemaFactory.createForClass(Intern)