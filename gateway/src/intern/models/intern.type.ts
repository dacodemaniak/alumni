import { CompanyType } from './company.type';
import { PoeType } from './poe.type';

export type InternType = {
  id?: number
  lastname: string
  firstname: string
  gender: string
  emails: Array<string>
  phoneNumber: string
  company: CompanyType
  poe: PoeType
  occupation?: string

};
