import { MyUserAddress } from "./MyUserAddress";
import { MyUserCompany } from "./MyUserCompany";

export class MyUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: MyUserAddress;
  phone: string;
  website: string;
  company: MyUserCompany;
}
