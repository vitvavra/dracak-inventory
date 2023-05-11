<template>
    <v-card>
        <v-layout>
            <v-app-bar prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>Ahoj</v-toolbar-title>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" temporary>
                <v-list-item to="/postavy" title="Seznam postav">
                </v-list-item>
            </v-navigation-drawer>
            <v-main>
                <RouterView></RouterView>
            </v-main>
        </v-layout>
    </v-card>
</template>
<script setup>
</script>
<script lang="ts">
export default {
    data: () => ({
        drawer: false,
        group: null,
    }),
    watch: {
        group () {
            this.drawer = false
        }
    }
}
</script>
