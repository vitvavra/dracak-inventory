import type {IProfession} from "@/interface/IProfession";
import type {Inventory} from "@/interface/Inventory";

export interface ICharacter {
    id: number,
    player: Player,
    info: CharacterBasicInfo,
    attributes: CharacterAttributes,
    profession: IProfession,
    inventory: Inventory,
}

export class Character implements ICharacter {
    id: number;
    player: Player;
    info: CharacterBasicInfo;
    attributes: CharacterAttributes;
    profession: IProfession;
    inventory: Inventory;
    constructor() {
        this.player = <Player>{};
        this.info = <CharacterBasicInfo>{};
        this.attributes = <CharacterAttributes>{};
        this.profession = <IProfession>{};
        this.inventory = <Inventory>{};
    }
}

export interface Player {
    name: string;
    book: string;
    character: string;
    group: string;
}

export interface CharacterBasicInfo {
    name: string;
    concept: string;
    sex: Sex;
    type: Type;
    race: Race;
    motivation: string;
    experience: number;
}

export interface CharacterAttributes {
    dexterity: number;
    charm: number;
    intelligence: number;
    constitution: number;
    serenity: number;
    determination: number;
}

enum Sex {
    M,
    F
}

enum Type {
}

enum Race {
    Hobbit
}

export default {
}
