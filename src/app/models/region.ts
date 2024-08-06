import { Departement } from "./departement";

export class Region {
    id: number;
    image:string;
    nom: string;
    departements: Departement[];
}