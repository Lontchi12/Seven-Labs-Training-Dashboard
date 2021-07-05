import { Role } from "./Role";

export interface Auth{
    id?:number,
    username: string,
    password: string,
    role?: Role
}