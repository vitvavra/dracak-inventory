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
        this.id = 0;
        this.player = <Player>{};
        this.info = <CharacterBasicInfo>{};
        this.attributes = <CharacterAttributes>{};
        this.profession = <IProfession>{};
        this.inventory = <Inventory>{};
    }

    static fromDb(character: any): Character {
        const that = new Character();
        that.id = character.id;
        that.player = <Player>{
            name: character.playerName,
        };
        that.info = <CharacterBasicInfo>{
            name: character.characterName
        };
        that.attributes = <CharacterAttributes>{
            charm: character.attrCharm,
            constitution: character.attrConstitution,
            determination: character.attrDetermination,
            dexterity: character.attrDexterity,
            intelligence: character.attrIntelligence,
            serenity: character.attrSerenity
        };
        that.profession = <IProfession>{
            basic: {
                bojovnik: character.profBojovnik,
                lovec: character.profLovec,
                kejklir: character.profKejklir,
                mastickar: character.profMastickar,
                zarikavac: character.profZarikavac,
            }
        }
        that.inventory = <Inventory>{};
        return that;
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

export default {}
