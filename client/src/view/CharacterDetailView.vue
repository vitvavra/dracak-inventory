<template>
    <v-card>
        <v-tabs v-model="tab">
            <v-tab value="overview">Info</v-tab>
            <v-tab value="attributes">Atributy</v-tab>
            <v-tab value="inventory">Inventář</v-tab>
            <v-tab value="profession">Profese</v-tab>
        </v-tabs>
        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="overview">
                    <v-container fluid>
                        <v-sheet class="d-flex flex-wrap">
                            <v-text-field clearable label="Hráč" variant="underlined"
                                          v-model="character.player.name"></v-text-field>
                            <v-text-field clearable label="Skupina" variant="underlined"
                                          v-model="character.player.group"></v-text-field>
                        </v-sheet>
                        <v-sheet class="d-flex flex-wrap">
                            <v-text-field clearable label="Postava" variant="underlined"
                                          v-model="character.player.character"></v-text-field>
                            <v-text-field clearable label="Kronika" variant="underlined"
                                          v-model="character.player.book"></v-text-field>
                        </v-sheet>
                        <v-sheet class="d-flex flex-wrap">
                            <v-text-field clearable label="Jméno" variant="underlined"
                                          v-model="character.info.name"></v-text-field>
                            <v-text-field clearable label="Zkušenosti" variant="underlined"
                                          v-model="character.info.experience"></v-text-field>
                        </v-sheet>
                        <v-sheet>
                        </v-sheet>
                        <v-sheet class="d-flex flex-wrap">
                            <v-text-field clearable label="Druh" variant="underlined"
                                          v-model="character.info.type"></v-text-field>
                            <v-text-field clearable label="Pohlaví" variant="underlined"
                                          v-model="character.info.sex"></v-text-field>
                            <v-text-field clearable label="Rasa" variant="underlined"
                                          v-model="character.info.race"></v-text-field>
                        </v-sheet>
                        <v-sheet>
                            <v-textarea label="Motivace"></v-textarea>
                        </v-sheet>
                    </v-container>
                </v-window-item>
                <v-window-item value="attributes">
                    <v-container fluid>
                        <v-sheet class="d-flex flex-wrap">
                            <v-text-field clearable label="Obratnost" variant="underlined"
                                          v-model="character.attributes.dexterity"></v-text-field>
                            <v-text-field clearable label="Šarm" variant="underlined"
                                          v-model="character.attributes.charm"></v-text-field>
                            <v-text-field clearable label="Inteligence" variant="underlined"
                                          v-model="character.attributes.intelligence"></v-text-field>
                        </v-sheet>
                        <v-sheet class="d-flex flex-wrap">
                            <v-text-field clearable label="Konstituce" variant="underlined"
                                          v-model="character.attributes.constitution"></v-text-field>
                            <v-text-field clearable label="Vyrovnanost" variant="underlined"
                                          v-model="character.attributes.serenity"></v-text-field>
                            <v-text-field clearable label="Rozhodnost" variant="underlined"
                                          v-model="character.attributes.determination"></v-text-field>
                        </v-sheet>
                    </v-container>
                </v-window-item>
                <v-window-item value="inventory">
                    <v-text-field @keyup.enter="addInventoryItem"></v-text-field>
                    <v-list>
                        <v-list-item v-for="item in character.inventory.bag" :key="item" @click.left="removeInventoryItem(item)">
                            {{item}}
                        </v-list-item>
                    </v-list>
                </v-window-item>
                <v-window-item value="profession">
                    <v-container fluid>
                        <h4>Základní</h4>
                        <v-sheet class="d-flex flex-wrap">
                            <v-table class="flex-1-0">
                                <thead>
                                <tr>
                                    <td>Bojovník ({{character.profession.basic.bojovnik}})</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Boj</td>
                                </tr>
                                <tr>
                                    <td>Zastrašování</td>
                                </tr>
                                <tr>
                                    <td>Atletika</td>
                                </tr>
                                <tr>
                                    <td>Těžké práce</td>
                                </tr>
                                </tbody>
                            </v-table>
                            <v-table class="flex-1-0">
                                <thead>
                                <tr>
                                    <td>Lovec ({{character.profession.basic.lovec}})</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Boj(luky, ldi)</td>
                                </tr>
                                <tr>
                                    <td>Cit pro zvěř</td>
                                </tr>
                                <tr>
                                    <td>Tvorba pastí</td>
                                </tr>
                                <tr>
                                    <td>Zálesáctví</td>
                                </tr>
                                </tbody>
                            </v-table>
                            <v-table class="flex-1-0">
                                <thead>
                                <tr>
                                    <td>Kejklíř ({{character.profession.basic.kejklir}})</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Boj</td>
                                </tr>
                                <tr>
                                    <td>Manipulace</td>
                                </tr>
                                <tr>
                                    <td>Akrobacie</td>
                                </tr>
                                <tr>
                                    <td>Kradmost</td>
                                </tr>
                                </tbody>
                            </v-table>
                            <v-table class="flex-1-0">
                                <thead>
                                <tr>
                                    <td>Mastičkář ({{character.profession.basic.mastickar}})</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Léčba těla</td>
                                </tr>
                                <tr>
                                    <td>Empatie</td>
                                </tr>
                                <tr>
                                    <td>Jedy a masti</td>
                                </tr>
                                <tr>
                                    <td>Ruční práce</td>
                                </tr>
                                </tbody>
                            </v-table>
                            <v-table class="flex-1-0">
                                <thead>
                                <tr>
                                    <td>Zaříkávač ({{character.profession.basic.zarikavac}})</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Kletby a požehnání</td>
                                </tr>
                                <tr>
                                    <td>Šestý smysl</td>
                                </tr>
                                <tr>
                                    <td>Rituály a obrazce</td>
                                </tr>
                                <tr>
                                    <td>Učenost</td>
                                </tr>
                                </tbody>
                            </v-table>
                        </v-sheet>
                    </v-container>
                    <v-container fluid>
                        <h4>Pokročilé</h4>
                    </v-container>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">

import {ICharacter, Character} from "@/interface/ICharacter";
import profession from "@/interface/IProfession";

const URI = 'http://localhost:3000/character.json';
export default {
    computed: {
        profession() {
            return profession
        }
    },
    created() {
        this.fetchCharacter();
    },
    methods: {
        async fetchCharacter() {
            this.character = await (await fetch(URI)).json();
        },
        addInventoryItem(e) {
            this.character.inventory.bag.push(e.target.value.trim());
        },
        removeInventoryItem(item: string) {
            this.character.inventory.bag.splice(this.character.inventory.bag.indexOf(item), 1)
        }
    },
    data: () => ({
        tab: null,
        character: <ICharacter>new Character()
    }),
}
</script>
