import { Departement } from "./models/departement";
import { Pokemon } from "./models/pokemon";
import { Region } from "./models/region";
  
export const POKEMONS: Pokemon[] = [
    {
        id: 1,
        name: "Bulbizarre",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 2,
        name: "Salamèche",
        hp: 28,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 3,
        name: "Carapuce",
        hp: 21,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 4,
        name: "Aspicot",
        hp: 16,
        cp: 2,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        types: ["Insecte", "Poison"],
        created: new Date()
    },
    {
        id: 5,
        name: "Roucool",
        hp: 30,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 6,
        name: "Rattata",
        hp: 18,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 7,
        name: "Piafabec",
        hp: 14,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 8,
        name: "Abo",
        hp: 16,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
        types: ["Poison"],
        created: new Date()
    },
    {
        id: 9,
        name: "Pikachu",
        hp: 21,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        types: ["Electrik"],
        created: new Date()
    },
    {
        id: 10,
        name: "Sabelette",
        hp: 19,
        cp: 3,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 11,
        name: "Mélofée",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
        types: ["Fée"],
        created: new Date()
    },
    {
        id: 12,
        name: "Groupix",
        hp: 17,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        types: ["Feu"],
        created: new Date()
    }
];

export const AUVERGNE_RHONE_ARLES: Departement[] = [
    { id:1, nom:"Ain", valeur:"01" },
    { id:2, nom:"Allier", valeur:"03" },
    { id:3, nom:"Ardèche", valeur:"07" },
    { id:4, nom:"Cantal", valeur:"15" },
    { id:5, nom:"Drôme", valeur:"26" },
    { id:6, nom:"Isère", valeur:"38" },
    { id:7, nom:"Loire", valeur:"42" },
    { id:8, nom:"Haute-Loire", valeur:"43" },
    { id:9, nom:"Puy-de-Dôme", valeur:"63" },
    { id:10, nom:"Rhone", valeur:"69" },
    { id:11, nom:"Savoie", valeur:"73" },
    { id:12, nom:"Haute-Savoie", valeur:"74" },
];

export const BOUGOGNE_FRANCHE_COMTE: Departement[] = [
    { id:13, nom:"Côte-d'Or", valeur:"21" },
    { id:14, nom:"Doubs", valeur:"25" },
    { id:15, nom:"Jura", valeur:"39" },
    { id:16, nom:"Nièvre", valeur:"58" },
    { id:17, nom:"Haute-Saône", valeur:"78" },
    { id:18, nom:"Saône-et-Loire ", valeur:"71" },
    { id:19, nom:"Yonne", valeur:"89" },
    { id:20, nom:"Territoire de Belfort", valeur:"90" }
];

export const BRETAGNE: Departement[] = [
    { id:13, nom:"Côtes-d'Armor", valeur:"22" },
    { id:14, nom:"Finistère", valeur:"29" },
    { id:15, nom:"Ille-et-Vilaine", valeur:"35" },
    { id:16, nom:"Morbihan", valeur:"56" }
];

export const CENTRE_VAL_DE_LOIRE: Departement[] = [
    { id:17, nom:"Cher", valeur:"18" },
    { id:18, nom:"Eure-et-Loir", valeur:"28" },
    { id:19, nom:"Indre", valeur:"36" },
    { id:20, nom:"Indre-et-Loire", valeur:"37" },
    { id:21, nom:"Loir-et-Char", valeur:"41" },
    { id:22, nom:"Loiret", valeur:"45" }
];

export const CORSE: Departement[] = [
    { id:23, nom:"Haute-Corse", valeur:"2A" },
    { id:24, nom:"Corse-du-Sud", valeur:"2B" }
];

export const GRAND_EST: Departement[] = [
    { id:25, nom:"Ardennes", valeur:"08" },
    { id:26, nom:"Aube", valeur:"10" },
    { id:27, nom:"Marne", valeur:"51" },
    { id:28, nom:"Haute-Marne", valeur:"52" },
    { id:29, nom:"Meuse", valeur:"55" },
    { id:30, nom:"Moselle", valeur:"57" },
    { id:31, nom:"Bas-Rhin", valeur:"67" },
    { id:32, nom:"Haut-Rhin", valeur:"68" },
    { id:33, nom:"Voges", valeur:"88" }
];

export const HAUT_DE_FRANCE: Departement[] = [
    { id:34, nom:"Aine", valeur:"02" },
    { id:35, nom:"Nord", valeur:"59" },
    { id:36, nom:"Oise", valeur:"60" },
    { id:37, nom:"Pas-de-Calais", valeur:"62" },
    { id:38, nom:"Somme", valeur:"80" }
];

export const ILE_DE_FRANCE: Departement[] = [
    { id:39, nom:"Paris", valeur:"75" },
    { id:40, nom:"Seine-et-Marne", valeur:"77" },
    { id:41, nom:"Yvelines", valeur:"78" },
    { id:42, nom:"Essonne", valeur:"91" },
    { id:43, nom:"Haut-de-Seine", valeur:"92" },
    { id:44, nom:"Seine-Saint-Denis", valeur:"93" },
    { id:45, nom:"Val-de-Marne", valeur:"94" },
    { id:46, nom:"Val-d'Oise", valeur:"95" }
];

