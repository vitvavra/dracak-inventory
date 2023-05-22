"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_router_1 = require("vue-router");
const CharacterDetailView_vue_1 = __importDefault(require("@/view/CharacterDetailView.vue"));
const CharacterListView_vue_1 = __importDefault(require("@/view/CharacterListView.vue"));
const router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: CharacterDetailView_vue_1.default
        },
        {
            path: '/postavy',
            name: 'character',
            component: CharacterListView_vue_1.default
        },
        {
            path: '/postava/:id',
            name: 'character_detail',
            component: CharacterDetailView_vue_1.default
        }
    ]
});
exports.default = router;
