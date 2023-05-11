export interface IProfession {
    basic: BasicProfession;
    advanced: AdvancedProfession;
}

export class Profession implements IProfession{
    advanced: AdvancedProfession;
    basic: BasicProfession;

    constructor() {
        this.basic = <BasicProfession>{};
        this.advanced = <AdvancedProfession>{};
    }
}

export interface BasicProfession {
    bojovnik: number;
    lovec: number;
    kejklir: number;
    mastickar: number;
    zarikavac: number;
}

export interface AdvancedProfession {
}

export default {

}