export const NORMANDIE: Departement[] = [
    { id:47, nom:"Calvados", valeur:"14" },
    { id:48, nom:"Eure", valeur:"27" },
    { id:49, nom:"Manche", valeur:"50" },
    { id:50, nom:"Orne", valeur:"61" },
    { id:51, nom:"Seine-Maritime", valeur:"76" }
];

export const NOUVELLE_AQUITAINE: Departement[] = [
    { id:52, nom:"Charente", valeur:"16" },
    { id:53, nom:"Charente-Maritime", valeur:"17" },
    { id:54, nom:"Île d'Oléron", valeur:"17" },
    { id:55, nom:"Corrèze", valeur:"19" },
    { id:56, nom:"Creuse", valeur:"23" },
    { id:57, nom:"Dordogne", valeur:"24" },
    { id:58, nom:"Gironde", valeur:"33" },
    { id:59, nom:"Landes", valeur:"40" },
    { id:60, nom:"Lot-et-Garonne", valeur:"47" },
    { id:61, nom:"Pyrénnées-Atlantiques", valeur:"64" },
    { id:62, nom:"Deux-Sèvres", valeur:"79" },
    { id:63, nom:"Vienne - 86", valeur:"86" },
    { id:64, nom:"Haut-Vienne", valeur:"87" }
];

export const OCCITANIE: Departement[] = [
    { id:65, nom:"Ariège", valeur:"09" },
    { id:66, nom:"Aude", valeur:"11" },
    { id:67, nom:"Aveyron", valeur:"12" },
    { id:68, nom:"Gard", valeur:"30" },
    { id:69, nom:"Haute-Garonne", valeur:"31" },
    { id:70, nom:"Gers", valeur:"32" },
    { id:71, nom:"Hérault", valeur:"34" },
    { id:72, nom:"Lot", valeur:"46" },
    { id:73, nom:"Lozère", valeur:"48" },
    { id:74, nom:"Hautes-Pyrénées", valeur:"65" },
    { id:75, nom:"Pyrénées-Orientales", valeur:"66" },
    { id:76, nom:"Tran", valeur:"81" },
    { id:77, nom:"Tarn-et-Garonne", valeur:"82" }
];

export const PAYS_DE_LOIRE: Departement[] = [
    { id:78, nom:"Loire-Atlantique", valeur:"44" },
    { id:79, nom:"Maine-et-Loire", valeur:"49" },
    { id:80, nom:"Mayenne", valeur:"53" },
    { id:81, nom:"Sarthe", valeur:"72" },
    { id:82, nom:"Vendée", valeur:"85" }
];

export const PROVENCE_ALPES_COTE_AZURE: Departement[] = [
    { id:83, nom:"Alpes-de-Hautre-Provence", valeur:"04" },
    { id:84, nom:"Hautes-Alpes", valeur:"05" },
    { id:85, nom:"Alpes-Maritimes", valeur:"06" },
    { id:86, nom:"Bouches-du-Rhône", valeur:"13" },
    { id:87, nom:"Var", valeur:"83" },
    { id:88, nom:"Vaucluse", valeur:"84" }
];

export const OUTRE_MER: Departement[] = [
    { id:89, nom:"Guadeloupe", valeur:"971" },
    { id:90, nom:"Martinique", valeur:"972" },
    { id:91, nom:"Guyane", valeur:"973" },
    { id:92, nom:"Réunion", valeur:"974" },
    { id:93, nom:"Mayotte", valeur:"976" }
];

export const REGION: Region[] = [
    {
        id: 1,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        nom: "Auvergne-Rhône-Alpes",
        departements: AUVERGNE_RHONE_ARLES
    },{
        id: 2,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        nom: "Bourgogne-Franche-Comté",
        departements: BOUGOGNE_FRANCHE_COMTE
    },{
        id: 3,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        nom: "Betagne",
        departements: BRETAGNE
    },{
        id: 4,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        nom: "Centre val de loire",
        departements: CENTRE_VAL_DE_LOIRE
    },{
        id: 5,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        nom: "Corse",
        departements: CORSE
    },{
        id: 6,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        nom: "Grand Est",
        departements: GRAND_EST
    },{
        id: 7,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
        nom: "Hauts de France",
        departements: HAUT_DE_FRANCE
    },{
        id: 8,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
        nom: "Île-de-France",
        departements: ILE_DE_FRANCE
    },{
        id: 9,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        nom: "Normandie",
        departements: NORMANDIE
    },{
        id: 10,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
        nom: "Nouvelle aquitaine",
        departements: NOUVELLE_AQUITAINE
    },{
        id: 11,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
        nom: "occitanie",
        departements: OCCITANIE
    },{
        id: 12,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        nom: "Pays de la loire",
        departements: PAYS_DE_LOIRE
    },{
        id: 13,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        nom: "Provence-alpes-côte d'azure",
        departements: PROVENCE_ALPES_COTE_AZURE
    },{
        id: 14,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        nom: "Outre-mer",
        departements: OUTRE_MER
    }
]