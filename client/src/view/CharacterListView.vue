<template>
    <v-table>
        <thead>
        <tr>
            <th>Hráč</th>
            <th>Jméno</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="char in characters" :key="char.player.name">
                <td><a :href="`/postava/${char.id}`">{{ char.player.name }}</a></td>
                <td>{{ char.info.name }}</td>
        </tr>
        </tbody>
    </v-table>
</template>
<script lang="ts">
import {ICharacter} from '@/interface/ICharacter';

const URI = 'http://localhost:3000/characters.json';
export default {
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const url = `${URI}`;
            this.characters = await (await fetch(url)).json();
        }
    },
    data: () => ({
        characters: <ICharacter[]>null,
        items: [
            {
                to: '/',
                title: 'test'
            }
        ],
    }),
}
</script>
