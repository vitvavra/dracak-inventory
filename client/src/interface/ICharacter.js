"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor() {
        this.id = 0;
        this.player = {};
        this.info = {};
        this.attributes = {};
        this.profession = {};
        this.inventory = {};
    }
    static fromDb(character) {
        const that = new Character();
        that.id = character.id;
        that.player = {
            name: character.playerName,
        };
        that.info = {
            name: character.characterName
        };
        that.attributes = {
            charm: character.attrCharm,
            constitution: character.attrConstitution,
            determination: character.attrDetermination,
            dexterity: character.attrDexterity,
            intelligence: character.attrIntelligence,
            serenity: character.attrSerenity
        };
        that.profession = {
            basic: {
                bojovnik: character.profBojovnik,
                lovec: character.profLovec,
                kejklir: character.profKejklir,
                mastickar: character.profMastickar,
                zarikavac: character.profZarikavac,
            }
        };
        that.inventory = {};
        return that;
    }
}
exports.Character = Character;
var Sex;
(function (Sex) {
    Sex[Sex["M"] = 0] = "M";
    Sex[Sex["F"] = 1] = "F";
})(Sex || (Sex = {}));
var Type;
(function (Type) {
})(Type || (Type = {}));
var Race;
(function (Race) {
    Race[Race["Hobbit"] = 0] = "Hobbit";
})(Race || (Race = {}));
exports.default = {};
